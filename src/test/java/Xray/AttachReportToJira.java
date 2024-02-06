package Xray;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;

import java.io.File;
import java.io.IOException;

public class AttachReportToJira {


    public static void uploadAttachment(String jiraUrl, String issueKey, String username, String apiToken, String filePath) throws IOException {
        HttpClient httpClient = HttpClients.createDefault();
        HttpPost httpPost = new HttpPost(jiraUrl + "rest/api/2/issue/" + issueKey + "/attachments");

        String credentials = username + ":" + apiToken;
        String encodedCredentials = java.util.Base64.getEncoder().encodeToString(credentials.getBytes());
        httpPost.setHeader(HttpHeaders.AUTHORIZATION, "Basic " + encodedCredentials);
        httpPost.setHeader("X-Atlassian-Token","no-check");

        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        builder.addBinaryBody("file", new File(filePath));

        httpPost.setEntity(builder.build());

        HttpResponse response = httpClient.execute(httpPost);
        HttpEntity responseEntity = response.getEntity();

        if (responseEntity != null) {
            System.out.println("Attachment uploaded successfully!");
        } else {
            System.err.println("Failed to upload attachment.");
        }
    }

    public static void main(String[] args) {
        try {
            String jiraUrl = "https://tdgteams-ukaf.atlassian.net/";
            String issueKey = "UKAF-2";
            String username = "akshay.gurjar@thedigitalgroup.com";
            String apiToken = "ATATT3xFfGF0j9m5AAWUEv8iLeyLGiAEVGnfAgUxkv0-0K8DSHviv_e5Qvsf9REAOV4zKBmgVaZm0qEG1cYwlpioNI4lRlgU6iXfZ1nwbVOmRCe2T7CLP3xzfN0tXGu7MKUWdtLVNdzh0M2MxmzmAql8quCNcGGxbBAQJ-N3cLx90lGWebgINB8=852B1F85";
            String filePath = "./target/gatling/tdg-ukaf-demo-20240205084831501/index.html";

            uploadAttachment(jiraUrl, issueKey, username, apiToken, filePath);
        } catch (IOException e) {
            System.err.println("Exception occurred: " + e.getMessage());
        }
    }
}

