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
    #SearchByWorkbookId
    Given path '/elasticsearch/sheet/searchByWorkbookId'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"sheet","workbook_id":"#(c_workbookid)"}
    When method POST
    Then status 201
    And match response[0]._source.workbook_id == '#(c_workbookid)'
    And match response[0]._index == '#string'
    And match response[0]._source.user_email == '#string'
    And match response[0]._source.user_id == '#string'
    And match response[0]._source.description == "A new sheet's description"
    And match response[0]._source.title == 'Random title'


