package com.qait.stepDef;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import com.qait.utils.Getter;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {

	WebDriver d;
	WebElement we;
	
	String config = "src/test/resources/YamlFiles/Config.yml", title, data;
	String locators = "src/test/resources/YamlFiles/Locators.yml";
	String urls = "src/test/resources/YamlFiles/Urls.yaml";
	int i;
	@Given("^I set up the driver and open chrome$")
    public void i_set_up_the_driver_and_open_chrome() throws Throwable 
	{
		data = Getter.getConfig("Chrome" , config);
		System.setProperty(data.split(":")[0] , data.split(":")[1]);
//		System.setProperty("webdriver.chrome.driver","config/browser/chromedriver.exe");
		d = new ChromeDriver();
    }
	
/************************************************************************************************************/
	@Given("^I launch the gmail$")
    public void i_launch_the_gmail() throws Throwable 
	{
//	@Given("I launch the {string}")
//	public void i_launch_the(String str) throws Throwable 
//	{
	    data = Getter.getUrls("Gmail", urls);
//		data = Getter.getUrls(str, urls);
		System.out.println("Currently opening :- "+data);
		d.get(data);
	}
	
    /*********When I  enter the "<username>" and "<password>"******************/	

	/*@When("^I  enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	@When("^I  enter the \"(.*)\" and \"(.*)\"$")
	@When("^I  enter the \"(.+)\" and \"(.+)\"$")*/
	
	/*********When I  enter the <username> and <password>******************/
	/*@When("^I  enter the ([^\"]*) and ([^\"]*)$")
	@When("^I  enter the (.*) and (.*)$")
	@When("^I  enter the (.+) and (.+)$")
    public void i_enter_the_and(String username, String password) throws Throwable*/ 

    /*********When I  enter the username and password******************/	

	@When("^I  enter the username and password$")
	public void i_enter_the_username_and_password(DataTable a) throws Throwable
	{   
		List<Map<String,String>> b = a.asMaps(String.class,String.class);
		we = Getter.getLocator(d,  "username" , locators);
		
		System.out.println(b.get(0));
		System.out.println(b.get(0).entrySet());
		for(Map.Entry<String,String> ab : b.get(0).entrySet())
		{
			switch(ab.getKey())
			{
				case "username":
					we = Getter.getLocator(d,  "username" , locators);
					we.sendKeys(ab.getValue());
					we = Getter.getLocator(d,  "nextButton" , locators);
					we.click();
					break;
				case "password":
					Thread.sleep(1000);
					we = Getter.getLocator(d,  "password" , locators);
					we.sendKeys(ab.getValue());
					break;
			}
			
		}
		
		/*we = Getter.getLocator(d,  "username" , locators);
		we.sendKeys(b.get(0).get("username"));
		we = Getter.getLocator(d,  "nextButton" , locators);
		we.click();
		Thread.sleep(1000);
		we = Getter.getLocator(d,  "password" , locators);
		we.sendKeys(b.get(0).get("password"));*/
	}

	@When("^I click on the login button$")
    public void i_click_on_the_login_button() throws Throwable 
	{
		we = Getter.getLocator(d,  "loginButton" , locators);
		we.click();
	}
	
	@Then("^I validate gmail inbox page for (.+)$")
    public void i_validate_gmail_inbox_page_for(String username) throws Throwable 
	{
        Thread.sleep(5000);
		title = d.getTitle();
        Assert.assertEquals(title.contains(username.concat("@gmail.com")),true,"My error Msg :- I am not in Gmail Inbox");
    }
	
	@When("^I check the number of mail in the inbox$")
    public void i_check_the_number_of_mail_in_the_inbox() throws Throwable 
	{
		try
		{
			we = Getter.getLocator(d,  "index" , locators);
	        i = Integer.parseInt(we.getText());
	        System.out.println("Total unread Messages are :- "+ i);
		}
		catch(org.openqa.selenium.NoSuchElementException abc)
		{
			System.out.println("There Are 0 unread Messages in your inbox");
		}   
    }

    @Then("^I click on the first mail$")
    public void i_click_on_the_first_mail() throws Throwable 
    {
    	we = Getter.getLocator(d,  "firstMail" , locators);
        we.click();
    }

   /***********************************************************************************************************************/
    
    
    @Given("^I launch the hris$")
    public void i_launch_the_hris() throws Throwable 
    {
    	data = Getter.getUrls("Hris", urls);
    	System.out.println("Currently opening :- "+data);
    	d.get(data);
    	we = Getter.getLocator(d,  "loginPanel" , locators);
    	we.click();
    }

    @When("^I  enter credentials to login$")
    public void i_enter_credentials_to_login(DataTable credentials) throws Throwable 
    {
    	List<List<String>> data = credentials.raw();
    	we = Getter.getLocator(d,  "HrisuserName" , locators);
    	we.sendKeys(data.get(0).get(0));
    	we = Getter.getLocator(d,  "Hrispassword" , locators);
    	we.sendKeys(data.get(0).get(1));
    	we = Getter.getLocator(d,  "signInButton" , locators);
    	we.click();
    }
    
    

}
