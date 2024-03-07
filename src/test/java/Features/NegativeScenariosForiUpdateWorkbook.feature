Feature: Xspace test
# @author Akshay

  Background:
   # * url 'https://dev-xtables.thedigitalgroup.com'
    * url baseUrl
    * configure ssl = true
    * def workbook =  call read('InsertWorkbook.feature')
    * def c_Id1 = workbook.Id
    * def testcookie = workbook.testCooke
    * def utility = Java.type('Utils.Internal.RandomDataUtility')
    * def randomName = utility.getRandomFirstName()
    * def randomNumber = utility.getRandomNumber(2)
    * def random = "Workbook" + (randomNumber)
    * def randomSheetName = "Sheet" + (randomNumber)




  Scenario: Update WorkBook
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

  Scenario: Update WorkBook without token
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    Then status 401
    And print response


  Scenario: Update WorkBook with invalid Authentication
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  'jhbfhbadhfajf'
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    Then status 401


  Scenario: Update WorkBook with invalid or missing payload
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    When method PATCH
    * match response == '#$'

  Scenario: Update WorkBook with invalid or missing payload with invalid method type
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    * method Get
    * match response == '#$'
    * print responseStatus


  Scenario: Update WorkBook with invalid url
    Given path '/elasticsearch/update/hhhh'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    * print responseStatus


  Scenario: Insert WorkBook with invalid method name
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method Get
    * match  responseStatus != 201


  Scenario: Insert WorkBook with correct status code
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    * def responsestatus = 201
    * match  responseStatus != responsestatus
    And print response


  Scenario: Insert WorkBook by asserting incorrect response headers
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    * def responsestatus = 201
    * match  responseStatus != responsestatus
    And print response
    * match responseHeaders !contains
    """
  {
  "Server": [
  "nginx"
  ],
  "Date": [
  "Fri, 01 Mar 2024 09:48:36 GMT"
  ],
  "Content-Type": [
  "application/jsonnn; charset=utf-8"
  ],
  "Content-Length": [
  "166"
  ],
  "Connection": [
  "keep-alive"
  ],
  "X-Powered-By": [
  "Express"
  ],
  "Access-Control-Allow-Origin": [
  "*"
  ],
  "Cache-Control": [
  "no-store, no-cache, must-revalidate, proxy-revalidate",
  "public, must-revalidate"
  ],
  "ETag": [
  "W/\"a6-ozL3udgmnxtAspuQjaBxv8I9uyU\""
  ],
  "Front-End-Https": [
  "on"
  ],
  "Strict-Transport-Security": [
  "max-age=2592000; includeSubdomain"
  ],
  "Set-Cookie": [
  ]
  }
    """


  Scenario: Insert WorkBook with incorrect response type
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    * def responsestatus = 201
    * match  responseStatus != responsestatus
    And match response._id != '#notpresent'
    And match response._index != '#notpresent'
    And match response._version != '#notpresent'
    And match response.result != 'Updated'
    And match response._seq_no != '#string'
    And print response

  Scenario: Insert WorkBook with incorrect response type
    Given path '/elasticsearch/update'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"workbook","id":"#(c_Id1)","doc":{"name":"#(randomName)"}}
    When method PATCH
    * def responsestatus = 201
    * match  responseStatus != responsestatus
    * match  response != {_index:'#null ',_id:'#number? _ > 0'}