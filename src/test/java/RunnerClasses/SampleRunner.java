package RunnerClasses;



import com.intuit.karate.junit5.Karate;

/**
 *
 * @author Akshay
 */

public class SampleRunner {

	@Karate.Test
	Karate Database() {
		return Karate.run("classpath:Features/TDG_UKAF_DatabaseConection.feature").relativeTo(getClass());
	}

	@Karate.Test
	Karate Excel() {
		return Karate.run("classpath:Features/TDG_UKAF_Input_Data_From_Excel.feature").relativeTo(getClass());
	}
	@Karate.Test
	Karate Json() {
		return Karate.run("classpath:Features/TDG_UKAF_Input_Data_From_DataJson.feature").relativeTo(getClass());
	}
	@Karate.Test
	Karate Feeder() {
		return Karate.run("classpath:Features/TDG_UKAF_Input_Data_From_Feeder.feature").relativeTo(getClass());
	}

	@Karate.Test
	Karate Csv() {
		return Karate.run("classpath:Features/TDG_UKAF_Input_Data_From_Csv.feature").relativeTo(getClass());
	}

		@Karate.Test
		Karate Chaining () {
			return Karate.run("classpath:Features/TDG_UKAF_Chainning.feature").relativeTo(getClass());
		}

	}

