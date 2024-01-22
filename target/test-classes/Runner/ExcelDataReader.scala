package Runner
import org.apache.poi.ss.usermodel._
import org.apache.poi.xssf.usermodel.XSSFWorkbook

import java.io.FileInputStream

object ExcelDataReader {

  def main(args: Array[String]): Unit = {
    val filePath = "./src/test/java/Data/Load_config.xlsx"
    val sheetName = "Sheet1"
    val desiredClassName = "TDG_UKAF_demo"  // "TDG_UKAF_Externalize"

    val matchingRows = readExcel(filePath,sheetName, desiredClassName)

    matchingRows.foreach(row => {
      val classname = row(0)
      val scenarioname = row(1)
      val classpath = row(2)
      val loadconfig = row(3)


      println( List(classname, scenarioname, classpath,loadconfig))


    })
  }

  def readExcel(filePath: String,sheetName: String, desiredClassName: String): List[Array[String]] = {
    var matchingRows: List[Array[String]] = List()

    val fileInputStream = new FileInputStream(filePath)
    val workbook = new XSSFWorkbook(fileInputStream)

    val sheet = workbook.getSheet(sheetName)

    val rowIterator = sheet.iterator()

    while (rowIterator.hasNext) {
      val row = rowIterator.next()
      val classNameCell = row.getCell(0)

      if (classNameCell != null && classNameCell.getStringCellValue == desiredClassName) {

        val rowData = new Array[String](row.getLastCellNum)
        for (i <- 0 until row.getLastCellNum) {
          val cell = row.getCell(i)
          rowData(i) = if (cell == null) "" else cell.toString
        }
        matchingRows = matchingRows :+ rowData
      }
    }

    fileInputStream.close()
    workbook.close()

    matchingRows
  }
}

