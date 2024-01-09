function fn(){
	
	var config = {

		baseUrl : "https://dev-xtables.thedigitalgroup.com"
		
	};
	
	var env = karate.env
	karate.log('The value of env is : ', env);

	 if (!env) env = 'dev';
      var config = { env: env }
	
	if(env == 'qa'){
		
		config.baseUrl = "https://dev-xtables.thedigitalgroup.com"
		
	} else if(env == 'dev')
	{
		config.baseUrl = "https://dev-xtables.thedigitalgroup.com"
	}else
	{
		config.baseUrl = "https://dev-xtables.thedigitalgroup.com"
	}

	karate.configure('connectTimeout', 6000);
	karate.configure('readTimeout', 6000);
	
	return config;
}
