package Runner

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef.{Simulation, exec, _}

import scala.concurrent.duration._
import scala.language.postfixOps

class Demo3 extends Simulation {

  val protocol = karateProtocol(

  )


  var HomePage = scenario("01_HomePage").group("01_HomePage") {
    exec(karateFeature("classpath:Features/01_HomePage.feature"))
  }

  val InsertWorkbook = scenario("02_InsertWorkbook").group("02_InsertWorkbook") {
    exec(karateFeature("classpath:Features/02_InsertWorkbook.feature"))
  }

  var UpdateWorkbook = scenario("03_UpdateWorkbook").group("03_UpdateWorkbook") {
    exec(karateFeature("classpath:Features/03_UpdateWorkbook.feature"))
  }

  var UpdateSheet = scenario("04_UpdateSheet").group("04_UpdateSheet") {
    exec(karateFeature("classpath:Features/04_UpdateSheet.feature"))
  }

  var DeleteSheet = scenario("05_DeleteSheet").group("05_DeleteSheet") {
    exec(karateFeature("classpath:Features/05_DeleteSheet.feature"))
  }

  var DeleteWorkbook = scenario("06_DeleteWorkbook").group("06_DeleteWorkbook") {
    exec(karateFeature("classpath:Features/06_DeleteWorkbook.feature"))
  }



  val
  UKAF_EndToEnd
  = scenario("UKAF_EndToEnd")
    .group("UKAF_EndToEnd")(
      exec(HomePage)
        .exitHereIfFailed
      .pause(2)
      .exec(
        InsertWorkbook
      )
        .exitHereIfFailed
        exec (
        HomePage
        )
        .exitHereIfFailed
        .pause(2)
        exec (
        UpdateWorkbook
        )
        .exitHereIfFailed
        .pause(2)
        exec (
        UpdateSheet
        )
        .exitHereIfFailed
        .pause(2)
        exec (
        DeleteSheet
        )
        .exitHereIfFailed
        .pause(2)
        exec (
        DeleteWorkbook
        )
        .exitHereIfFailed
        .pause(2)
      )


  val rampup = constantConcurrentUsers(10).during(1 minute)



  setUp(
    UKAF_EndToEnd.inject(rampup).protocols(protocol))








}
