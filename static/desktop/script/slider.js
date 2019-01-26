"use strict";
window.addEventListener("load", function() {
  var btn = document.querySelectorAll('.but'), 
  three = document.querySelectorAll(".three")[0],
  btn2 = document.querySelectorAll('.button-prev, .button-next'),
  slider2 = document.querySelectorAll('.slider-window')[0],
  btnMain = document.querySelectorAll('.button-more-a')[0];

  var count1 = 0;
  var count2 = 0;
  var count3 = 2;
  btnMain.setAttribute("href", "http://178.128.250.128/news/" + count3);

  btn2[1].addEventListener('click', function() {
    if (count2 < 2) {
      count2 = count2 + 1;
      count3 = count3 - 1;
      btnMain.setAttribute("href", "http://178.128.250.128/news/" + count3);
      if (count2 == 2) {
        btn2[1].setAttribute('src', "../static/desktop/img/frontArrowEnd.svg");
      } else {
        btn2[0].setAttribute('src', "../static/desktop/img/backArrow.svg");
      }
      slider2.className = 'slider-window';
      slider2.classList.add('slide-' + count2);
    }
  })
  btn2[0].addEventListener('click', function() {
    if (count2 > 0) {
      count2 = count2 - 1;
      count3 = count3 + 1;
      btnMain.setAttribute("href", "http://178.128.250.128/news/" + count3);
      if (count2 == 0) {
        btn2[0].setAttribute('src', "../static/desktop/img/backArrowEnd.svg");
      } else {
        btn2[1].setAttribute('src', "../static/desktop/img/frontArrow.svg");
      }
      slider2.className = 'slider-window';
      slider2.classList.add('slide-' + count2);
    } 
  })
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', function() {
      btn[i].classList.add('but-1');
      if (i != count1) {
        btn[count1].classList.remove('but-1');  
      }
      three.className = 'three';
      three.classList.add('three-' + i);
      count1 = i;   
    });
 }
});