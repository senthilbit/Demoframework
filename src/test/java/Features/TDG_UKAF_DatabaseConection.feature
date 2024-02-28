Feature: dogs end-point that uses jdbc as part of the test

  Background:
# use jdbc to validate
    * def config = { username: 'root', password: 'M@gnet$151', url: 'jdbc:mysql://localhost:3307/karate_demo', driverClassName: 'com.mysql.cj.jdbc.Driver' }
    * def DbUtils = Java.type('Utils.External.DbUtils')
    * def db = new DbUtils(config)
    * def jsonResponseFromDB = db.readRows('SELECT * FROM demo')
    Then print jsonResponseFromDB

  Scenario: Run a sample Get API
    Given url  'https://reqres.in/api/users?'
    And param page = 2
    When method GET
    Then status 200
    And print response
    * def dataArray = response.data
    * match dataArray == jsonResponseFromDB


