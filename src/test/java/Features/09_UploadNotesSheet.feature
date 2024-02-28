Feature:
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
    * def randomNumber1 = utility.getRandomNumber(1)
    * print randomNumber
    * def random = "Workbook" + (randomNumber)
    * def randomSheetName = "Sheet" + (randomNumber)
    * def randomColumnName = "Column " + (randomNumber1)
    * print random
    * print randomName


  Scenario:
   #insert Sheet
    Given path '/elasticsearch/sheet/insertDoc'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    And request {"index":"sheet","doc":{"name":"#(randomSheetName)","title":"Random title","workbook_id":"#(c_Id1)","user_email":"amandeep.chauhan@thedigitalgroup.com","user_id":"amandeep.chauhan@thedigitalgroup.com","description":"A new sheet's description","notes":"","attachments":[],"sheetType":"default","sheet_identifier":"5e712257-93a3-460c-b75c-87fef6205dd8","columns":[{"columnElasticid":"2c18f8eb-04d2-4592-b835-5bb1b2beb5e4_es","width":"300","description":"A new column's description updated","colId":"#","field":"#","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"pinned":"left","sort":null,"sortIndex":null,"rowDrag":true},{"columnElasticid":"c3ffc3de-f1ac-4161-afb6-7e2ccc5c0d9a_es","width":"300","description":"A new column's description updated","colId":"ag-Grid-AutoColumn","field":"primaryCol","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"sort":null,"sortIndex":null,"headerName":"Primary Column","suppressMovable":true,"lockPosition":true},{"columnElasticid":"160baf0d-6386-492f-94e1-5098be9bbee3_es","width":"300","description":"A new column's description updated","colId":"Column 1","field":"Column1","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"sort":null,"sortIndex":null,"headerName":"Column 1"},{"columnElasticid":"a515bea4-1e45-48ce-9961-7f721a8223be_es","width":"300","description":"A new column's description updated","colId":"Column 2","field":"Column2","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"sort":null,"sortIndex":null,"headerName":"Column 2"},{"columnElasticid":"cef8c6df-0214-4b85-a76f-e3d9bdb60604_es","width":"300","description":"A new column's description updated","colId":"Column 3","field":"Column3","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"sort":null,"sortIndex":null,"headerName":"Column 3"},{"columnElasticid":"01f818d7-03c5-4cee-823a-f93704753c8f_es","width":"300","description":"A new column's description updated","colId":"Column 4","field":"Column4","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"sort":null,"sortIndex":null,"headerName":"Column 4"},{"columnElasticid":"8011c620-17f0-4040-81f9-51774726df41_es","width":"300","description":"A new column's description updated","colId":"Column 5","field":"Column5","enableValue":true,"enableRowGroup":true,"groupDefaultExpanded":1,"filter":true,"editable":true,"wrapText":true,"resizable":true,"autoHeaderHeight":true,"wrapHeaderText":true,"rowGroup":false,"rowGroupIndex":null,"pivot":false,"pivotIndex":null,"aggFunc":null,"sort":null,"sortIndex":null,"headerName":"Column 5"}],"Rows":{"user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","remote_datasource":"Elastic","attachments":[],"notes":"Notes example"}}}
    When method Post
    Then status 201
    And match response._index == '#string'
    And match response._version == '#number'
    And match response.result == 'created'
    And match response._seq_no == '#number'
    * def SheetID = response._id

     #uploadNotesToSheet
    Given path 'elasticsearch/sheet/uploadNotesToSheet'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    * request { note: "[{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"id\":\"1937b575-6ede-492b-89aa-c05e6135ab19\",\"created_date\":\"2023-12-01T12:15:08.403Z\",\"updated_date\":\"2023-12-01T12:15:08.403Z\",\"depth\":0,\"lid\":\"1937b575-6ede-492b-89aa-c05e6135ab19\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"asassss\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:15:08.499Z\",\"modified_date\":\"2023-12-01T12:15:08.499Z\",\"id\":\"5b08b616-b77a-47a1-80b8-134e69659972\",\"updated_date\":\"2023-12-01T12:15:08.499Z\"},{\"type\":\"paragraph\",\"depth\":0,\"created_date\":\"2023-12-01T12:15:08.499Z\",\"modified_date\":\"2023-12-01T12:15:08.499Z\",\"id\":\"f3a066b1-fdfb-462b-af34-e4b01fec0b2c\",\"updated_date\":\"2023-12-01T12:15:13.085Z\",\"children\":[{\"text\":\"\"}],\"lid\":\"f3a066b1-fdfb-462b-af34-e4b01fec0b2c\"},{\"type\":\"paragraph\",\"depth\":0,\"created_date\":\"2023-12-01T12:15:08.499Z\",\"modified_date\":\"2023-12-01T12:15:08.499Z\",\"id\":\"569fb648-b19a-4b44-978a-a1e41e4fbad6\",\"updated_date\":\"2023-12-01T12:15:13.265Z\",\"lid\":\"569fb648-b19a-4b44-978a-a1e41e4fbad6\",\"children\":[{\"text\":\"\"}]},{\"type\":\"paragraph\",\"depth\":0,\"created_date\":\"2023-12-01T12:15:08.499Z\",\"modified_date\":\"2023-12-01T12:15:08.499Z\",\"id\":\"dd8adf4e-6459-4406-acd7-eaf3c56285da\",\"updated_date\":\"2023-12-01T12:15:13.465Z\",\"lid\":\"dd8adf4e-6459-4406-acd7-eaf3c56285da\",\"children\":[{\"text\":\"\"}]},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:15:08.504Z\",\"modified_date\":\"2023-12- \":0,\"created_date\":\"2023-h\":0,\"created_date\":\"2023-12-01T12:15:08.508Z\",\"modified_date\":\"2023-12-01T12:15:08.508Z\",\"id\":\"12adf1d4-baef-4ced-b745-45aae0ce8af1\",\"updated_date\":\"2023-12-01T12:15:08.508Z\"}]",sheetId: "#(SheetID)"}
    * method Post
    Then status 201
    And match response._index == '#string'
    And match response._version == '#number'
    And match response.result == 'updated'
    And match response._seq_no == '#number'


    #Upload xPAD Content
    Given path '/elasticsearch/sheet/uploadxPadContent'
    * header Accept = 'application/json'
    * header Cookie =  testcookie
    * request { content: "[{\"type\":\"paragaph\",\"children\":[{\"text\":\"\"}],\"id\":\"58e6e126-7a4a-4a66-865c-7d9bd6d4115c\",\"created_date\":\"2023-12-01T12:24:05.126Z\",\"updated_date\":\"2023-12-01T12:24:05.126Z\",\"depth\":0,\"lid\":\"58e6e126-7a4a-4a66-865c-7d9bd6d4115c\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.176Z\",\"modified_date\":\"2023-12-01T12:24:05.176Z\",\"id\":\"cc2ddcdc-1fbe-4dfb-9398-65644018d72b\",\"updated_date\":\"2023-12-01T12:24:05.177Z\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.177Z\",\"modified_date\":\"2023-12-01T12:24:05.177Z\",\"id\":\"25890dd5-583b-4b31-af29-ee416220fcc9\",\"updated_date\":\"2023-12-01T12:24:05.177Z\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.177Z\",\"modified_date\":\"2023-12-01T12:24:05.177Z\",\"id\":\"0ff946d4-066f-428c-9a12-bb437bd06313\",\"updated_date\":\"2023-12-01T12:24:05.177Z\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.177Z\",\"modified_date\":\"2023-12-01T12:24:05.177Z\",\"id\":\"cae1dc11-aa53-4406-8363-da0cc693b4bc\",\"updated_date\":\"2023-12-01T12:24:05.177Z\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.177Z\",\"modified_date\":\"2023-12-01T12:24:05.177Z\",\"id\":\"d3aefff1-3750-454e-b04b-c1ce4601af28\",\"updated_date\":\"2023-12-01T12:24:05.177Z\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.178Z\",\"modified_date\":\"2023-12-01T12:24:05.178Z\",\"id\":\"c5cdf18f-92ea-40df-b5a5-1f052c00eed8\",\"updated_date\":\"2023-12-c2b2561ebfae\",\"updated_date\":\"2023-12-01T12:24:05.180Z\"},{\"type\":\"paragraph\",\"children\":[{\"text\":\"\"}],\"depth\":0,\"created_date\":\"2023-12-01T12:24:05.180Z\",\"modified_date\":\"2023-12-01T12:24:05.180Z\",\"id\":\"7e52743a-3015-44f2-b659-ddda5421b67e\",\"updated_date\":\"2023-12-01T12:24:05.180Z\"}]", sheetId: "#(SheetID)"}
    * method PATCH
    Then status 200
    And match response._index == '#string'
    And match response._version == '#number'
    And match response.result == 'updated'
    And match response._seq_no == '#number'

