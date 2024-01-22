package Runner

import Runner.ExcelValueReader.readRowsByClassName
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{DataFormatter, WorkbookFactory}
class TDG_Demo extends Simulation{
  before {
    println("Performance tests started")

  }

  //val excel = new ExcelReader()
  val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
  val sheetName = "Sheet1"

  val extracted = ExcelReader.readExcelCell(excelFilePath, sheetName, 0, 0)


  //val extractedValue = excel.readExcelCell(excelFilePath, sheetName, 1, 1)
  val extractedValue = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 1)
  println(s"The extracted value is: $extractedValue")

  //val extractedclasspath = excel.readExcelCell(excelFilePath, sheetName, 2, 1)
  val extractedclasspath = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 2)
  println(s"The extracted value is: $extractedclasspath")

  val stimulation = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 3)
  println(s"The extracted value is: $stimulation")


  // var serviceTest = scenario(extractedValue).exec(karateFeature("classpath:Features/TDG_UKAF_Chainning.feature@Perf"))

  var serviceTest = scenario(extractedValue).exec(karateFeature(extractedclasspath))

  val rampup = constantUsersPerSec(10).during(10)

  setUp(
    serviceTest.inject(rampup)


  )
  after {
    println("Performance tests ended")
  }
}
