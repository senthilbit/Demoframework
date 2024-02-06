package Xray;


    import java.nio.file.*;

    public class FileReader {
        public static void main(String[] args) {
            // Example usage
            String filePath = "./target/gatling/lastRun.txt";
            String content = readFileContent(filePath);
            System.out.println(content);
        }

        public static String readFileContent(String filePath) {
            try {
                Path file = Paths.get(filePath);
                return new String(Files.readAllBytes(file));
            } catch (Exception e) {
                e.printStackTrace();
                return null; // Or handle the exception based on your application's needs
            }
        }
    }


