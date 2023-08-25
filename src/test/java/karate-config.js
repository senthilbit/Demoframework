function fn() {
  var config = {}
  var android = {}

   android["desiredConfig"] = {
     "app" : "C:/Users/sonalp/Downloads/UiDemo.apk",
     "newCommandTimeout" : 300,
     "platformVersion" : "9.0",
     "platformName" : "Android",
     "connectHardwareKeyboard" : true,
     "deviceName" : "emulator-5554",     "avd" : "Galaxy_Nexus_API_34",
     "automationName" : "UiAutomator2"
   }
  config = {

  		name : "Akshay" ,
  		tokenID : "fa100e7b3ed6a1f7203c4e370469c0dbdfb794bfbe74e1b547ae77bb2a12a1fd" ,
  		baseUrl : "https://gorest.co.in"

  };
  config["android"] = android

  var env = karate.env
  	karate.log('The value of env is : ', env);

  	if(env == 'qa'){

  		config.baseUrl = "https://gorest.co.in"

  	} else if(env == 'dev')
  	{
  		config.baseUrl = "https://gorest.co.in"
  	}else
  	{
  		config.baseUrl = "https://gorest.co.in"
  	}

  return config;
}