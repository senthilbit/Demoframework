package Runner
import org.apache.poi.ss.usermodel.{WorkbookFactory, DataFormatter}
import org.apache.poi.ss.usermodel.{WorkbookFactory, DataFormatter}

object ExcelReader {
  def main(args: Array[String]): Unit = {
    val excelFilePath = "D:/New folder/Demoframework/src/test/java/Data/Load_config.xlsx"
    val sheetName = "Sheet1"
    val targetRow = 1
    val targetColumn = 3

    val extractedValue = readExcelCell(excelFilePath, sheetName, targetRow, targetColumn)
    println(s"The extracted value is: $extractedValue")
  }

  def readExcelCell(excelFilePath: String, sheetName: String, rowIdx: Int, colIdx: Int): String = {

    val workbook = WorkbookFactory.create(new java.io.FileInputStream(excelFilePath))


    val sheet = workbook.getSheet(sheetName)


    val cellValue = getCellValue(sheet, rowIdx, colIdx)


    workbook.close()

    cellValue
  }

  def getCellValue(sheet: org.apache.poi.ss.usermodel.Sheet, rowIdx: Int, colIdx: Int): String = {
    val row = sheet.getRow(rowIdx)
    val cell = row.getCell(colIdx)


    val formatter = new DataFormatter()
    formatter.formatCellValue(cell)
  }
}

