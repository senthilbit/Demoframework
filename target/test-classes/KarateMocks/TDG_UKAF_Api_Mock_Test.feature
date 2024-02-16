Feature: Mocking Api  using Karate Mock for Xspace application
# @author Akshay

  Background:
    * configure ssl = true
    * def result = { "username":"amandeep.chauhan@thedigitalgroup.com", "password":"tcb@1234" }
    * def utility = Java.type('Utils.Internal.RandomDataUtility')
    * def randomName = utility.getRandomFirstName()
    * def randomNumber = utility.getRandomNumber(2)
    * print randomNumber
    * def random = "Workbook" + (randomNumber)
    * print random
    * print randomName



  Scenario: Insert WorkBook
    * url 'https://dev-xspaces.thedigitalgroup.com/auth/getToken'
    * request result
    * method POST
    * status 201
    * print response
    * def testCooke = response.replace('"','').replace('"','')

    * def start = () => karate.start('TDG_UKAF_Mock.feature').port
    * def port = callonce start
    * url 'http://localhost:' + port

    Given path '/elasticsearch/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"index":"workbook","doc":{"name":"#(random)","user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    When method post
    Then status 201
    And print response
    * def Id = response._id
    * print Id


    #Update workbook
    Given path '/elasticsearch/update'
    And request {"index":"workbook","id":"#(Id)","doc":{"name":"#(randomName)"}}
    When method PATCH
    Then status 200
    And print response

   #Delete Workbook
    Given url 'https://dev-xspaces.thedigitalgroup.com/elasticsearch/workbook/delete'
    * header Accept = 'application/json'
    * header Cookie =  testCooke
    And request {"id":"#(Id)"}
    When method PATCH
    Then status 200
    And print response




