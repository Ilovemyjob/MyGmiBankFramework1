package gmibank.stepdefinitions;

import gmibank.pages.GmiBankPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import org.junit.Assert;

public class GmiBankStepDefinitions {

    GmiBankPage gmiBankPage = new GmiBankPage();
    @Given("user go to {string}")
    public void user_go_to(String homepage) {
        Driver.getDriver().get(homepage);
    }

    @Given("User enter sign in")
    public void user_enter_sign_in() {
       gmiBankPage.login_icon.click();
       gmiBankPage.link_signIn.click();
       gmiBankPage.txt_username.sendKeys("team21user");
    }

    @Given("User enter password")
    public void user_enter_password() throws InterruptedException {
        gmiBankPage.txt_password.sendKeys("team21Use");
        gmiBankPage.btn_login_signIn.click();
        Thread.sleep(2000);
        System.out.println(gmiBankPage.text.getText());



        Assert.assertTrue("test is past",gmiBankPage.text.getText().contains("team21 User"));
    }

}
