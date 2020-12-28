package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsFBlogin {
	WebDriver d;

	@Given("open firefox and start application")
	public void open_firefox_and_start_application() {
		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\anshu\\OneDrive\\Documents\\Cucumber\\SeleniumCucumber\\Drivers\\geckodriver.exe");
		d = new FirefoxDriver();
	}

	@When("I enter valid {string} and valid {string}")
	public void i_enter_valid_and_valid(String uname, String pass) {
		d.get("https://www.facebook.com/");
		d.findElement(By.id("email")).clear();
		d.findElement(By.id("email")).sendKeys(uname);
		d.findElement(By.id("pass")).clear();
		d.findElement(By.id("pass")).sendKeys(pass);
	}

	@Then("user should be login successfully")
	public void user_should_be_login_successfully() {
		d.findElement(By.xpath("//*[@id=\"u_0_b\"]")).click();

	}

	@Then("close browser")
	public void close_browser() {
		d.quit();

	}

}
