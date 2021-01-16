$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:OrangeHRM.feature");
formatter.feature({
  "name": "Login OrangeHRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "logo present on orangeHRM HomePage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsLogin.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login to OrangeHRM",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLogin.login_to_OrangeHRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify logo presence on HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsLogin.verify_logo_presence_on_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Quiet browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.quiet_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:TestFB.feature");
formatter.feature({
  "name": "Test Facebook smoke scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "    TestLogin with valid credentials",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"password\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anshuman@gmail.com",
        "abc1234"
      ]
    },
    {
      "cells": [
        "abc12345@abc.com",
        "password1"
      ]
    },
    {
      "cells": [
        "anshu@outlook.com",
        "password3"
      ]
    },
    {
      "cells": [
        "anshuanshuman4@gmail.com",
        "manju@12415"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    TestLogin with valid credentials",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsFBlogin.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"anshuman@gmail.com\" and valid \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsFBlogin.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsFBlogin.user_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsFBlogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    TestLogin with valid credentials",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsFBlogin.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"abc12345@abc.com\" and valid \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsFBlogin.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsFBlogin.user_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsFBlogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    TestLogin with valid credentials",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsFBlogin.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"anshu@outlook.com\" and valid \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsFBlogin.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsFBlogin.user_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsFBlogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    TestLogin with valid credentials",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsFBlogin.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"anshuanshuman4@gmail.com\" and valid \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsFBlogin.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsFBlogin.user_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsFBlogin.close_browser()"
});
formatter.result({
  "status": "passed"
});
});