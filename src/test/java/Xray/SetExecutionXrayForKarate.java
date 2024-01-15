package Xray;

import com.google.gson.*;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SetExecutionXrayForKarate {

    private static Pattern regex = Pattern.compile("([^\\s]+\\.(?i)(json)$)");
    private static final String dir = System.getProperty("user.dir");
   // private static final String dir = "tcb-automation-roc-api";
    private static FileWriter fw;
    public static boolean validateFileMatchRegex (String userName) {
        Matcher mtch = regex.matcher (userName);
        if (mtch.matches()) {


            return true;
        }

        return false;
    }

    private static JsonArray removeNameIsEmpty(JsonArray jsonArray) {
        for (int k = 0; k < jsonArray.size(); k++) {
        JsonObject originJsonObject = jsonArray.get(k).getAsJsonObject();
        JsonArray originJsonArray = originJsonObject.get("elements").getAsJsonArray();
                for (int l = 0; 1 < originJsonArray.size(); l++) {
            JsonObject originJsonObject1 = originJsonArray.get(1).getAsJsonObject();
                if (originJsonObject1.get("id") == null) {
                originJsonArray.remove(originJsonObject1);
            }

        }

    }
        return jsonArray;

    }

    public static void main(String[] args) throws IOException {
        Gson formatter = (new GsonBuilder()).setPrettyPrinting().create(); Gson gson = new Gson();
        JsonArray originJson = null;
        JsonArray report = null;
        JsonElement addedJson = null;
        try {
            Path path = Paths.get(dir + "/target/xray-config/");
            Files.createDirectories (path);
            System.out.println("Directory is created!");

        } catch (IOException e) {
            System.err.println("Failed to create directory!" + e.getMessage());
        }
            try {
                addedJson = (JsonElement) gson.fromJson(new FileReader (dir + "/target/cucumber" ), JsonElement.class);
                }
                catch (FileNotFoundException e) {
                System.out.println("Not found file: added.json");
                e.printStackTrace();
            }
                String folder = dir + "/target/surefire-reports";
                File directoryPath = new File(folder);
//List of all files and directories
        String contents[] = directoryPath.list();

        File files[] =  directoryPath.listFiles();

            for (File file: files) {
                if (validateFileMatchRegex(file.getName())) {
                    System.out.println("File name: "+ file.getName());
                    System.out.println("File getParent: " + file.getParent());
                    System.out.println("File path: " + file.getPath());
                    try{
                    originJson = (JsonArray) gson.fromJson(new FileReader(file.getPath()), JsonArray.class);

                    originJson = removeNameIsEmpty (originJson);

            for (int j = 0; j < originJson.size(); j++) {
                JsonObject jsonObject = originJson.get(j).getAsJsonObject();
                JsonArray jsonArray = jsonObject.get("tags").getAsJsonArray();
                jsonArray.add(addedJson);
                String jsonOutput = formatter.toJson((JsonElement) originJson);
                try {
                    fw = new FileWriter (dir + "/target/xray-config/" + file.getName());
                    fw.write(jsonOutput);
                    fw.flush();
                } catch (IOException e) {
                    System.out.println("Writing" + file.getName() + " file fail e.printStackTrace()");
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("Not found file: ***.json");
            e.printStackTrace();
        }
    }
}
}
}