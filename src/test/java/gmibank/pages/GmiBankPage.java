package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GmiBankPage {

    public GmiBankPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//*[@id=\"account-menu\"]/a")
    public WebElement login_icon;
    @FindBy(xpath = "//*[@id='login-item']/span")
    public WebElement link_signIn;
    @FindBy(xpath = "//input[@id='username']")
    public WebElement txt_username;
    @FindBy(xpath = "//input[@id='password']")
    public WebElement txt_password;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[3]/button[2]/span")
    public WebElement btn_login_signIn;
    @FindBy(xpath = "//span[contains(text(),'team21 User')]")
    public WebElement text;


}




