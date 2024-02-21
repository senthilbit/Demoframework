package Utils.External;

   import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;

    public class FeatureSummaryExtractor {

        public static void main(String[] args) {

            String filePath = "./target/karate-reports/karate-summary-json.txt";

            String jsonString = readJsonFromFile(filePath);

            JsonArray featureSummaryArray = extractFeatureSummary(jsonString);

            iterateAndStoreFeatureSummary(featureSummaryArray);
        }

        private static String readJsonFromFile(String filePath) {
            try {
                return new String(Files.readAllBytes(Paths.get(filePath)));
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
        }

        private static JsonArray extractFeatureSummary(String jsonString) {
            Gson gson = new Gson();
            JsonObject jsonObject = gson.fromJson(jsonString, JsonObject.class);
            return jsonObject.getAsJsonArray("featureSummary");
        }

        private static void iterateAndStoreFeatureSummary(JsonArray featureSummaryArray) {
            for (int i = 0; i < featureSummaryArray.size(); i++) {
                JsonObject featureSummary = featureSummaryArray.get(i).getAsJsonObject();
                int failedCount = featureSummary.get("failedCount").getAsInt();
                String packageQualifiedName = featureSummary.get("packageQualifiedName").getAsString();
                String relativePath = featureSummary.get("relativePath").getAsString();
                int scenarioCount = featureSummary.get("scenarioCount").getAsInt();
                String name = featureSummary.get("name").getAsString();
                int durationMillis = featureSummary.get("durationMillis").getAsInt();
                int passedCount = featureSummary.get("passedCount").getAsInt();
                boolean failed = featureSummary.get("relativePath").getAsBoolean();

                storeInDatabase(failedCount, packageQualifiedName, relativePath,scenarioCount,name,durationMillis,passedCount,failed);
            }
        }



        private static void storeInDatabase(int failedCount, String packageQualifiedName,
                                            String relativePath , int scenarioCount,
                                            String name ,int durationMillis,int passedCount,boolean failed) {

            System.out.println( failedCount + ",    " + packageQualifiedName + ",        " + relativePath + ",      "
                    + scenarioCount +",       " +name + ",         " + durationMillis + ",          " + passedCount + ",         " + failed);
        }
    }








