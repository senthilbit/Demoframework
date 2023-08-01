Feature: Test demo API

  Scenario: Run a sample Get API
    Given url  'http://localhost:8080/whatssup'
    When method GET
    Then status 200
    And print response
    And match response.data[0].first_name == "Michael"
    * def jsonresponse = read('classpath:Data/books.json')
    And match response == jsonresponse