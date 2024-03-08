package Runner

import Runner.MainClass.{ReadData, openModel, openModelwithNoDuration}
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef.{constantUsersPerSec, _}

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder


/**
 * @ Feeder with using csv file to feed the username and password
 *
 */
class TDG_UKAF_Feeder extends Simulation{

  before {
    println("Performance tests started")
  }

  val excelFilePath = "./src/test/java/Data/Load_config_v2.xlsx"
  val sheetName = "Master"
  var desiredClassName = this.getClass.getSimpleName

  val matchingRows = ReadData(excelFilePath, sheetName, desiredClassName)
  val scenarioname = matchingRows.apply(0)
  val extractedclasspath = matchingRows.apply(1)
  val ramp = matchingRows.apply(2)
  val LConfig1 = matchingRows.apply(3)


  val subst = s"$LConfig1".split(",")
  val user: Int = subst(0).toInt
  val duration: Int = subst(1).toInt
  val open = openModel(user, duration, ramp)

 // val csvFile =  feed(csv("./Data/DataCsv.csv")).exec(karateSet("username", session => session("username").as[String]))

  val FeederToKarate = scenario(scenarioname).feed(csv("./Data/DataCsv.csv").circular)
    .exec(karateSet("username", session => session("username").as[String]))
    .exec(karateSet("password", session => session("password").as[String]))
    .exec(karateFeature(extractedclasspath))


  setUp(
    FeederToKarate.inject(open

    ))

  after {
    println("Performance tests ended")
  }
}
