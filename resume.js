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
		var client2=new jsonClient();
		client2.get(url, function(response)
		{
			var response2=JSON.parse(response);
	        document.getElementById("Mail").innerHTML=response2.Mail;
	        document.getElementById("Objective").innerHTML=response2.Objective;
	       	document.getElementById("College").innerHTML=response2.CollegeEducation;
		    document.getElementById("Work Experience").innerHTML=response2.WorkExperience;
	        document.getElementById("Skill").innerHTML=response2.Skills3;
	        document.getElementById("Clubs").innerHTML=response2.CollegeExperienceUST;
		});
