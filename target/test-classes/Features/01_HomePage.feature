Feature: Xspace test
# @author Akshay

  Background:
    * url baseUrl
    * configure ssl = true
    * def result = { "username":"amandeep.chauhan@thedigitalgroup.com", "password":"tdg@1234" }
    #* def workbook =  call read('InsertWorkbook.feature')
   # * def testcookie = workbook.testCooke
    * path '/auth/getToken'
    * request result
    * method POST
    * status 201
    * def testCooke = response.replace('"','').replace('"','')
  @HomePage
  Scenario: HomePage

    Given path '/notification/getNotifications/'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"recipient_id":"amandeep.chauhan@thedigitalgroup.com"}
    When method POST
    Then status 201
    #GetNotifications
    Given path '/access/getAccessInfo/'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"recipient_id":"amandeep.chauhan@thedigitalgroup.com"}
    When method POST
    Then status 201
      #Workbook
    Given path '/elasticsearch/search'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","field":"user_id","value":"amandeep.chauhan@thedigitalgroup.com"}
    When method POST
    Then status 201
    * def c_workbookid = response[0]._id
    * print c_workbookid





