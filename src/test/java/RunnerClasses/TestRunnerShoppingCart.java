package RunnerClasses;
import com.intuit.karate.junit5.Karate;

public class TestRunnerShoppingCart
{


    @Karate.Test
    Karate AddToCart() {
        return Karate.run("classpath:UIAutomation/AddToCart.feature").relativeTo(getClass());
    }


    @Karate.Test
    Karate Hrms() {
        return Karate.run("classpath:UIAutomation/HRMS.feature").tags("@TrainingModule").relativeTo(getClass());
    }

    @Karate.Test
    Karate HrmsModule() {
        return Karate.run("classpath:UIAutomation/HRMS.feature").tags("@StaticReport").relativeTo(getClass());
    }

}


