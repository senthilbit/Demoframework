package WireMock;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.WireMock;
import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class WireMockStubs {


    private static final String HOST = "localhost";
    private static final int port = 8080;
    private static WireMockServer server = new WireMockServer();





    @BeforeAll
    public static void setup() {
        server.start();
        WireMock.configureFor(HOST,port);


    }




    @AfterAll
    public static void tear() {
        server.stop();;

    }



    public static void stubForPatchRequest() {


        stubFor(patch(urlEqualTo("/elasticsearch/update"))
                .withRequestBody(matchingJsonPath("$.index"))
                .withRequestBody(matchingJsonPath("$.id"))
                .withRequestBody(matchingJsonPath("$.doc"))
                .willReturn(aResponse().withStatus(200)
                        .withHeader("Accept", "application/json")
                        .withHeader("Cookie", "$Cookie")
                        .withBody("{\n" +
                                "  \"_index\": \"workbook\",\n" +
                                "  \"_id\": \"GavY6IwB7szs8maWXH9s\" ,\n" +
                                "  \"_version\": 2,\n" +
                                "  \"result\": \"updated\",\n" +
                                "  \"_shards\": {\n" +
                                "    \"total\": 2,\n" +
                                "    \"successful\": 1,\n" +
                                "    \"failed\": 0\n" +
                                "  },\n" +
                                "  \"_seq_no\": 677180,\n" +
                                "  \"_primary_term\": 4\n" +
                                "}"
                        )));

    }
    public static void stubForRequest() {

        stubFor(post(urlEqualTo("/elasticsearch/insertDoc"))

                .withRequestBody(matchingJsonPath("$.index"))
                .withRequestBody(matchingJsonPath("$.doc"))
                .willReturn(aResponse().withStatus(201)
                        .withHeader("Accept", "application/json")
                        .withHeader("Cookie", "$Cookie").withBody("{\n" +
                                "  \"_index\": \"workbook\",\n" +
                                "  \"_id\": \"GavY6IwB7szs8maWXH9s\",\n" +
                                "  \"_version\": 1,\n" +
                                "  \"result\": \"created\",\n" +
                                "  \"_shards\": {\n" +
                                "    \"total\": 2,\n" +
                                "    \"successful\": 1,\n" +
                                "    \"failed\": 0\n" +
                                "  },\n" +
                                "  \"_seq_no\": 675347,\n" +
                                "  \"_primary_term\": 4\n" +
                                "}"
                        )));

    }


    @Test
    @Karate.Test
    Karate json() {

        //stubForRequest();

        return Karate.run("classpath:WireMock/wiremock.feature").relativeTo(getClass());
    }
}

