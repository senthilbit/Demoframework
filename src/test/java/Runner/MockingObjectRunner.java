package com.demo.features;

import org.junit.Rule;
import com.intuit.karate.junit5.Karate;
import static com.github.tomakehurst.wiremock.client.WireMock.*;
import com.github.tomakehurst.wiremock.junit.*;

import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;


public class MockingObjectRunner {
	


	@Rule
	public WireMockRule wireMockRule = new WireMockRule();
	
	
	@Before
	public void setup() {
		wireMockRule.start();
		stubbing();
	}
	
	
	
	@After
	public void setup1() {
		wireMockRule.stop();;
		
	}
	
	public static void stubbing() {
		stubFor(get(urlEqualTo("/whatssup")).willReturn(aResponse().withStatus(200)
				.withHeader("ContenType", "application/json").withBody("{\r\n"
						+ "  \"page\": 2,\r\n"
						+ "  \"per_page\": 6,\r\n"
						+ "  \"total\": 12,\r\n"
						+ "  \"total_pages\": 2,\r\n"
						+ "  \"data\": [\r\n"
						+ "    {\r\n"
						+ "      \"id\": 7,\r\n"
						+ "      \"email\": \"michael.lawson@reqres.in\",\r\n"
						+ "      \"first_name\": \"Michael\",\r\n"
						+ "      \"last_name\": \"Lawson\",\r\n"
						+ "      \"avatar\": \"https://reqres.in/img/faces/7-image.jpg\"\r\n"
						+ "    },\r\n"
						+ "    {\r\n"
						+ "      \"id\": 8,\r\n"
						+ "      \"email\": \"lindsay.ferguson@reqres.in\",\r\n"
						+ "      \"first_name\": \"Lindsay\",\r\n"
						+ "      \"last_name\": \"Ferguson\",\r\n"
						+ "      \"avatar\": \"https://reqres.in/img/faces/8-image.jpg\"\r\n"
						+ "    },\r\n"
						+ "    {\r\n"
						+ "      \"id\": 9,\r\n"
						+ "      \"email\": \"tobias.funke@reqres.in\",\r\n"
						+ "      \"first_name\": \"Tobias\",\r\n"
						+ "      \"last_name\": \"Funke\",\r\n"
						+ "      \"avatar\": \"https://reqres.in/img/faces/9-image.jpg\"\r\n"
						+ "    },\r\n"
						+ "    {\r\n"
						+ "      \"id\": 10,\r\n"
						+ "      \"email\": \"byron.fields@reqres.in\",\r\n"
						+ "      \"first_name\": \"Byron\",\r\n"
						+ "      \"last_name\": \"Fields\",\r\n"
						+ "      \"avatar\": \"https://reqres.in/img/faces/10-image.jpg\"\r\n"
						+ "    },\r\n"
						+ "    {\r\n"
						+ "      \"id\": 11,\r\n"
						+ "      \"email\": \"george.edwards@reqres.in\",\r\n"
						+ "      \"first_name\": \"George\",\r\n"
						+ "      \"last_name\": \"Edwards\",\r\n"
						+ "      \"avatar\": \"https://reqres.in/img/faces/11-image.jpg\"\r\n"
						+ "    },\r\n"
						+ "    {\r\n"
						+ "      \"id\": 12,\r\n"
						+ "      \"email\": \"rachel.howell@reqres.in\",\r\n"
						+ "      \"first_name\": \"Rachel\",\r\n"
						+ "      \"last_name\": \"Howell\",\r\n"
						+ "      \"avatar\": \"https://reqres.in/img/faces/12-image.jpg\"\r\n"
						+ "    }\r\n"
						+ "  ],\r\n"
						+ "  \"support\": {\r\n"
						+ "    \"url\": \"https://reqres.in/#support-heading\",\r\n"
						+ "    \"text\": \"To keep ReqRes free, contributions towards server costs are appreciated!\"\r\n"
						+ "  }\r\n"
						+ "} ")));
	}
	
	
				@Test
				@Karate.Test
				Karate json() {
					
					stubbing();
				
					return Karate.run("Features/Wire").relativeTo(getClass());
}
	}

				
	
