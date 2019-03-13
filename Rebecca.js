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
	        document.getElementById("Job1").innerHTML = response1.Job1 + ", " + response1.Date1;
	        document.getElementById("Job2").innerHTML=response1.Job2+ ", " + response1.Date2;
	       	document.getElementById("Course1").innerHTML=response1.Course1+", " + response1.Date3;
		    document.getElementById("Course2").innerHTML=response1.Course2+", " + response1.Date3;
		    document.getElementById("Course3").innerHTML=response1.Course3+", " + response1.Date3;
		    document.getElementById("Project1").innerHTML=response1.Project1+", " + response1.Date3;
	        document.getElementById("Project2").innerHTML=response1.Project2+", " + response1.Date3;
		});

        var url2= 'https://lewi0151.github.io/Resume.txt';
		var client2=new jsonClient();
		client2.get(url2, function(response)
		{
			var response2=JSON.parse(response);
	        document.getElementById("Mail").innerHTML =response2.Mail;
	        document.getElementById("Objective").innerHTML=response2.Objective;
	       	document.getElementById("College").innerHTML=response2.CollegeEducation;
		    document.getElementById("Work Experience").innerHTML=response2.WorkExperience;
	        document.getElementById("Skill").innerHTML=response2.Skills3;
			
	        document.getElementById("Clubs").innerHTML=response2.CollegeExperienceUST;
		});

function translate()
{
    
    var key= "trnsl.1.1.20190311T054604Z.129c310cdc871e0d.34e1d905d9ed92739e3f50f56a8479f791e79363";
    var url= "https://translate.yandex.net/"+key+"/v1.5/tr.json/translate";
    var text="https://lewi0151.github.io/RebeccaLewis";
    var lang="ru";
    var format="html";

  var langreq = new XMLHttpRequest();
  langreq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

 function Lightbox()  {
    var image = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  
      if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast')
        .find('a').on('click', function(event) {
          if ($(this).attr('target') !== undefined) {
            window.open($(this).attr('href'), $(this).attr('target'));
          } else {
            location.href = $(this).attr('href');
          }
        })
    }
};
   function LightboxNeighboringImages() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };
  

