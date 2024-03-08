Feature:
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
    * def randomNumber1 = utility.getRandomNumber(1)
    * print randomNumber
    * def random = "Workbook" + (randomNumber)
    * def randomSheetName = "Sheet" + (randomNumber)
    * def randomColumnName = "Column " + (randomNumber1)
    * print random
    * print randomName

@SheetApi
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

  #Insert Column at Index
  Given path 'elasticsearch/sheet/columnAtIndex'
  * header Accept = 'application/json'
  * header Cookie =  testcookie
  And request {"id":"#(SheetID)","index":"sheet","colIndex":"2","newColumn":[{"columnElasticid":"e6bb214f-036d-4bdf-a586-05a03ef65595_es","field":"Column6","headerName":"Column 6","colId":"Column 6","width":300,"minWidth":50,"description":"Column at right","columnType":"local","resizable":true,"editable":true,"deleteable":true}]}
  When method Put
  Then status 200
  * def sheetID = response._id
  * match sheetID == SheetID
  And match response._index == '#present'
  And match response._version == '#present'
  And match response.result == 'updated'
  And match response._seq_no == '#number'




  #Update Column
  Given path '/elasticsearch/sheet/updateColumn'
  * header Accept = 'application/json'
  * header Cookie =  testcookie
  And request {"id":"#(sheetID)","sheet_identifier":"93a29678-c41a-4fd1-b668-0f89e226931f","columnElasticid":"e6bb214f-036d-4bdf-a586-05a03ef65595_es","updatedColumn":{"columnElasticid":"e6bb214f-036d-4bdf-a586-05a03ef65595_es","field":"#(randomColumnName)","headerName":"#(randomColumnName)","colId":"#(randomColumnName)","width":300,"minWidth":50,"description":"Column at right","columnType":"local","resizable":true,"editable":true,"deleteable":true,"name":"Column 8","cellDataType":"false","cellEditor":"agTextCellEditor"}}
  When method Put
  Then status 200
  * def sheet = response._id
  * match sheet == SheetID
  And match response._index == '#present'
  And match response._version == '#present'
  And match response.result == 'updated'
  And match response._seq_no == '#number'




   #Move Column
  Given path '/elasticsearch/sheet/moveColumn'
  * header Accept = 'application/json'
  * header Cookie =  testcookie
  And request {"sheetid":"#(sheetID)","index":"sheet","column":{"headerName":"#(randomColumnName)","cellDataType":"false","resizable":true,"editable":true,"description":"Column at right","columnType":"local","columnElasticid":"e6bb214f-036d-4bdf-a586-05a03ef65595_es","field":"#(randomColumnName)","deleteable":true,"width":300,"name":"#(randomColumnName)","cellEditor":"agTextCellEditor","colId":"#(randomColumnName)","suppressMovable":false,"suppressDragLeaveHidesColumns":true,"enablePivot":false,"sortable":false},"currentIndex":2,"newIndex":3}
  When method PATCH
  Then status 200
  * def id = response._id
  * match id == SheetID
  And match response._index == '#present'
  And match response._version == '#present'
  And match response.result == 'updated'
  And match response._seq_no == '#number'






