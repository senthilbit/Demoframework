  Feature: LogOut Functionality
     @ignore
     @LogOut
   Scenario: Successful logout
   When click(logout.SandwitchButton)
   Then click(logout.logOutButton)
   Then waitForUrl('https://www.saucedemo.com/')
   * driver.close()