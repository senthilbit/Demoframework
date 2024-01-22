package Runner;
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
            String jiraUrl = "https://your-jira-instance/";
            String issueKey = "PROJECT-123";
            String username = "your-username";
            String apiToken = "your-api-token";
            String filePath = "./src/test/java/target/gatling/tdg-ukaf-demo-20240104121535075/index.html";

            uploadAttachment(jiraUrl, issueKey, username, apiToken, filePath);
        } catch (IOException e) {
            System.err.println("Exception occurred: " + e.getMessage());
        }
    }
}

