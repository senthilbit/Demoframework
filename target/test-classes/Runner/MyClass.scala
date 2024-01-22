package Runner

class MyClass {
  def printClassName(): Unit = {
    val className: String = this.getClass.getSimpleName
    println(s"Class name: $className")
  }
}

