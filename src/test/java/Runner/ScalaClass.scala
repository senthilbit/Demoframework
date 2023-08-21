package Runner

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps


class ScalaClass extends Simulation{
  var getUser = scenario("get").exec(karateFeature("classpath:Features/Booking.feature"));
  var userBooking = scenario("post").exec(karateFeature("classpath:Features/BookingDataDriven.feature"));

  setUp(
    getUser.inject(rampUsers(10) during ( 6 seconds)),
    userBooking.inject(rampUsers(10) during ( 6 seconds))
  )




}
