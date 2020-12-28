package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\anshu\\OneDrive\\Documents\\Cucumber\\SeleniumCucumber\\Features", glue = "StepDefinitions", plugin = {
		"html:target/cucumber-html-report" }

)
public class TestRunner {

}
