package Runner;

import com.intuit.karate.junit5.Karate;
public class UIAutomation_RunAction {
    @Karate.Test
    Karate testTags(){
        return Karate.run("classpath:Features/google.feature").tags("@google").relativeTo((getClass()));
    }
}
