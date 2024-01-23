package Xray;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class JsonExtractor {
    public static void main(String[] args) {

        File jsonFile = new File("./target/gatling/tdg-ukaf-externalize-20240115111702127/js/global_stats.json");

        String desiredKey = "ko";

        int threshold = 10000;

        extractAndCheck(jsonFile, desiredKey, threshold);
    }

    public static void extractAndCheck(File jsonFile, String desiredKey, int threshold) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(jsonFile);

            if (rootNode.has("numberOfRequests")) {
                JsonNode numberOfRequestsNode = rootNode.get("numberOfRequests");

                if (numberOfRequestsNode.has(desiredKey)) {
                    int value = numberOfRequestsNode.get(desiredKey).asInt();

                    if (value > threshold) {
                        System.out.println("Test case failed. " + desiredKey + " value is greater than " + threshold);
                    } else {
                        System.out.println("Test case passed. " + desiredKey + " value is within the threshold.");
                    }
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
}

