"use strict";
        
function changeHeader(event, name) {
    var tabs = document.querySelectorAll(".tab");
    var buttons = document.querySelectorAll("button");

    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
        buttons[i].classList.remove("selected");
    }
    
    document.getElementById(name).style.display = "block";
    event.currentTarget.classList.add("selected");


    setTimeout(function(){
        var tabs = document.querySelectorAll(".tab");
        for(var x of tabs){
            x.classList.remove("tabAnimation")
        } 
          
        document.getElementById(name).classList.add("tabAnimation");   
    }, 100)
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      600: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowSlideeNext: true,
          allowSlideePrev: true
      },
      1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
          allowSlideeNext: false,
          allowSlideePrev: false
      }
  }
});