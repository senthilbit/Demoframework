package Utils.External;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class CheakDbConnection {

    public static void main(String[] args) throws SQLException {

        Connection connection = DriverManager.getConnection( "jdbc:mysql://localhost:3307/mydemo","root","M@gnet$151");
        System.out.println(connection);
    }
}
