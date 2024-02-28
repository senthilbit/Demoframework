package Utils.External;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;


/**
 *
 *
 */
public class DbUtils {

    private static final Logger logger = LoggerFactory.getLogger(DbUtils.class);

    private final JdbcTemplate jdbc;

    public DbUtils(Map<String, Object> config) {
        String url = (String) config.get("url");
        String username = (String) config.get("username");
        String password = (String) config.get("password");
        String driver = (String) config.get("driverClassName");
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        jdbc = new JdbcTemplate(dataSource);
        logger.info("init jdbc template: {}", url);
    }

    public Object readValue(String query) {

        return jdbc.queryForObject(query, Object.class);
    }

    public Map<String, Object> readRow(String query) {
        return jdbc.queryForMap(query);
    }

    public List<Map<String, Object>> readRows(String query) {

        return jdbc.queryForList(query);
    }

    public int updateRow(String query) {

        return jdbc.update(query);
    }

    public List<Map<String, Object>> getDataFromTable(String column, String table, String condition) {
        String query = String.format("SELECT " + column + " FROM" + table + "WHERE" + condition);

         List<Map<String, Object>> result = readRows(query);
         return result;
    }


    public String getKeyPairFromperticularTable(String username, String table ,String value) {
        String query = "SELECT  " + value + " FROM "  + table  +" " + username +"= " + username + "'";

        Map<String, Object> result = readRow(query);
        return result.get(value).toString();
    }


    public static <T> void addTableAndColumn(String jdbcUrl, String username, String password,
                                             String tableName) throws SQLException {

        String addColumnQuery = "CREATE TABLE " + tableName + "("
                + "id INT  ,"
                + "email VARCHAR(255) ,"
                + "first_name VARCHAR(255)  ,"
                + "last_name VARCHAR(255)  ,"
                + "avatar VARCHAR(255) "
                + ");";

        Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
        PreparedStatement addColumnStatement = connection.prepareStatement(addColumnQuery);
        addColumnStatement.execute();

    }
}