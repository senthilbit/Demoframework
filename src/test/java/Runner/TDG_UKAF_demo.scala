package Runner

import Runner.ExcelDataReader.readExcel
import Runner.ExcelValueReader.readRowsByClassName
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef.{constantUsersPerSec, _}

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{DataFormatter, WorkbookFactory}


/**
 *
 *
 */
class TDG_UKAF_demo extends Simulation {


  before {
    println("Performance tests started")

  }

  val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
  val sheetName = "Sheet1"
  var desiredClassName = this.getClass.getSimpleName


  val matchingRows = readExcel(excelFilePath, sheetName, desiredClassName)

  matchingRows.foreach(row => {
    val scenarioname = row(1)
    val classpath = row(2)


    var serviceTest = scenario(scenarioname).exec(karateFeature(classpath))

    val rampup = constantUsersPerSec(10).during(10)



    setUp(
      serviceTest.inject(rampup)


    )
  })
  after {
    println("Performance tests ended")
  }



}
