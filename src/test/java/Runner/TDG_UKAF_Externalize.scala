package Runner


import com.typesafe.config.ConfigFactory
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef.{constantUsersPerSec, _}

import scala.concurrent.duration._
import scala.language.postfixOps
import io.gatling.core.structure.ScenarioBuilder

/**
 *
 * @author Akshay
 */
class TDG_UKAF_Externalize extends Simulation {

  before {
    println("Performance tests started")
  }

  val config = ConfigFactory.load("external.conf")

  val users = config.getInt("load.users")
  val SteadyDuration = config.getInt("load.SteadyDuration")


  val getuser = scenario("getuser").exec(karateFeature("classpath:Features/TDG_UKAF_Chainning.feature@Perf"))


  setUp(
    getuser.inject( // 0

      //rampUsers(users).during(rampduration))
      constantUsersPerSec(users).during(SteadyDuration))


  )

  after {
    println("Performance tests ended")
  }


}
