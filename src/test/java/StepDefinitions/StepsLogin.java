package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsLogin {

	WebDriver driver;

	@Given("I launch chrome browser")
	public void i_launch_chrome_browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\anshu\\OneDrive\\Documents\\Cucumber\\SeleniumCucumber\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();

	}

	@When("login to OrangeHRM")
	public void login_to_OrangeHRM() {
		driver.get("https://opensource-demo.orangehrmlive.com/");

	}

	@Then("verify logo presence on HomePage")
	public void verify_logo_presence_on_HomePage() {
		boolean status = driver.findElement(By.xpath("//*[@id=\"divLogo\"]/img")).isDisplayed();
		Assert.assertEquals(true, status);
	}

	@Then("Quiet browser")
	public void quiet_browser() {
		driver.quit();

	}

}
