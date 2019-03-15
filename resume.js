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
	        document.getElementById("Mail").innerHTML=response2.Mail;
	        document.getElementById("Objective").innerHTML=response2.Objective;
	       	document.getElementById("College").innerHTML=<a><a href="https://www.stthomas.edu"/>response2.College1</a>+response2.Date1+response2.College2+response2.Date2;
		document.getElementById("Majors").innerHTML=response2.Major1+response2.Major2+response2.Minor1;
		document.getElementById("Work Experience").innerHTML=response2.Job1+response2.Job2;
	        document.getElementById("Skill").innerHTML=response2.Skill1+response2.Skill2+response2.Skill3;
	        document.getElementById("Clubs").innerHTML=response2.Club1+response2.Club2+response2.Club3+response2.Club4+response2.Club5;
		});
		
