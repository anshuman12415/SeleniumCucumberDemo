Feature: Login OrangeHRM

Scenario: logo present on orangeHRM HomePage

Given I launch chrome browser
When login to OrangeHRM
Then verify logo presence on HomePage
And Quiet browser

