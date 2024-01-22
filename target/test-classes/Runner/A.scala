package Runner

import org.apache.poi.ss.usermodel.{Cell, Row, WorkbookFactory}

import scala.reflect.ClassTag

object A {

  def main(args: Array[String]): Unit = {
    val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
    val sheetIndex = 0
    val classNameToMatch = "TDG_UKAF_demo"

    val resultArray = readRowByClassName[String](excelFilePath, sheetIndex, classNameToMatch)

    resultArray match {
      case Some(array) => println("Values from the row: " + array.mkString(", "))
      case None => println(s"No row found for class name: $classNameToMatch")
    }

    // Specify the column name you want to extract
    val columnNameToExtract = "ServiceTest"

    val extractedValue: Option[String] = extractDataByColumnName(resultArray, columnNameToExtract)



    extractedValue match {
      case Some(value) => println(s"Extracted value for column $columnNameToExtract: $value")
      case None => println(s"No value found for column name: $columnNameToExtract")
    }


  }

  def readRowByClassName[T: ClassTag](excelFilePath: String, sheetIndex: Int, className: String): Option[Array[T]] = {
    val workbook = WorkbookFactory.create(new java.io.FileInputStream(excelFilePath))
    val sheet = workbook.getSheetAt(sheetIndex)

    // Find the row with the specified class name in the first column
    val rowIndex = (0 until sheet.getLastRowNum + 1).find { i =>
      Option(sheet.getRow(i).getCell(0)).exists(_.toString == className)
    }

    val dataArray = rowIndex.map { index =>
      val row: Row = sheet.getRow(index)
      var rowDataArray = Array[T]()

      for (cellIndex <- 0 until row.getLastCellNum) {
        val cellValue = row.getCell(cellIndex) match {
          case null => null.asInstanceOf[T]
          case cell: Cell => cell.toString.asInstanceOf[T]
        }
        rowDataArray = rowDataArray :+ cellValue
      }

      rowDataArray
    }

    workbook.close()
    dataArray
  }

  def extractDataByColumnName(dataArrayOption: Option[Array[String]], columnName: String): Option[String] = {
    dataArrayOption.flatMap { dataArray =>
      val columnIndex = dataArray.indexOf(columnName)
      if (columnIndex >= 0) {
        dataArray.lift(columnIndex)
      } else {
        None
      }


    }
  }
}



