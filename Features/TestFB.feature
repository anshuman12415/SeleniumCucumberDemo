Feature: Test Facebook smoke scenario

  Scenario Outline: 
    TestLogin with valid credentials

    Given open firefox and start application
    When I enter valid "<username>" and valid "password"
    Then user should be login successfully
    And close browser

    Examples: 
      | username           | password  |
      | anshuman@gmail.com | abc1234   |
      | abc12345@abc.com   | password1 |
      | anshu@outlook.com  | password3 |
| anshuanshuman4@gmail.com  |  manju@12415 |