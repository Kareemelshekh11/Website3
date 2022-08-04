var scrollBtn = document.querySelector(".totop");

window.onscroll=function(){
  if(window.pageYOffset>20){
    scrollBtn.style.display="block"
  }
  else{
    scrollBtn.style.display="none"
  }
}

scrollBtn.onclick=function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

var navBtn = document.querySelector(".mobile-nav-toggle");
var navm = document.querySelector("navbar-mobile");
var navx = document.querySelector("bi-x");


navBtn.onclick=function(){
  var element = document.getElementById("navbar");
  navBtn.classList.toggle("bi-x")
  element.classList.toggle("navbar-mobile");
}

$(document).ready(function(){
  $("mobile-nav-toggle").click(function(){
    $("navbar-mobile").slideToggle();
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




AOS.init();
new PureCounter();