function Init() {
    fadeDuration: 600;
}
    
  
   var jsonClient = function()
       {

			this.get=function(aUrl,aCallback)
			{
				var jsonreq=new XMLHttpRequest();
				jsonreq.onreadystatechange =function()
				{
					if (jsonreq.readyState ==4&& jsonreq.status ==200)
					{
        		    			aCallback(jsonreq.responseText);
        				}
        			}
    			jsonreq.open("GET", url, true);
			jsonreq.send(null);
			}
	}
	
    	var url= 'https://lewi0151.github.io/Resume.txt';
		var client=new jsonClient();
		client.get(url, function(response)
		{
		var response2=JSON.parse(response);
	        document.getElementById("Mail").innerHTML=response2[0].Mail;
	        document.getElementById("Objective").innerHTML=response2[0].Objective;
	       	document.getElementById("College").innerHTML=response2[0].College1+response2[0].Date1+response2[0].College2+response2[0].Date2;
		document.getElementById("Majors").innerHTML=response2[0].Major1+response2[0].Major2+response2[0].Minor1;
		document.getElementById("Work Experience").innerHTML=response2[0].Job1+response2[0].Job2;
	        document.getElementById("Skill").innerHTML=response2[0].Skill1+response2[0].Skill2+response2[0].Skill3;
	        document.getElementById("Clubs").innerHTML=response2[0].Club1+response2[0].Club2+response2[0].Club3+response2[0].Club4+response2[0].Club5;
		});
		
