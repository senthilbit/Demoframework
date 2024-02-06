package Xray;
import java.io.File;

public class LatestFolderFinder {

    public static void main(String[] args) {
        String targetPath = "target";  // Replace with the actual path to your directory
        String folderName = "gatling";         // Replace with the folder name you're looking for

        File latestFolder = findLatestFolder(targetPath, folderName);

        if (latestFolder != null) {
            System.out.println( latestFolder.getName());
        } else {
            System.out.println("No " + folderName + " folders found in the specified directory.");
        }
    }

    private static File findLatestFolder(String parentPath, String folderName) {
        File parentDir = new File(parentPath, folderName);

        if (!parentDir.exists() || !parentDir.isDirectory()) {
            System.out.println("The '" + folderName + "' directory does not exist.");
            return null;
        }

        File[] subdirs = parentDir.listFiles(File::isDirectory);

        if (subdirs == null || subdirs.length == 0) {
            System.out.println("No subdirectories found inside the '" + folderName + "' directory.");
            return null;
        }

        File latestFolder = null;
        long latestTimestamp = Long.MIN_VALUE;

        for (File subdir : subdirs) {
            long timestamp = subdir.lastModified();
            if (timestamp > latestTimestamp) {
                latestTimestamp = timestamp;
                latestFolder = subdir;
            }
        }

        return latestFolder;
    }
}

