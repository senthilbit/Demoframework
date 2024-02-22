package Utils.External;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static Utils.External.FeatureSummaryExtractor.separateDateAndTime;

public class FeatureSummaryExtractor1 {

    public static void main(String[] args) throws IOException, SQLException {

        String filePath = "./target/karate-reports/karate-summary-json.txt";
        String tableName = "DemoTable";

        String jdbcUrl = "jdbc:mysql://localhost:3307/my_demoframework";
        String username = "root";
        String password = "M@gnet$151";

        //AddTableAndColumns in Database
        addTableAndColumn(jdbcUrl, username, password, tableName);


        String jsonString = readJsonFromFile(filePath);

        JsonArray featureSummaryArray = extractFeatureSummary(jsonString);


        try (Connection connection = getDatabaseConnection()) {

            iterateAndStoreFeatureSummary(connection, featureSummaryArray, tableName, filePath);
            //AddTableAndColumns in Database
            //  addTableAndColumn(jdbcUrl, username, password, tableName);
        }

    }

    private static String readJsonFromFile(String filePath) {
        try {
            return new String(Files.readAllBytes(Paths.get(filePath)));
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private static Connection getDatabaseConnection() throws SQLException {

        String jdbcUrl = "jdbc:mysql://localhost:3307/my_demoframework";
        String username = "root";
        String password = "M@gnet$151";
        return DriverManager.getConnection(jdbcUrl, username, password);
    }

    private static JsonArray extractFeatureSummary(String jsonString) {
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(jsonString, JsonObject.class);
        return jsonObject.getAsJsonArray("featureSummary");
    }

    private static void iterateAndStoreFeatureSummary(Connection connection, JsonArray featureSummaryArray, String tableName, String filePath)
            throws SQLException, IOException {

        String insertQuery = "INSERT INTO " + tableName + "( FeatureName, FailedCount, " +
                "ScenarioCount, Name, Description, DurationMillis, PassedCount, Failed, Date ,Time) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";


        try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            for (int i = 0; i < featureSummaryArray.size(); i++) {
                JsonObject featureSummary = featureSummaryArray.get(i).getAsJsonObject();


                preparedStatement.setString(1, featureSummary.get("packageQualifiedName").getAsString().substring(9).trim());
                preparedStatement.setInt(2, featureSummary.get("failedCount").getAsInt());
               // preparedStatement.setString(3, featureSummary.get("relativePath").getAsString());
                preparedStatement.setInt(3, featureSummary.get("scenarioCount").getAsInt());
                preparedStatement.setString(4, featureSummary.get("name").getAsString());
                preparedStatement.setString(5, featureSummary.get("description").getAsString());
                preparedStatement.setDouble(6, featureSummary.get("durationMillis").getAsDouble());
                preparedStatement.setInt(7, featureSummary.get("passedCount").getAsInt());
                preparedStatement.setBoolean(8, featureSummary.get("failed").getAsBoolean());
                String resultDate = extractresultDatefromJson(filePath);
                String[] DateAndTime = separateDateAndTime(resultDate);
                String Date = DateAndTime[0];
                String Time = DateAndTime[1];
                preparedStatement.setString(9, Date);
                preparedStatement.setString(10, Time);


                preparedStatement.executeUpdate();


            }
        }
    }


    public static String extractresultDatefromJson(String filepath) throws IOException {

        String jsonData = new String(Files.readAllBytes(Paths.get(filepath)));
        JSONObject jsonObject = new JSONObject(jsonData);

        String featuresresultDate = jsonObject.getString("resultDate");

        return featuresresultDate;
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


    public static <T> void addTableAndColumn(String jdbcUrl, String username, String password,
                                             String tableName ) throws SQLException {

        String addColumnQuery =  "CREATE TABLE " +tableName+ "("
                + "Id INT AUTO_INCREMENT PRIMARY KEY ,"
                + "FeatureName VARCHAR(255) ,"
                + "FailedCount INT  ,"
                + "ScenarioCount INT  ,"
                + "Name VARCHAR(255) ,"
                + "Description VARCHAR(255) ,"
                + "DurationMillis INT ,"
                + "PassedCount INT,"
                + "Failed INT,"
                + "Date VARCHAR(255),"
                + "Time VARCHAR(255)"
                + ");";

        Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
        PreparedStatement addColumnStatement = connection.prepareStatement(addColumnQuery);
        addColumnStatement.execute();

    }

}

