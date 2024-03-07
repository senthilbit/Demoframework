Feature: Test demo API

  Scenario: Run a sample Get API
    Given url  'https://reqres.in/api/users?'
    And param page = 2
    When method GET
    Then status 200
    And print response
    * def jsonresponse = response
    * print jsonresponse


    #Assertions via json file
    * def expectedOutputJson =  read('classpath:Data/books.json')
    * match response == expectedOutputJson



    #Assertions via json parsing
    * match jsonresponse.data[0].first_name == 'Michael'
    And assert jsonresponse.data.length == 6
    And assert jsonresponse.data[0].first_name != null
    * def actual = jsonresponse.data[0].id
    * print actual
    * print responseTime
    * print responseStatus
    * print responseHeaders
    * print responseCookies
    * def page = 2
    * match response.page == '#(page)'
    * match response contains {per_page:'#notnull', total_pages: '#ignore', data:'#array', support: '##object'}
    * def available_ids = karate.jsonPath(response,"$..['id']")
    * print available_ids
    * match available_ids !contains [2]



    #Assertions via json parsing by ids
    * match available_ids contains only [10,9,7,8,12,11]
    * match available_ids contains any [10,9,7,8]
    * match each response.data[*] == {id:'#number? _ > 0', email:'#regex .+@reqres.in', first_name:'#string', last_name:'#string', avatar: '#string'}
    * def nested_data = karate.jsonPath(response,"$..['id','first_name']")
    * print nested_data



    #Assertions via json string
    * match response.data contains deep
      """
      [
      { "id": 7,
      "first_name": "Michael"
      },
      {
      "id": 8,
      "first_name": "Lindsay"
      },
      {
      "id": 9
      }
      ]
      """
    * def perPage = response.per_page
    * def totalPages = response.total_pages
    * print perPage, totalPages
    * print perPage + totalPages
    # 6 + 2 = 8
    * assert perPage + totalPages == 8


  #Assertions via csv file
  Scenario Outline: Data-Driven post request
    Given url <posts>
    And header Content-type = <Content-type>
    And request
      """
      {
      title: <title>
      body: <body>
      userId: <userId>
      }
      """
    When method <method>
    Then status <status>
    And print response
    And match response contains
      """
      {
      title: <title>
      body: <body>
      userId: <userId>
      }
      """

    Examples:
      |read('classpath:Data/postcsv.csv') |


  #Assertions via DataTables
  Scenario Outline: Verify that a new post for userID <userId> can be created
    Given url 'https://jsonplaceholder.typicode.com'
    Given path 'posts'
    And header Content-type = 'application/json; charset=UTF-8'
    And request
        """
        {
            title: <title>,
            body: <body>,
            userId: <userId>,
        }
        """
    When method post
    Then status 201
    And match response == { id: '#number', title: <title>,  body: <body>,  userId: <userId> }


    Examples:
      | userId  |  title      | body  |
      |  1      |  title1     | body1 |
      |  2      |  title2     | body2 |
      |  3      |  title3     | body3 |
