Feature: using the 'setPathPattern' option

  Background:
    * url "http://petstore3.swagger.io"
    * eval scOptions.setDestUrl("https://petstore3.swagger.io")

  Scenario:
    * eval scOptions.setPathPattern("/api/v3/pet/{petId}")
    Given path "api", "v3", "pet", 2
    When method GET
    Then status 200