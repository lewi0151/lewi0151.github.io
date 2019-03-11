function Init() {
    fadeDuration: 600;
}
    
  
    var jsonreq=new XMLHttpRequest();
  var url= "events.txt";
        jsonreq.onreadystatechange =function() {if (jsonreq.readyState ==4&& jsonreq.status ==200) {
            var jsonarr=JSON.parse(this.responseText); 
            getJson(jsonarr);
        }
                                               }
    jsonreq.open("GET", url, true);
jsonreq.send();
    
   function getJson(jsonarr)
    {
        var out="";
        var i;
        for(i=0; i<jsonarr; i++)
        {
            out +='<a href="'+jsonarr[i].url +'">'+jsonarr[i].display +'</a><br>';
        }
        document.getElementById("events").innerHTML=out;
    }
function translate()
{
    
    var key= "trnsl.1.1.20190311T054604Z.129c310cdc871e0d.34e1d905d9ed92739e3f50f56a8479f791e79363";
    var url= "https://translate.yandex.net/"+<key>+"/v1.5/tr.json/translate";
    var text=<https://lewi0151.github.io/RebeccaLewis>;
    var lang=<ru>;
    var format=<html>;

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
  

