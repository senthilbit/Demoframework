package Utils.External;

   import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
   import org.json.JSONObject;

   import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;
   import java.text.ParseException;
   import java.text.SimpleDateFormat;
   import java.util.Date;

public class FeatureSummaryExtractor {

        public static void main(String[] args) throws IOException {

            String filePath = "./target/karate-reports/karate-summary-json.txt";

            String jsonString = readJsonFromFile(filePath);

            JsonArray featureSummaryArray = extractFeatureSummary(jsonString);

            iterateAndStoreFeatureSummary(featureSummaryArray,filePath);



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

        private static void iterateAndStoreFeatureSummary(JsonArray featureSummaryArray,String filePath) throws IOException {
            for (int i = 0; i < featureSummaryArray.size(); i++) {
                JsonObject featureSummary = featureSummaryArray.get(i).getAsJsonObject();
                int failedCount = featureSummary.get("failedCount").getAsInt();
                String packageQualifiedName = featureSummary.get("packageQualifiedName").getAsString().substring(9).trim();
               // String relativePath = featureSummary.get("relativePath").getAsString();
                int scenarioCount = featureSummary.get("scenarioCount").getAsInt();
                String name = featureSummary.get("name").getAsString();
                int durationMillis = featureSummary.get("durationMillis").getAsInt();
                int passedCount = featureSummary.get("passedCount").getAsInt();
                boolean failed = featureSummary.get("failed").getAsBoolean();
                 String resultDate= extractresultDatefromJson(filePath);
                 String[] DateAndTime = separateDateAndTime(resultDate);
                 String Date = DateAndTime[0];
                 String Time = DateAndTime[1];

                storeInDatabase(failedCount, packageQualifiedName,scenarioCount,name,
                        durationMillis,passedCount,failed,Date,Time);
            }
        }



        private static void storeInDatabase(int failedCount, String packageQualifiedName, int scenarioCount,
                                            String name ,int durationMillis,int passedCount,boolean failed,String Date, String Time) {

            System.out.println( failedCount + ",    " + packageQualifiedName + ",        "
                    + scenarioCount +",       " +name + ",         " + durationMillis + ",          "
                    + passedCount + ",         " + failed+ ",  "+Date+ ",  " + Time);
        }


        public static int extractfeaturesPassedvaluesfromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);
            int featuresPassed = jsonObject.getInt("featuresPassed");
            //  int featuresFailed = jsonObject.getInt("featuresFailed");
            return featuresPassed;
        }

        public static int extractfeaturesFailedfromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);
            int featuresFailed = jsonObject.getInt("featuresFailed");

            return featuresFailed;
        }

        public static String extractresultDatefromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);

            String featuresresultDate = jsonObject.getString("resultDate");

            return featuresresultDate;
        }

        public static int extracttotalTimefromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);

            int featurestotalTime = jsonObject.getInt("totalTime");

            return featurestotalTime;
        }

        public static int extractfeaturesSkippedfromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);

            int featuresfeaturesSkipped = jsonObject.getInt("featuresSkipped");

            return featuresfeaturesSkipped;
        }

        public static int extractscenariosPassedfromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);

            int featuresscenariosPassed = jsonObject.getInt("scenariosPassed");

            return featuresscenariosPassed;
        }

        public static int extractelapsedTimefromJson(String filepath) throws IOException {

            String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
            JSONObject jsonObject = new JSONObject(jsonData);

            int featureselapsedTime = jsonObject.getInt("elapsedTime");

            return featureselapsedTime;
        }

        public static String[] separateDateAndTime(String dateTimeString) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String[] separatedDateTime = new String[2];

            try {
                Date date = dateFormat.parse(dateTimeString);

                SimpleDateFormat dateOnlyFormat = new SimpleDateFormat("yyyy-MM-dd");
                separatedDateTime[0] = dateOnlyFormat.format(date);

                SimpleDateFormat timeOnlyFormat = new SimpleDateFormat("HH:mm:ss");
                separatedDateTime[1] = timeOnlyFormat.format(date);

            } catch (ParseException e) {
                e.printStackTrace();
            }

            return separatedDateTime;
        }

    }








