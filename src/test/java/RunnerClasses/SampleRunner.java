package RunnerClasses;



import Utils.External.FeatureSummaryExtractor;
import com.github.tomakehurst.wiremock.client.WireMock;
import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;

import java.io.IOException;
import java.sql.SQLException;

/**
 *
 * @author Akshay
 */

public class SampleRunner {

	@AfterAll
	public static void setup() throws SQLException, IOException {

		String[] args = new String[0];
		FeatureSummaryExtractor.main(args);


	}

	@Karate.Test
	Karate Database() {
		return Karate.run("classpath:KarateFeatures/TDG_UKAF_DatabaseConection.feature").relativeTo(getClass());
	}

	@Karate.Test
	Karate Excel() {
		return Karate.run("classpath:KarateFeatures/TDG_UKAF_Input_Data_From_Excel.feature").relativeTo(getClass());
	}
	@Karate.Test
	Karate Json() {
		return Karate.run("classpath:KarateFeatures/TDG_UKAF_Input_Data_From_DataJson.feature").relativeTo(getClass());
	}
	@Karate.Test
	Karate Feeder() {
		return Karate.run("classpath:KarateFeatures/TDG_UKAF_Input_Data_From_Feeder.feature").relativeTo(getClass());
	}

	@Karate.Test
	Karate Csv() {
		return Karate.run("classpath:KarateFeatures/TDG_UKAF_Input_Data_From_Csv.feature").relativeTo(getClass());
	}

		@Karate.Test
		Karate Chaining () {
			return Karate.run("classpath:KarateFeatures/TDG_UKAF_Chainning.feature").relativeTo(getClass());
		}

	}

