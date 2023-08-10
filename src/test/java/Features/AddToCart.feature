Feature:  Add cart Functionality

Background:
 #Reading locators from Json
 * call read '../Locators/locators.json'

 #Reading data from Excel
 * def data = Java.type("Utils.ExcelUtility")
 * def path = ".\\src\\test\\java\\Data\\Cart.xlsx"
 * def excelData = data.readExcelData(path)

* configure driver = { type: 'chrome', addOptions: ["--remote-allow-origins=*", "--disable-save-password-bubble", "--incognito" ] }
 * print excelData
 * def userName = excelData[0].UserName
 * def password = excelData[0].password
 * def firstName = excelData[1].FirstName
 * def lastName = excelData[1].LastName
 * def zipCodeNum = '12345'
 * def Tax = excelData[1].Tax
 * def Cost = excelData[1].Cost
 * def Total = excelData[1].Total

Scenario: Add To Cart End to End Flow
 Given driver 'https://www.saucedemo.com/'
 * driver.maximize()
 When input(login.userNameField,userName)
 And input(login.passwordField,password)
 Then click(login.logInButton)
 Then waitForUrl('https://www.saucedemo.com/inventory.html')
 * click(AddToCart.AddToCart)
 # Assert Correct product added
 * def expectedProduct = text(AddToCart.productText)
 Then click(AddToCart.CartClick)
 And match text(CheckOut.CheckOutproductText) == expectedProduct
 When click(CheckOut.CheckOut)
 Then input(CheckOut.UserFirstName,firstName)
 And input(CheckOut.UserLastName,lastName)
And input(CheckOut.PostalCode,zipCodeNum)
 Then click(CheckOut.ContinueButton)

 # validate text from UI from cart
 * def temp = text(CheckOut.Tax)
 * def tempTax = temp.substring(temp.lastIndexOf(' ') + 1)
 And match tempTax == Tax
 * def temp = text(CheckOut.inventoryPrice)
 * def tempinventoryPrice = temp.substring(temp.lastIndexOf(' ') + 1)
 And match tempinventoryPrice == Cost
 * def temp = text(CheckOut.totalLabel)
 * def temptotalLabel = temp.substring(temp.lastIndexOf(' ') + 1)
 And match temptotalLabel == Total
 Then click(CheckOut.FinishButton)
 And match text(CheckOut.FinishedText) == 'Thank you for your order!'
 And click(CheckOut.BackHomeButton)
 When click(logout.SandwitchButton)
 Then click(logout.logOutButton)
 Then waitForUrl('https://www.saucedemo.com/')
 * driver.close()