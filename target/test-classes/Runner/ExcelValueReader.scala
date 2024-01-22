package Runner
import org.apache.poi.ss.usermodel._
import org.apache.poi.xssf.usermodel.XSSFWorkbook

import java.io.FileInputStream
import scala.collection.IterableOnce.iterableOnceExtensionMethods
import scala.collection.mutable.ListBuffer
import scala.sys.process.buildersToProcess


/**
 *
 * Utility to read row value from excel as per desired class name and store it to array
 * @author Akshay
 */

object ExcelValueReader {

  def readRowsByClassName(filePath: String,sheetName: String ,desiredClassName: String): List[String] = {
    var matchingRows = List[String]()

    val file = new FileInputStream(filePath)
    val workbook = new XSSFWorkbook(file)

    try {
      val sheet = workbook.getSheet(sheetName)

      val rowIterator = sheet.iterator()

      while (rowIterator.hasNext) {
        val row = rowIterator.next()
        val classNameCell = row.getCell(0)

        if (classNameCell != null && classNameCell.getStringCellValue == desiredClassName) {
          val scenarioCell = row.getCell(1)
          val classPathCell = row.getCell(2)
          val  LoadConfigCell1 = row.getCell(3)
          val  LoadConfigCell2 = row.getCell(4)
          val  LoadConfigCell3 = row.getCell(5)
          val   assertion = row.getCell(6)
          val scenarioValue = scenarioCell.getStringCellValue
          val classPathValue = classPathCell.getStringCellValue
          val LoadConfig1 = LoadConfigCell1.getStringCellValue
          val LoadConfig2 = LoadConfigCell2.getStringCellValue
          val LoadConfig3 = LoadConfigCell3.getStringCellValue
          val assertionValue = assertion.getStringCellValue

          matchingRows = List(desiredClassName,scenarioValue,classPathValue,LoadConfig1,LoadConfig2,LoadConfig3,assertionValue)
        }
      }
    } finally {
      file.close()
      workbook.close()
    }

    matchingRows
  }




  def main(args: Array[String]): Unit = {
    val filePath = "./src/test/java/Data/Load_config.xlsx"
    val sheetName = "Sheet1"
    val desiredClassName = "TDG_UKAF_Externalize"    // "TDG_UKAF_Externalize"

   


    val matchingRows = readRowsByClassName(filePath,sheetName, desiredClassName)
    println(matchingRows)


    val first  = matchingRows.apply(1)
    println(first)

  }
}


