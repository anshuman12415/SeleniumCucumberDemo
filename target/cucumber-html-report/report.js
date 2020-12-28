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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"divLogo\"]/img\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KVS4D73\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\anshu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56379}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4d7caaa4af14a719fbf71253223063b6\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"divLogo\"]/img}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.StepsLogin.verify_logo_presence_on_HomePage(StepsLogin.java:31)\r\n\tat ✽.verify logo presence on HomePage(file:OrangeHRM.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Quiet browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepsLogin.quiet_browser()"
});
formatter.result({
  "status": "skipped"
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