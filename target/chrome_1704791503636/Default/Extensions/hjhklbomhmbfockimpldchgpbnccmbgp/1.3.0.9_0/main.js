'use strict';(function(b){var c=new SEF.utils.Logger("MAIN");b=(window.browser||window.chrome).runtime.getManifest();SEF.Initialize({productName:b.short_name,productVersion:b.version,partnerKey:"785e8a8ddd1940c689e4b058575be1f6de659fc65b27433282c30437bd562645"}).then(()=>{c.info(`SEF ${SEF.version} initialized succesfully`)}).catch(a=>{a=`SEF init failed: ${a}`;c.error(a);SEF.utils.OpState.Malfunctioned(a)})})(this);
