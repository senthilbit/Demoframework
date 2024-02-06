package Runner

import Utils.External.ExcelReader
import Utils.External.ExcelValueReader.readRowsByClassName
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{DataFormatter, WorkbookFactory}
import io.gatling.core.Predef.Simulation

class Demo extends Simulation {


  val HomePage = scenario("01_HomePage")
    .exec(karateFeature("classpath:Features/01_HomePage.feature"))

  val InsertWorkbook = scenario("02_InsertWorkbook")
    .exec(karateFeature("classpath:Features/02_InsertWorkbook.feature"))

  val UpdateWorkbook = scenario("03_UpdateWorkbook")
    .exec(karateFeature("classpath:Features/03_UpdateWorkbook.feature"))

  val UpdateSheet = scenario("04_UpdateSheet")
    .exec(karateFeature("classpath:Features/04_UpdateSheet.feature"))

  val DeleteSheet = scenario("05_DeleteSheet")
    .exec(karateFeature("classpath:Features/05_DeleteSheet.feature"))

  val DeleteWorkbook = scenario("06_DeleteWorkbook")
    .exec(karateFeature("classpath:Features/06_DeleteWorkbook.feature"))


  val XspaceEndtoEnd = scenario("XspaceEndToEnd")

      .exec(HomePage)
    .exitHereIfFailed
        .pause(100 millis)
        .exec(InsertWorkbook)
    .exitHereIfFailed
        .pause(100 millis)
        .exec(UpdateWorkbook)
    .exitHereIfFailed
        .pause(100 millis)
        .exec(UpdateSheet)
    .exitHereIfFailed
        .pause(100 millis)
        .exec(DeleteSheet)
    .exitHereIfFailed
        .pause(100 millis)
        .exec(DeleteWorkbook)
    .exitHereIfFailed

  val rampup = constantUsersPerSec(10).during(5 minute)


  setUp(
    XspaceEndtoEnd.inject(rampup ))




}
