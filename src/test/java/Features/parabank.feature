Feature: Parabank Register
  Background:
    * configure driver = { type: 'chrome',  addOptions: ["--remote-allow-origins=*"]}
    * call read '../Locators/locators.json'
    * def data = Java.type("Utils.ExcelUtility")
    #Read Excel Data
    * def path = "D:\\KARATE_UI_Automation\\karate_ui_automation\\src\\test\\java\\Resources\\parabank_register.xlsx"
    * def payload = data.readExcelData(path)
    * print payload
    * def address = payload[0]['Address']
    * def firstname = payload[0]['First Name']
    * def lastname = payload[0]['Last Name']
    * def city = payload[0]['City']
    * def state = payload[0]['State']
    * def address = payload[0]['Address']
    * def zipcode = payload[0]['Zipcode']
    * def phone = payload[0]['Phone']
    * def ssn = payload[0]['SSN']
    * def username = payload[0]['Username']
    * def password = payload[0]['Password']
    * def confirm_password = payload[0]['Confirm']
    * def sleep = function(pause){ java.lang.Thread.sleep(pause*1000) }

  @parabank-register
  Scenario: Register to Parabank
    Given driver 'https://parabank.parasoft.com/parabank/index.htm'
    * driver.maximize()
    When click('{a}Register')
    * call sleep 2
    Then match driver.title == "ParaBank | Register for Free Online Account Access"
    #Fill form
    And input(Parabank.firstname, firstname)
    And input(Parabank.lastname, lastname)
    And input(Parabank.city, city)
    And input(Parabank.state, state)
    And input(Parabank.address, address)
    And input(Parabank.zipcode, "411057")
    And input(Parabank.phone, "1234567890")
    And input(Parabank.ssn, "123456789")
    And input(Parabank.username, username)
    And input(Parabank.password, password)
    And input(Parabank.confirm_password, confirm_password)
    * call sleep 3
    When submit().click(Parabank.register_button)
    * call sleep 3

  @parabank-login
  Scenario: Login to Parabank
    Given driver 'https://parabank.parasoft.com/parabank/index.htm'
    * driver.maximize()
    And input(Parabank.login_username, username)
    And input(Parabank.login_password, password)
    When submit().click(Parabank.login)
    * waitForUrl('https://parabank.parasoft.com/parabank/overview.htm')
    And highlight(Parabank.loggedin_user)
    And screenshot()
    * focus('{a}Log Out')
    When click('{a}Log Out')
    * call sleep 3

