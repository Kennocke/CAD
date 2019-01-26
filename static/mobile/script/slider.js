"use strict";
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";


window.addEventListener("load", function() {

  var btn = document.querySelectorAll('.year'), 
  three = document.querySelectorAll(".three")[0],
  btn2 = document.querySelectorAll('.button-prev, .button-next'),
  slider2 = document.querySelectorAll('.slider-window')[0],
  plus = document.querySelectorAll(".slider")[0],
  icon = document.querySelectorAll(".slider-icons")[0]
  var t = 0;

  $(function() { 
       $(".sliderWrapper").swipe({
      swipeRight:function(event, direction) {
      	if (t > 0) {
      		three.className = 'three';
            plus.className = 'slider';
            icon.className = 'slider-icons';
            btn[t].style.color = '#e3e3e3';
            btn[t].style.fontSize = '30px';
            t = t - 1;
            btn[t].style.fontSize = '32px';
            btn[t].style.color = '#ffa900';
            plus.classList.add('plus-' + t);
            three.classList.add('three-' + t);
            icon.classList.add('icon-swap-' + t);
            threshold:0
      	}
       },
      swipeLeft:function(event, direction) {
      	if (t < 4) {
      		three.className = 'three';
            plus.className = 'slider';
            icon.className = 'slider-icons';
            btn[t].style.color = '#e3e3e3';
            btn[t].style.fontSize = '30px';
            t = t + 1;
            btn[t].style.fontSize = '32px';
            btn[t].style.color = '#ffa900';
            plus.classList.add('plus-' + t);
            three.classList.add('three-' + t);
            icon.classList.add('icon-swap-' + t);
            threshold:0
      	}
       }
      });
  });


 //  var count1 = 0;

 //  for (let i = 0; i < btn.length; i++) {
 //    btn[i].addEventListener('mouseover', function() {
 //      btn[i].classList.add('but-1');
 //      if (i != count1) {
 //        btn[count1].classList.remove('but-1');  
 //      }
 //      three.className = 'three';
 //      three.classList.add('three-' + i);
 //      count1 = i;   
 //    });
 // }
});