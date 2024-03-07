Feature:

  Background:
    * url baseUrl
    * configure ssl = true
    * def workbook =  call read('InsertWorkbook.feature')
    * def c_Id1 = workbook.Id
    * print c_Id1
    * def testcookie = workbook.testCooke
    * print testcookie

  Scenario: Delete Workbook
    Given path '/elasticsearch/workbook/delete'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"id":"#(c_Id1)"}
    When method Post
    Then status 201
    And match response._id == '#(c_Id1)'
    And match response._index == '#present'
    And match response._version == '#present'
    And match response.result == 'updated'
    #DeleteWorkbook
