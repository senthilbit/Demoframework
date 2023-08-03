package Utils;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadExcel {

	public static List<Map<String, String>> readExcelData(String sheetName, String path) throws IOException {
		String filePath = path;
	        FileInputStream fileInputStream = new FileInputStream(filePath);
	        Workbook workbook = new XSSFWorkbook(fileInputStream);
	        Sheet sheet = workbook.getSheet(sheetName);

	        int rowCount = sheet.getLastRowNum();
	        int columnCount = sheet.getRow(0).getLastCellNum();
	        List<Map<String, String>> data = new ArrayList<>();

	        Row headerRow = sheet.getRow(0);
	        for (int i = 1; i <= rowCount; i++) {
	            Row row = sheet.getRow(i);
	            Map<String, String> rowData = new HashMap<>();
	            for (int j = 0; j < columnCount; j++) {
	                Cell cell = row.getCell(j);
	                String header = headerRow.getCell(j).getStringCellValue();
	                rowData.put(header, cell.toString());
	            }
	            data.add(rowData);
	        }

	        workbook.close();
	        fileInputStream.close();

	        return data;
	    }
}
