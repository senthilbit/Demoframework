package Xray;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;


public class JsonExtractor {

    private static final String SUMMARY_LOG_FILE = "./target/gatling/tdg-ukaf-externalize-20240115111702127/simulation.log";

    public static void main(String[] args) {

        File jsonFile = new File("./target/gatling/tdg-ukaf-externalize-20240115111702127/js/global_stats.json");

        String desiredKey = "ko";

        int threshold = 10000;


        extractAndCheck(jsonFile, desiredKey, threshold);
    }

    private static void extractAndCheck(File jsonFile, String desiredKey, int threshold) {
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

    private static void writeSummaryLog(String message) {
        try {

            Files.write(Paths.get(SUMMARY_LOG_FILE), (message + System.lineSeparator()).getBytes(), StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            System.out.println("Summary log updated successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}