package Runner


import com.google.common.math.IntMath.mean
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.concurrent.duration._
import scala.concurrent.duration._
import scala.language.postfixOps
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ScalaClass extends Simulation {
  // Define the protocol for your test
  val protocol = karateProtocol(

  )
  // Load your Karate feature file
  var getuser = scenario("getUsers").exec(karateFeature("classpath:Features/cats-create.feature@perf"))
  val delete = scenario("delete").group("delete cats") {
    exec(karateFeature("classpath:Features/cats-delete.feature@name=delete"))
  }
  val custom = scenario("custom").exec(karateFeature("classpath:Features/custom-rpc.feature"))
  // Define user counts and ramp-up duration
  val users = 50
  val rampUpDuration = 10 seconds
  // Define simulation duration
  val testDuration = 2 minutes

  val
  createAndRead
  = scenario("createAndRead")
    .group("createAndRead")(exec(
      getuser
    )
      .pause(2)
      .exec(
        delete
      )
      .pause(2)
      .exec(
        custom
      ))



  // Run the Gatling simulation using the Karate feature
  setUp(
    createAndRead.inject(
      nothingFor(4), // 1
      atOnceUsers(1), // 2
      rampUsers(1).during(5), // 3
      constantUsersPerSec(2).during(15), // 4
      constantUsersPerSec(2).during(15).randomized, // 5
      rampUsersPerSec(1).to(2).during(10.minutes), // 6
      rampUsersPerSec(1).to(2).during(10.minutes).randomized, // 7
      stressPeakUsers(1).during(20) // 8
    ).protocols(protocol)
  )

}
