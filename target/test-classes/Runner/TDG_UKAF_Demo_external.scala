package Runner


import Runner.ExcelDataReader.readExcel
import Runner.ExcelValueReader.readRowsByClassName
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{DataFormatter, WorkbookFactory}

class TDG_UKAF_Demo_external extends Simulation {
  before {
    println("Performance tests started")

  }
  val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
  val sheetName = "Sheet1"
  val desiredClassName = "TDG_UKAF_demo"




  val matchingRows = readRowsByClassName(excelFilePath, sheetName, desiredClassName )

  val scenarioname = matchingRows.apply(1)
  val extractedclasspath = matchingRows.apply(2)

  var serviceTest = scenario(scenarioname).exec(karateFeature(extractedclasspath))

  val rampup = constantUsersPerSec(10).during(10)

  setUp(
    serviceTest.inject(rampup)


  )
  after {
    println("Performance tests ended")
  }
}



