var slideIndex = 1;
showSlides(slideIndex);

function avancar(n){
  showSlides(slideIndex += n);
}
function reduzir(n){
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function whichButton(event) {
    if (event.keyCode == 37) {
        reduzir(-1);
    }
    if (event.keyCode == 39) {
        avancar(1);
    }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = slides.length} 
  if (n < 1) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}