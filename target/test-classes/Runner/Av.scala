package Runner

import Runner.ExcelValueReader.readRowsByClassName
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef.{constantUsersPerSec, _}

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder
import org.apache.poi.ss.usermodel.{DataFormatter, WorkbookFactory}


class Av extends Simulation{

  var serviceTest = scenario("av").exec(karateFeature("classpath:Features/A.feature"))

  setUp(serviceTest.inject(atOnceUsers(1) ) )



}
