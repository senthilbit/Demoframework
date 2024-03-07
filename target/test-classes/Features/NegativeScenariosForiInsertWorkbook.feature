Feature: Xspace test
# @author Akshay

  Background:
   # * url 'https://dev-xtables.thedigitalgroup.com'
    * url baseUrl
    * configure ssl = true
    * def result = { "username":"amandeep.chauhan@thedigitalgroup.com", "password":"tdg@1234" }
    * def utility = Java.type('Utils.Internal.RandomDataUtility')
    * def randomName = utility.getRandomFirstName()
    * def randomNumber = utility.getRandomNumber(2)
    * print randomNumber
    * def random = "Workbook" + (randomNumber)
    * def randomSheetName = "Sheet" + (randomNumber)
    * print random
    * print randomName
    * path '/auth/getToken'
    * request result
    * method POST
    * status 201
    * print response
    * def testCooke = response.replace('"','').replace('"','')

  Scenario: Insert WorkBook without token
    Given path '/elasticsearch/sheet/insertDoc'
    * header Accept = 'application/json'
    And request {"index":"workbook","doc":{"name":"#(random)","user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    Then status 401



  Scenario: Insert WorkBook with invalid Authentication
    Given path '/elasticsearch/sheet/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  'jhbfhbadhfajf'
    And request {"index":"workbook","doc":{"name":"#(random)","user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    Then status 401


  Scenario: Insert WorkBook with invalid or missing payload
    Given path '/elasticsearch/sheet/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    When method post
    * print responseStatus

  Scenario: Insert WorkBook with invalid or missing payload with invalid method type
    Given path '/elasticsearch/sheet/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    * method Get
    * print responseStatus


  Scenario: Insert WorkBook with invalid url
    Given path '/elasticsearch/sheet/'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":"#(random)","user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    * print responseStatus


  Scenario: Insert WorkBook with invalid method name
    Given path '/elasticsearch/sheet/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":"#(random)","user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method Get
    * match  responseStatus != 201


  Scenario: Insert WorkBook with incorrect status code
    Given path '/elasticsearch/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":5,"user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    * def responsestatus = 200
    * match  responseStatus != responsestatus


  Scenario: Insert WorkBook by asserting incorrect response headers
    Given path '/elasticsearch/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":5,"user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    * def responsestatus = 200
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
    Given path '/elasticsearch/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":5,"user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    * def responsestatus = 200
    * match  responseStatus != responsestatus
    And match response._id != '#notpresent'
    And match response._index != '#notpresent'
    And match response._version != '#notpresent'
    And match response.result != 'Created'
    And match response._seq_no != '#string'


  Scenario: Insert WorkBook with incorrect response type
    Given path '/elasticsearch/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":5,"user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    * def responsestatus = 200
    * match  responseStatus != responsestatus
    * match  response != {_index:'#null ',_id:'#number? _ > 0'}
