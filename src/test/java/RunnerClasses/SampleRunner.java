package RunnerClasses;



import Utils.External.FeatureSummaryExtractor;
import Utils.External.MyFeatureSummaryExtractor;
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
		MyFeatureSummaryExtractor.main(args);


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

	@Karate.Test
	Karate HomePage() {
		return Karate.run("classpath:Features/01_HomePage.feature").tags("@HomePage").relativeTo(getClass());
	}

	@Karate.Test
	Karate InsertWorkbook() {
		return Karate.run("classpath:Features/02_InsertWorkbook.feature").tags("@InsertWorkBook").relativeTo(getClass());
	}

	@Karate.Test
	Karate UpdateWorkbook() {
		return Karate.run("classpath:Features/03_UpdateWorkbook.feature").tags("@UpdateWorkBook").relativeTo(getClass());
	}

	@Karate.Test
	Karate DeleteSheet() {
		return Karate.run("classpath:Features/05_DeleteSheet.feature").tags("@DeleteSheet").relativeTo(getClass());
	}

	@Karate.Test
	Karate DeleteWorkbook() {
		return Karate.run("classpath:Features/06_DeleteWorkbook.feature").tags("@DeleteWorkbook").relativeTo(getClass());
	}

	@Karate.Test
	Karate DeleteColumn() {
		return Karate.run("classpath:Features/08_DeleteColumn.feature").tags("@StaticReport").relativeTo(getClass());
	}
	@Karate.Test
	Karate SheetApi() {
		return Karate.run("classpath:Features/07_SheetApi.feature").tags("@SheetApi").relativeTo(getClass());
	}
	@Karate.Test
	Karate UploadNotes() {
		return Karate.run("classpath:Features/09_UploadNotesSheet.feature").tags("@UploadNotes").relativeTo(getClass());
	}
	@Karate.Test
	Karate UpdateSheet() {
		return Karate.run("classpath:Features/04_UpdateSheet.feature").tags("@UpdateSheet").relativeTo(getClass());
	}

	}

