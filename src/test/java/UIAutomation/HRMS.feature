Feature:  HRMS LMS

 # @author Akshay
  Background:
 #Reading locators from Json
    * call read '../Locators/HRMS.json'
    * configure driver = { type: 'chrome', addOptions: ["--remote-allow-origins=*", "--disable-save-password-bubble", "--incognito" ] }

    * def userName = "akshay.gurjar@thedigitalgroup.com"
    * def password = "31may2024@A"
    * def sleep = function(millis){ java.lang.Thread.sleep(millis) }




  Scenario: HRMS all training view
    Given driver 'https://hrm.thedigitalgroup.com/'
    * driver.maximize()
    * screenshot()
    When input(Login.EnterEmail,userName)
    And input(Login.EnterPassword,password)
    Then click(Sigin.signin)
    * sleep(5000)
    * screenshot()
    Then click(LMS.lmsbutton)
    Then click(LMS.training)
    * sleep(5000)
    * screenshot()
    * switchFrame(0)
    * sleep(5000)
    * switchFrame(2)
    Then click(LMS.alltraining)
    * delay(10000)
    * screenshot()




  Scenario: HRMS Static Report view for current date
    Given driver 'https://hrm.thedigitalgroup.com/'
    * driver.maximize()
    * screenshot()
    When input(Login.EnterEmail,userName)
    And input(Login.EnterPassword,password)
    Then click(Sigin.signin)
    * sleep(5000)
    * screenshot()
    Then click(Reports.reports)
    * sleep(5000)
    Then click(Reports.staticReport)
    * sleep(5000)
    * switchFrame(0)
    * sleep(5000)
    * switchFrame(2)
    Then click(Reports.checkinreport)
    * sleep(5000)
    * scroll(Reports.gridview).click()
    * sleep(5000)
    * screenshot()

