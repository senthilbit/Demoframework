Feature:  HRMS LMS

 # @author Akshay
  Background:
 #Reading locators from Json
    * call read '../Locators/HRMS.json'
    * configure driver = { type: 'chrome', addOptions: ["--remote-allow-origins=*", "--disable-save-password-bubble", "--incognito" ] }

    * def userName = "akshay.gurjar@thedigitalgroup.com"
    * def password = "31may2024@A"





  Scenario: HRMS all training view
    Given driver 'https://hrm.thedigitalgroup.com/'
    * driver.maximize()
    When input(Login.EnterEmail,userName)
    And input(Login.EnterPassword,password)
    Then click(Sigin.signin)
    * waitFor(LMS.lmsbutton).click()
    Then click(LMS.training)
    * switchFrame(0)
    * switchFrame(2)
    * waitFor(LMS.alltraining).click()
    * switchFrame(0)
    * switchFrame(2)
    * match text(LMS.piechartcategory) == 'Available Training Categories'





  Scenario: HRMS Static Report view for current date
    Given driver 'https://hrm.thedigitalgroup.com/'
    * driver.maximize()
    When input(Login.EnterEmail,userName)
    And input(Login.EnterPassword,password)
    Then click(Sigin.signin)
    * waitFor(Reports.reports).click()
    * waitFor(Reports.staticReport).click()
    * switchFrame(0)
    * switchFrame(2)
    * waitFor(Reports.checkinreport).click()
    * scroll(Reports.gridview).click()
    * scroll(Reports.dragtotable)
    * match text(Reports.empid) == '02642'


