package Xray;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;


import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Base64;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;


public class LogFileToJira {
    public static String targetPath = "target";
    public static String folderName = "gatling";
    public static File latestFolder = findLatestFolder(targetPath, folderName);
    public static String mostRecentFolder = latestFolder.getName();
    public static int threshold = 0;


    public static String jiraIssueKey = "UKAF-2";
    public static String desiredKey = "percentage";
    public static String jiraBaseUrl = "https://tdgteams-ukaf.atlassian.net/";
    public static String jiraUsername = "akshay.gurjar@thedigitalgroup.com";
    public static String jiraPassword = "ATATT3xFfGF0OMovtr5wWjnMvM9mLQYJQAgYq_rA08ciVhoJf1XCu1QkgKqoaTc8CLfd5TwkCTQjNq9nCeRemBEDfUP_wQauiYYhuh7tnvuN9e11V9cOkNajRsgbBt1f98lG4baOjm9ONO8He6fI5TiaeSPj_VqQDsjjmyafeaIula5Owj3cFFo=B112322F"; // Replace with your Jira password

    public static File jsonFile = new File("./target/gatling/"+mostRecentFolder+"/js/global_stats.json");
    public static String SUMMARY_LOG_FILE = "./target/gatling/"+mostRecentFolder+"/simulation.log";
    public static String globalStat = "./target/gatling/"+mostRecentFolder+"/index.html";



    public static void main(String[] args)  {


        if (mostRecentFolder != null) {
            jsonFile = new File("./target/gatling/"+mostRecentFolder+"/js/global_stats.json");
            SUMMARY_LOG_FILE = "./target/gatling/"+mostRecentFolder+"/simulation.log";
            globalStat = "./target/gatling/"+mostRecentFolder+"/index.html";

            extractAndCheck(jsonFile, desiredKey, threshold, jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey);
        } else {
            System.out.println("No folders found in the target/gatling directory.");
        }

        // addOrOverrideAttachmentToJira(jiraBaseUrl, jiraIssueKey,jiraUsername, jiraPassword, globalStat);
    }


    public static File findLatestFolder(String parentPath, String folderName) {
        File parentDir = new File(parentPath, folderName);

        if (!parentDir.exists() || !parentDir.isDirectory()) {
            System.out.println("The '" + folderName + "' directory does not exist.");
            return null;
        }

        File[] subdirs = parentDir.listFiles(File::isDirectory);

        if (subdirs == null || subdirs.length == 0) {
            System.out.println("No subdirectories found inside the '" + folderName + "' directory.");
            return null;
        }

        File latestFolder = null;
        long latestTimestamp = Long.MIN_VALUE;

        for (File subdir : subdirs) {
            long timestamp = subdir.lastModified();
            if (timestamp > latestTimestamp) {
                latestTimestamp = timestamp;
                latestFolder = subdir;
            }
        }

        return latestFolder;
    }





    public static void extractAndCheck(File jsonFile, String desiredKey, int threshold,
                                       String jiraBaseUrl, String jiraUsername, String jiraPassword, String jiraIssueKey) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(jsonFile);


            if (rootNode.has("group4")) {
                JsonNode numberOfRequestsNode = rootNode.get("group4");


                if (numberOfRequestsNode.has(desiredKey)) {
                    int value = numberOfRequestsNode.get(desiredKey).asInt();


                    String testCaseStatus = (value >= threshold) ? "failed" : "Passed, " + desiredKey + " value is within the threshold and ko value is = " + value;


                    System.out.println("Test case status: " + testCaseStatus);


                    if (testCaseStatus.equals("failed")) {
                        String koValueMessage = "Failed due to the 'ko' value exceeded the threshold: " + value;
                        writeSummaryLog(koValueMessage);


                    }


                    String comment = "Test case status: " + testCaseStatus;
                    addStatusToJira(jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey, comment);
                    // addOrOverrideAttachmentToJira(jiraBaseUrl, jiraIssueKey,jiraUsername, jiraPassword, globalStat);
                    addOrOverrideAttachmentToJira(jiraBaseUrl, jiraIssueKey,jiraUsername, jiraPassword, SUMMARY_LOG_FILE);
                    // addAttachmentToJira(jiraBaseUrl,jiraIssueKey, jiraUsername, jiraPassword,  SUMMARY_LOG_FILE);
                    addAttachmentToJira(jiraBaseUrl,jiraIssueKey, jiraUsername, jiraPassword,  globalStat);

                } else {
                    System.out.println("Key '" + desiredKey + "' not found in 'numberOfRequests'.");
                }
            } else {
                System.out.println("Key 'numberOfRequests' not found in the JSON.");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public static void writeSummaryLog(String message) {
        try {

            Files.write(Paths.get(SUMMARY_LOG_FILE), (message + System.lineSeparator()).getBytes(), StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            System.out.println("Summary log updated successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public static void addStatusToJira(String jiraBaseUrl, String jiraUsername, String jiraPassword,
                                       String jiraIssueKey, String comment) {
        try {

            String jiraApiEndpoint = jiraBaseUrl + "rest/api/2/issue/{issueKey}/comment";

            URL url = new URL(jiraApiEndpoint.replace("{issueKey}", jiraIssueKey));
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);


            String authString = jiraUsername + ":" + jiraPassword;
            String authHeaderValue = "Basic " + java.util.Base64.getEncoder().encodeToString(authString.getBytes());
            connection.setRequestProperty("Authorization", authHeaderValue);


            connection.setRequestProperty("Content-Type", "application/json");


            String payload = "{\"body\": \"" + comment + "\"}";

            try (OutputStream os = connection.getOutputStream()) {
                byte[] input = payload.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            try (BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"))) {
                StringBuilder response = new StringBuilder();
                String responseLine = null;
                while ((responseLine = br.readLine()) != null) {
                    response.append(responseLine.trim());
                }
                System.out.println("Comment added to Jira successfully. Response: " + response.toString());
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public static void addAttachmentToJira(String jiraUrl, String issueKey, String username, String password, String filePath) throws IOException {
        HttpClient httpClient = HttpClients.createDefault();

        try {

            HttpPost httpPost = new HttpPost(jiraUrl + "rest/api/3/issue/" + issueKey + "/attachments");


            httpPost.setHeader("Authorization", "Basic " + Base64.getEncoder().encodeToString((username + ":" + password).getBytes()));
            httpPost.setHeader("X-Atlassian-Token","no-check");

            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
            builder.addBinaryBody("file", new File(filePath), ContentType.APPLICATION_OCTET_STREAM, "file");

            httpPost.setEntity(builder.build());


            HttpResponse response = httpClient.execute(httpPost);


            int statusCode = response.getStatusLine().getStatusCode();
            System.out.println("Response Code: " + statusCode);


            HttpEntity responseEntity = response.getEntity();
            if (responseEntity != null) {
                System.out.println(EntityUtils.toString(responseEntity));
            }

            if (statusCode == 200 || statusCode == 201) {
                System.out.println("Attachment added successfully.");
            } else {
                System.out.println("Failed to add attachment. Status code: " + statusCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }



    }

    public static void addOrOverrideAttachmentToJira(String jiraUrl, String issueKey, String username, String password, String filePath) throws IOException {
        HttpClient httpClient = HttpClients.createDefault();

        try {

            List<String> existingAttachments = getExistingAttachments(jiraUrl, issueKey, username, password);


            for (String attachmentId : existingAttachments) {
                deleteAttachment(jiraUrl, attachmentId, username, password);
            }


            addAttachmentToJira(jiraUrl, issueKey, username, password, filePath);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static List<String> getExistingAttachments(String jiraUrl, String issueKey, String username, String password) throws IOException {
        List<String> attachmentIds = new ArrayList<>();
        HttpClient httpClient = HttpClients.createDefault();

        // try {
        HttpGet httpGet = new HttpGet(jiraUrl + "rest/api/3/issue/" + issueKey + "?fields=attachment");
        httpGet.setHeader("Authorization", "Basic " + Base64.getEncoder().encodeToString((username + ":" + password).getBytes()));

        HttpResponse response = httpClient.execute(httpGet);
        int statusCode = response.getStatusLine().getStatusCode();

        if (statusCode == 200) {
            HttpEntity responseEntity = response.getEntity();
            String responseBody = EntityUtils.toString(responseEntity);

            JSONObject json = new JSONObject(responseBody);
            JSONArray attachments = json.getJSONObject("fields").getJSONArray("attachment");

            for (int i = 0; i < attachments.length(); i++) {
                attachmentIds.add(attachments.getJSONObject(i).getString("id"));
            }
        } else {
            System.out.println("Failed to get existing attachments. Status code: " + statusCode);
        }


        return attachmentIds;
    }

    private static void deleteAttachment(String jiraUrl, String attachmentId, String username, String password) throws IOException {
        HttpClient httpClient = HttpClients.createDefault();


        HttpDelete httpDelete = new HttpDelete(jiraUrl + "rest/api/3/attachment/" + attachmentId);
        httpDelete.setHeader("Authorization", "Basic " + Base64.getEncoder().encodeToString((username + ":" + password).getBytes()));

        HttpResponse response = httpClient.execute(httpDelete);
        int statusCode = response.getStatusLine().getStatusCode();

        if (statusCode == 204) {
            System.out.println("Attachment deleted successfully: " + attachmentId);
        } else {
            System.out.println("Failed to delete attachment. Status code: " + statusCode);
        }

    }





}












