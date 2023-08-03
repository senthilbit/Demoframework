  Feature: LogOut Fuctionality
   @LogOut
   Scenario: Successful logout
   When click(locators.logout.SandwitchButton)
   Then click(locators.logout.logOutButton)
   Then waitForUrl('https://www.saucedemo.com/')
   * driver.close()