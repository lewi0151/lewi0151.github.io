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
	
    	var url= 'https://lewi0151.github.io/events.txt';
		var client=new jsonClient();
		client.get(url, function(response)
		{
			var response1=JSON.parse(response);
	        document.getElementById("Job1").innerHTML=response1.Job1+ ", " + response1.Date1;
	        document.getElementById("Job2").innerHTML=response1.Job2+ ", " + response1.Date2;
	       	document.getElementById("Course1").innerHTML=response1.Course1+", " + response1.Date3;
		    document.getElementById("Course2").innerHTML=response1.Course2+", " + response1.Date3;
		    document.getElementById("Course3").innerHTML=response1.Course3+", " + response1.Date3;
		    document.getElementById("Project1").innerHTML=response1.Project1+", " + response1.Date3;
	        document.getElementById("Project2").innerHTML=response1.Project2+", " + response1.Date3;
		});



function translate()
{
    
    	var keyAPI= "trnsl.1.1.20190311T054604Z.129c310cdc871e0d.34e1d905d9ed92739e3f50f56a8479f791e79363";
	 var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
	document.getElementById("translate2").addEventListener('click', function(){
    	var request = new XMLHttpRequest();
        textAPI = document.getElementById("all").value;
        langAPI = document.getElementById("lang").value;
        data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);
    request.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var request = this.responseText;
            document.getElementById("json").innerHTML = request;
            var json = JSON.parse(request);
            if(json.code == 200) {
                document.getElementById("output").innerHTML = json.text[0];
            }
            else {
                document.getElementById("output").innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, 
						    false);
}



