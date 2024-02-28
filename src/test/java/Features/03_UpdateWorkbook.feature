Feature: Xspace test
# @author Akshay

  Background:
   # * url 'https://dev-xtables.thedigitalgroup.com'
    * url baseUrl
    * configure ssl = true
    * def workbook =  call read('InsertWorkbook.feature')
    * def c_Id1 = workbook.Id
    * def testcookie = workbook.testCooke



  Scenario: Update WorkBook

      #Update WorkBook
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    Then status 200
    And match response._id == '#(c_Id1)'
    And match response._index == '#present'
    And match response._version == '#present'
    And match response.result == 'updated'
    And match response._seq_no == '#number'


