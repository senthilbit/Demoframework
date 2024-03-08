package Runner

import Utils.External.ExcelValueReader.readRowsByClassName
import Utils.External.ExcelDataReader.readExcel
import Xray.LogFileToJira
import Xray.LogFileToJira.{addAttachmentToJira, addStatusToJira, desiredKey, extractAndCheck, findLatestFolder, folderName, globalStat, jiraBaseUrl, jiraIssueKey, jiraPassword, jiraUsername, jsonFile, targetPath, threshold}
import akka.pattern.Patterns.after
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import io.gatling.core.protocol

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{DataFormatter, WorkbookFactory}

import java.io.File


/**
 * @ Externalization of scala variables through excel sheet.
 * @Akshay
 *
 */
class TDG_UKAF_demo extends Simulation {


  before {
    println("Performance tests started")

  }

  val protocol = karateProtocol(

  )


  protocol.runner.karateEnv("dev")

  val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
  val sheetName = "Sheet1"
  var desiredClassName = this.getClass.getSimpleName


  val matchingRows = readExcel(excelFilePath, sheetName, desiredClassName)

  matchingRows.foreach(row => {
    val scenarioname = row(1)
    val classpath = row(2)


    var serviceTest = scenario(scenarioname).exec(karateFeature(classpath))

    val rampup = constantUsersPerSec(10).during(10)
    val rampup1 = constantConcurrentUsers(5).during(1 minute)


    setUp(
      serviceTest.inject(rampup1)


    )
  })

  after {

    println("Performance tests ended")
  }



}
