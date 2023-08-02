package Runner;

import com.intuit.karate.junit5.Karate;
public class UIAutomation_RunAction {
    @Karate.Test
    Karate googleUI(){
        return Karate.run("classpath:Features/google.feature").relativeTo((getClass()));
    }
    @Karate.Test
    Karate parabankRegister(){
        return Karate.run("classpath:Features/parabank.feature").tags("@parabank-register").relativeTo((getClass()));
    }
    @Karate.Test
    Karate parabankLogin(){
        return Karate.run("classpath:Features/parabank.feature").tags("@parabank-login").relativeTo((getClass()));
    }
}
