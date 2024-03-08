package Runner

import io.gatling.core.Predef.{Simulation, _}
import io.gatling.core.controller.inject.closed.ClosedInjectionStep
import io.gatling.core.controller.inject.open.OpenInjectionStep
import org.apache.poi.xssf.usermodel.XSSFWorkbook

import java.io.FileInputStream
import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

object MainClass extends Simulation {


  def ReadData(filePath: String, sheetName: String, desiredClassName: String): List[String] = {

    var matchingRows = List[String]()
    val file = new FileInputStream(filePath)
    val workbook = new XSSFWorkbook(file)
    try {
      val sheet = workbook.getSheet(sheetName)
      var LMethod1: String = ""
      var LConfig1: String = ""
      var scenarioCell: String = ""
      var classPathCell: String = ""
      var AvgResponseTime: String = ""
      var FailurePercentage: String = ""
      var nfPercentile: String = ""
      val rowIterator = sheet.iterator()
      while (rowIterator.hasNext) {
        val row = rowIterator.next()
        val classNameCell = row.getCell(0)

        if (classNameCell != null && classNameCell.getStringCellValue == desiredClassName) {

            scenarioCell = row.getCell(1).getStringCellValue
            classPathCell = row.getCell(2).getStringCellValue
            println(scenarioCell, classPathCell)
            val LoadMethod1 = row.getCell(3)
            val Param1 = row.getCell(4)
            val avgresponse = row.getCell(5)
            val failureper = row.getCell(6)
            val percentile3 = row.getCell(7)
            LMethod1 = LoadMethod1.getStringCellValue
            LConfig1 = Param1.getStringCellValue
            AvgResponseTime = avgresponse.getStringCellValue
            FailurePercentage = failureper.getStringCellValue
            nfPercentile = percentile3.getStringCellValue
            matchingRows = List(scenarioCell, classPathCell, LMethod1, LConfig1, AvgResponseTime, FailurePercentage, nfPercentile)

        }
      }
    }
      finally
      {
        file.close()
        workbook.close()
      }

    matchingRows
    }

  def openModel(user: Int, duration: Int, LMethod1: String):  OpenInjectionStep = {

   // val LMethod1: String = ""
    val methods = LMethod1 match {
      case "rampUsers" => rampUsers(user).during(duration minute)
      case "constantUsersPerSec" => constantUsersPerSec(user).during(duration minute)
      case "stressPeakUsers" => stressPeakUsers(user).during(duration minute)
      case "atOnceUsers" => atOnceUsers(user)
      case "nothingFor" => nothingFor(duration)
    }
    methods
  }

  def openModelwithNoDuration(user: Int,  LMethod1: String): OpenInjectionStep = {

    // val LMethod1: String = ""
    val methods = LMethod1 match {

      case "atOnceUsers" => atOnceUsers(user)
      case "nothingFor" => nothingFor(user)
    }
    methods
  }


  def ClosedModel(user: Int, duration: Int, LMethod1: String): ClosedInjectionStep = {

    // val LMethod1: String = ""
    val methods = LMethod1 match {
      case "constantConcurrentUsers" => constantConcurrentUsers(user).during(duration minute)
      case "rampConcurrentUsers" => rampConcurrentUsers(user).to(user).during(duration minute)

    }
    methods
  }

}