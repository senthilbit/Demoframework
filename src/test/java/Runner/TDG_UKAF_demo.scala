package Runner

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef.{constantUsersPerSec, _}

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{WorkbookFactory, DataFormatter}


/**
 *
 * @author Akshay
 */
class TDG_UKAF_demo extends Simulation {

  before {
    println("Performance tests started")

  }

  //val excel = new ExcelReader()
  val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
  val sheetName = "Sheet1"


  //val extractedValue = excel.readExcelCell(excelFilePath, sheetName, 1, 1)
  val extractedValue = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 1)


  //val extractedclasspath = excel.readExcelCell(excelFilePath, sheetName, 2, 1)
  val extractedclasspath = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 2)

  //val stimulation = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 3)


   // var serviceTest = scenario(extractedValue).exec(karateFeature("classpath:Features/TDG_UKAF_Chainning.feature@Perf"))

  var serviceTest = scenario(extractedValue).exec(karateFeature(extractedclasspath))

  val rampup = constantUsersPerSec(100).during(1 minute)

    setUp(
      serviceTest.inject(rampup)


    )
    after {
      println("Performance tests ended")
    }
  }
