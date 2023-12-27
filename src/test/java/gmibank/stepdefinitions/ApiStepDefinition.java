package gmibank.stepdefinitions;

import gmibank.utilities.ConfigrationReader;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;


public class ApiStepDefinition {

    Response response;
    @Given("user go to api end point {string}")
    public void user_go_to_api_end_point(String endpoint) {
         response = given().headers(
                "Authorization",
                "Bearer " + ConfigrationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(endpoint)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();


    }




    @Given("read all customer and sets responds")
    public void read_all_customer_and_sets_responds() {
        System.out.println(response.prettyPrint());
    }


}


