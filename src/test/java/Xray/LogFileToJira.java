package Xray;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Base64;

public class LogFileToJira {


    public static  String SUMMARY_LOG_FILE = "./target/gatling/tdg-ukaf-externalize-20240115111702127/simulation.log";

   // public static String globalstat = "./target/gatling/tdg-ukaf-externalize-20240115111702127/js/global_stats.json";

   // public static String attachReport = " ./target/gatling/tdg-ukaf-externalize-20240115111702127/index.html";



    public static void main(String[] args) {

        File jsonFile = new File("./target/gatling/tdg-ukaf-externalize-20240115111702127/js/global_stats.json");

        String desiredKey = "ko";

        int threshold = 10000;

        String jiraBaseUrl = "https://tdgteams-ukaf.atlassian.net";
        String jiraUsername = "your-username";
        String jiraPassword = "your-password";
        String jiraIssueKey = "your-issue-key";

        extractAndCheck(jsonFile, desiredKey, threshold, jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey);
    }

    private static void extractAndCheck(File jsonFile, String desiredKey, int threshold,
                                        String jiraBaseUrl, String jiraUsername, String jiraPassword, String jiraIssueKey) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(jsonFile);


            if (rootNode.has("numberOfRequests")) {
                JsonNode numberOfRequestsNode = rootNode.get("numberOfRequests");


                if (numberOfRequestsNode.has(desiredKey)) {
                    int value = numberOfRequestsNode.get(desiredKey).asInt();


                    String testCaseStatus = (value > threshold) ? "failed" : "Passed, " +desiredKey +" value is within the threshold and ko value is = "+value;


                    System.out.println("Test case status: " + testCaseStatus);


                    if (testCaseStatus.equals("failed")) {
                        String koValueMessage = "Failed due to the 'ko' value exceeded the threshold: " + value;
                        writeSummaryLog(koValueMessage);

                        attachFileToJira(jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey, SUMMARY_LOG_FILE);
                     //   attachFileToJira(jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey,globalstat );
                      //  attachFileToJira(jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey,attachReport );
                    }


                    String comment = "Test case status: " + testCaseStatus;
                    addCommentToJira(jiraBaseUrl, jiraUsername, jiraPassword, jiraIssueKey, comment);

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

    private static void writeSummaryLog(String message) {
        try {

            Files.write(Paths.get(SUMMARY_LOG_FILE), (message + System.lineSeparator()).getBytes(), StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            System.out.println("Summary log updated successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void addCommentToJira(String jiraBaseUrl, String jiraUsername, String jiraPassword,
                                         String jiraIssueKey, String comment) {
        try {

            String jiraApiEndpoint = jiraBaseUrl + "/rest/api/2/issue/{issueKey}/comment";

            URL url = new URL(jiraApiEndpoint.replace("{issueKey}", jiraIssueKey));
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);


            String authString = jiraUsername + ":" + jiraPassword;
            String authHeaderValue = "Basic " + java.util.Base64.getEncoder().encodeToString(authString.getBytes());
            connection.setRequestProperty("Authorization", authHeaderValue);


            connection.setRequestProperty("Content-Type", "application/json");


            String  payload = "{\"body\": \"" + comment + "\"}";

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

    private static void attachFileToJira(String jiraBaseUrl, String jiraUsername, String jiraPassword,
                                         String jiraIssueKey, String filePath) {
        try {

            byte[] fileContent = Files.readAllBytes(Paths.get(filePath));


            String base64FileContent = Base64.getEncoder().encodeToString(fileContent);


            String jiraApiEndpoint = jiraBaseUrl + "/rest/api/2/issue/{issueKey}/attachments";

            URL url = new URL(jiraApiEndpoint.replace("{issueKey}", jiraIssueKey));
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);


            String authString = jiraUsername + ":" + jiraPassword;
            String authHeaderValue = "Basic " + Base64.getEncoder().encodeToString(authString.getBytes());
            connection.setRequestProperty("Authorization", authHeaderValue);


            connection.setRequestProperty("Content-Type", "application/json");


            String payload = "{\"filename\": \"" + Paths.get(filePath).getFileName() + "\", \"content\": \"" + base64FileContent + "\"}";

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
                System.out.println("File attached to Jira successfully. Response: " + response.toString());
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

