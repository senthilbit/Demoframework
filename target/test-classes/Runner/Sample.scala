package Runner




object MethodInvoker {
    def invokeMethod(obj: AnyRef, methodName: String): Option[String] = {
      try {
        val method = obj.getClass.getMethod(methodName)
        val result = method.invoke(obj)
        Some(result.toString)
      } catch {
        case _: NoSuchMethodException | _: IllegalAccessException => None
      }
    }

    def main(args: Array[String]): Unit = {
      val myObject = new Class

      val excelFilePath = "./src/test/java/Data/Load_config.xlsx"
      val sheetName = "Sheet1"

      // Replace this with your logic to read method names from Excel
      val stimulation = ExcelReader.readExcelCell(excelFilePath, sheetName, 1, 3)
     println(s"Result of = $stimulation")
      // Invoke methods dynamically



      invokeMethod(myObject, stimulation) match {
       case Some(result) => println(s"Result of $stimulation: $result")
        case None => println(s"Method $stimulation not found or inaccessible.")

      }
    }




}
