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
		document.getElementById("Date1").innerHTML=response2.Date1;
	       	document.getElementById("College1").innerHTML=response2.College1;
		document.getElementById("Date2").innerHTML=response2.Date2;
		document.getElementById("College2").innerHTML=response2.College2;
		document.getElementById("Majors1").innerHTML=response2.Major1;
		document.getElementById("Majors2").innerHTML=response2.Major2;
		document.getElementById("Majors3").innerHTML=response2.Minor1;
		document.getElementById("Work Experience1").innerHTML=response2.Job1
		document.getElementById("Work Experience2").innerHTML=response2.Job2;
	        document.getElementById("Skill").innerHTML=response2.Skill1+", "+ response2.Skill2+", "+response2.Skill3;
	        document.getElementById("Clubs").innerHTML=response2.Club1+", "+response2.Club2+", "+response2.Club3+", "+response2.Club4+", "+response2.Club5;
		});
		
var text = document.body.innerHTML;
// or element.textContent || element.innerText


        langAPI = document.getElementById("lang").value;
        data = "key="+keyAPI+"&text="+text+"&lang="+langAPI;
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);
    request.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var request = this.responseText;
             document.body.innerHTML= request;
        }
    }
});
