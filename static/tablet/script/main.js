"use strict";
window.onload = function () {
	var btn = document.querySelectorAll('.slider1-but'),
	slide = document.querySelectorAll('.slide-window-1')[0],
	slide1 = document.querySelectorAll('.slider1-slide'),
	full_w, w, res, res1, count1 = 0;

	var slide2 = document.querySelectorAll('.slide2-window-wrap')[0];

	full_w = window.screen.availWidth;

	// Тестим изменение стилей
	var css = ".hidden-menu-ticker:checked ~ .btn-menu { left: Zpx }\
 	.hidden-menu {position: fixed; width: Gpx; left: -Qpx;}".replace(new RegExp("G",'g'), full_w);
 	css = css.replace("Q", full_w + 200);
 	css = css.replace("Z", full_w - 150);

	var style = document.createElement('style');

	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
	//Конец, всё работает)))

	window.onscroll = function() {
		$('.hidden-menu-ticker').prop('checked', false);
	}

	w = full_w - 100;

	for (let t = 0; t < slide1.length; t++) {
		if (full_w >= 1024) {
			slide1[t].style.width = ('924px');	
		} else {
			slide1[t].style.width = (w + 'px');
		}
	}

	//Это можно как-то оптимизировать добавив всё в одно
	// место, тем самым избежав дублирования кода.
	window.addEventListener("orientationchange", function() {
		full_w = window.screen.availWidth;
		w = full_w - 100;
		for (let t = 0; t < slide1.length; t++) {
			if (full_w >= 1024) {
				slide1[t].style.width = ('924px');	
			} else {
				slide1[t].style.width = (w + 'px');
			}
		}
	}, false);

	var count = 0;

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('mouseover', function() {
			if (full_w >= 1024) {
				res ='translateX(Z)'.replace('Z',(-(924 * i)) + "px");
			} else {
				res ='translateX(Z)'.replace('Z',(-(w * i)) + "px");
			}	
			slide.style.transform = res;
			btn[i].classList.add('but-next');
			if (i != count) {
				btn[count].classList.remove('but-next');  
			}
			slide.className = 'slide-window-1-wrap';
			slide.classList.add('next-' + i);
			count = i;
		});
	}

	$(function() { 
       $(".slide2-window-wrap").swipe({
			swipeRight:function(event, direction) {
			    slide2.className = 'slide2-window-wrap';
			    if (count1 < 0) {
				    count1 = count1 + 460;
				    res1 = 'translateX(Z)'.replace('Z', (count1 + 'px'));
				    slide2.style.transform = res1;
				    slide2.classList.add('next-2');
				    threshold:0
			    }
			},
			swipeLeft:function(event, direction) {
			    slide2.className = 'slide2-window-wrap';
			    if (count1 > (-460 * 3)) {
				    count1 = count1 - 460;
				    res1 = 'translateX(Z)'.replace('Z', (count1 + 'px'));
				    slide2.style.transform = res1;
				    slide2.classList.add('next-2');
				    threshold:0
			    }
			},
      });
  	});
	
}