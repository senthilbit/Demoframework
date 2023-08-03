Feature:  Open New Account Fuctionality

Background:
#Reading locators from Json
* def locators = read('classpath:Locators/locators.json')

#Reading data from Excel
* def data = Java.type("Utils.ReadExcel")
* def path = "D:\\DemoTCBProject\\Demoframework\\src\\test\\java\\Data\\ShoppingCartTestdata.xlsx"
* def Login = data.readExcelData("Login", path)
* def CheckOut = data.readExcelData("CheckOut", path)
* print CheckOut
* configure driver = { type: 'chrome', addOptions: ["--remote-allow-origins=*", "--disable-save-password-bubble", "--incognito" ] }

#* def logIn = call read('Login.feature@Login')

* def userName = Login[0].UserName
* def password = Login[0].password
* def firstName = CheckOut[0].FirstName
 * print firstName
* def lastName = CheckOut[0].LastName
* def zipCode = CheckOut[0].ZipCode
* def Tax = CheckOut[0].Tax
* def Cost = CheckOut[0].Cost
* def Total = CheckOut[0].Total

Scenario: Add To Cart End to End Flow
 Given driver 'https://www.saucedemo.com/'
 * driver.maximize()
 When input(locators.login.userNameField,userName)
 And input(locators.login.passwordField,password)
 Then click(locators.login.logInButton)
 And click(locators.AddToCart.AddToCart)
 # Assert Correct product added
 * def expectedProduct = text(locators.AddToCart.productText)
 Then click(locators.AddToCart.CartClick)
 And match text(locators.CheckOut.CheckOutproductText) == expectedProduct
 When click(locators.CheckOut.CheckOut)
 Then input(locators.CheckOut.UserFirstName,firstName)
 And input(locators.CheckOut.UserLastName,lastName)
 And input(locators.CheckOut.ZipCode,zipCode)
 Then click(locators.CheckOut.ContinueButton)
 
 # validate text from UI from cart
 * def temp = text(locators.CheckOut.Tax)
 * def tempTax = temp.substring(temp.lastIndexOf(' ') + 1)
 And match tempTax == Tax 
 * def temp = text(locators.CheckOut.inventoryPrice)
 * def tempinventoryPrice = temp.substring(temp.lastIndexOf(' ') + 1)
 And match tempinventoryPrice == Cost
 * def temp = text(locators.CheckOut.totalLabel)
 * def temptotalLabel = temp.substring(temp.lastIndexOf(' ') + 1)
 And match temptotalLabel == Total 
 Then click(locators.CheckOut.FinishButton)
 And match text(locators.CheckOut.FinishedText) == 'Thank you for your order!'
 And click(locators.CheckOut.BackHomeButton)
 * def logOut = call read('LogOut.feature@LogOut')

 