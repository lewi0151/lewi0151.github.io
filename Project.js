function Init() {
    fadeDuration: 600;
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < 5; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
    
    	/*var keyAPI= "trnsl.1.1.20190311T054604Z.129c310cdc871e0d.34e1d905d9ed92739e3f50f56a8479f791e79363";
	 var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
	document.getElementById("translateButton").addEventListener('click', function(){
    	var request = new XMLHttpRequest();


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
});*/
