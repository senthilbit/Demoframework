Feature: Login Fuctionality

Background: 

* def utils = Java.type('TestFeatureFiles.ReadExcel')
* def dataMap = utils.readExcelData("Login")
* print dataMap
* def userName = dataMap[0].UserName
* def password = dataMap[0].password
* configure driver = { type: 'chrome', addOptions: ["--remote-allow-origins=*", "--disable-save-password-bubble", "--incognito" ] }
* def locators = read('locators.json')

@Login
Scenario: Successful login

   Given driver 'https://www.saucedemo.com/'
   * driver.maximize()
   And input(locators.login.userNameField,userName)
   And input(locators.login.passwordField,password)
   When click(locators.login.logInButton) 
   Then waitForUrl('https://www.saucedemo.com/inventory.html')   

   