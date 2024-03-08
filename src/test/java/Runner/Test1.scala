package Runner

import Runner.MainClass.{ClosedModel, ReadData, openModel}
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.language.postfixOps

class Test1 extends Simulation {

  before {
    println("Performance tests started")

  }

  val excelFilePath = "./src/test/java/Data/Load_config_v2.xlsx"
  val sheetName = "Master"
  var desiredClassName = this.getClass.getSimpleName

  val matchingRows = ReadData(excelFilePath,sheetName,desiredClassName)
  val scenarioname = matchingRows.apply(0)
  val extractedclasspath = matchingRows.apply(1)
  val ramp = matchingRows.apply(2)
  val LConfig1 = matchingRows.apply(3)



  val subst = s"$LConfig1".split(",")
  val user: Int = subst(0).toInt
  val duration: Int = subst(1).toInt
  val open = ClosedModel(user,duration,ramp)


  val serviceTest = scenario(scenarioname).exec(karateFeature(extractedclasspath))

  setUp(
    serviceTest.inject(open))

  after {
    println("Performance tests ended")
  }
  }



