package Utils.External;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import static Utils.External.DbUtils.addTableAndColumn;

public class CreateTableInDatabase {

    public static void main(String[] args) throws IOException, SQLException {

        String filePath = "D:\\FrameworkFiles\\Demoframework\\src\\test\\java\\Data\\books.json";
        String tableName = "demo";

        String jdbcUrl = "jdbc:mysql://localhost:3307/karate_demo";
        String username = "root";
        String password = "M@gnet$151";

        //AddTableAndColumns in Database
      //  addTableAndColumn(jdbcUrl, username, password, tableName);

        String jsonString = readJsonFromFile(filePath);

        JsonArray featureSummaryArray = extractFeatureSummary(jsonString);


        try (Connection connection = getDatabaseConnection()) {

            iterateAndStoreFeatureSummary(connection, featureSummaryArray,tableName, filePath);

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

        String jdbcUrl = "jdbc:mysql://localhost:3307/karate_demo";
        String username = "root";
        String password = "M@gnet$151";
        return DriverManager.getConnection(jdbcUrl, username, password);
    }

    private static JsonArray extractFeatureSummary(String jsonString) {
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(jsonString, JsonObject.class);
        return jsonObject.getAsJsonArray("data");
    }

    private static void iterateAndStoreFeatureSummary(Connection connection, JsonArray featureSummaryArray, String tableName, String filePath)
            throws SQLException, IOException {

        String insertQuery = "INSERT INTO " + tableName + "( id, email ,first_name,last_name,avatar )" +
                "VALUES (?, ?, ?, ?, ?)";


        try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            for (int i = 0; i < featureSummaryArray.size(); i++) {
                JsonObject featureSummary = featureSummaryArray.get(i).getAsJsonObject();


                preparedStatement.setInt(1, featureSummary.get("id").getAsInt());

                preparedStatement.setString(2, featureSummary.get("email").getAsString());
                preparedStatement.setString(3, featureSummary.get("first_name").getAsString());
                preparedStatement.setString(4, featureSummary.get("last_name").getAsString());
                preparedStatement.setString(5, featureSummary.get("avatar").getAsString());




                preparedStatement.executeUpdate();


            }
        }
    }
}


