!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("DOMContentLoaded",function(){"use strict";let e=n(1),t=n(2),o=n(3),l=n(4),s=n(5),c=n(6);e(),t(),o(),l(),s(),c()})},function(e,t){e.exports=function(){let e=document.querySelectorAll(".glazing_price_btn"),t=document.querySelector(".popup_calc"),n=document.querySelector(".popup_calc_close");for(let o=0;o<e.length;o++)e[o].addEventListener("click",function(){t.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"}),n.addEventListener("click",function(){t.style.display="none",e[o].classList.remove("more-splash"),document.body.style.overflow=""});let o=document.querySelectorAll(".icons"),l=document.querySelectorAll(".big_icons"),s=document.querySelector(".balcon_icons");function c(e){for(let t=e;t<l.length;t++)l[t].classList.remove("show"),l[t].classList.add("hide")}function i(e){l[e].classList.contains("hide")&&(l[e].classList.remove("hide"),l[e].classList.add("show"))}c(1),s.addEventListener("click",function(e){let t=e.target;if(t&&t.classList.contains("icons"))for(let e=0;e<o.length;e++){if(t==o[e]){o[e].classList.add("iconsA"),c(0),i(e);break}o[e].classList.remove("iconsA")}});let r=document.getElementById("width"),a=document.getElementById("height");r.addEventListener("input",function(){this.value=this.value.replace(/\D/,"")}),a.addEventListener("input",function(){this.value=this.value.replace(/\D/,"")});let d=document.querySelector(".popup_calc_button"),u=document.querySelector(".popup_calc_profile"),p=document.querySelector(".popup_calc_profile_close");d.addEventListener("click",function(){u.style.display="block",t.style.display="none",t.classList.remove("more-splash"),this.classList.add("more-splash"),document.body.style.overflow="hidden"}),p.addEventListener("click",function(){u.style.display="none",d.classList.remove("more-splash"),t.style.display="none",t.classList.remove("more-splash"),document.body.style.overflow=""});let y=document.querySelector(".popup_calc_profile_button"),f=document.querySelector(".popup_calc_end"),m=document.querySelector(".popup_calc_end_close");y.addEventListener("click",function(){f.style.display="block",u.style.display="none",d.classList.remove("more-splash"),this.classList.add("more-splash"),document.body.style.overflow="hidden"}),m.addEventListener("click",function(){f.style.display="none",y.classList.remove("more-splash"),t.style.display="none",t.classList.remove("more-splash"),document.body.style.overflow=""});let h="Отправка",v="Отправлено!",L="Ошибка...",g=document.getElementsByTagName("form"),_=document.querySelectorAll(".big_icons"),b=document.querySelector(".popup_calc_profile_content select"),k=document.querySelectorAll(".checkbox-custom"),S=document.createElement("div"),q=new FormData,E=document.getElementsByName("user_phone");for(let e=0;e<E.length;e++)E[e].addEventListener("input",function(){this.value=this.value.replace(/\D/,"")});k[0].addEventListener("click",function(){k[1].checked,q.append("Стиль остекленения: ","Cold")}),k[1].addEventListener("click",function(){k[0].checked,q.append("Стиль остекленения: ","Warm")}),S.classList.add("status"),d.addEventListener("click",function(){q.append(r.getAttribute("placeholder"),r.value),q.append(a.getAttribute("placeholder"),a.value);for(let e=0;e<_.length;e++)q.append("Type of window: ",_[e].id)}),y.addEventListener("click",function(){q.append(b.getAttribute("id"),b.value)});for(let e=0;e<g.length;e++)g[e].addEventListener("submit",function(t){t.preventDefault(),g[e].appendChild(S);let n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-type","application/json; charset=utf-8");let o=g[e].querySelectorAll(".form_input");for(let e=0;e<o.length;e++)q.append(o[e].getAttribute("name"),o[e].value);let l={};q.forEach(function(e,t){l[t]=e});let s=JSON.stringify(l);n.send(s),n.addEventListener("readystatechange",function(){n.readyState<4?S.innerHTML=h:4===n.readyState&&200==n.status?S.innerHTML=v:S.innerHTML=L});for(let e=0;e<o.length;e++)o[e].value=""})}},function(e,t){e.exports=function(){setTimeout(function(){document.querySelector(".popup").style.display="block"},6e4)}},function(e,t){e.exports=function(){let e=document.querySelector(".header_btn"),t=document.querySelector(".popup_engineer"),n=document.querySelector(".overlay");e.addEventListener("click",function(){t.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"}),n.addEventListener("click",function(n){n.target.closest(".popup_form")||(t.style.display="none",e.classList.remove("more-splash"),document.body.style.overflow="")});let o=document.querySelectorAll(".phone_link"),l=document.querySelector(".popup"),s=document.querySelector(".over");for(let e=0;e<o.length;e++)o[e].addEventListener("click",function(){l.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"}),s.addEventListener("click",function(t){t.target.closest(".popup_form")||(l.style.display="none",o[e].classList.remove("more-splash"),document.body.style.overflow="")})}},function(e,t){e.exports=function(){let e=document.querySelectorAll(".our_works"),t=document.createElement("div"),n=document.body.appendChild(t);t.classList.add("overlayIcons");for(let t=0;t<e.length;t++)e[t].addEventListener("click",function(o){o.preventDefault(),n.style.display="block",e[t].src="img/our_works/big_img/"+(t+1)+".png",e[t].style.display="block",this.classList.add("forIcons")}),n.addEventListener("click",function(){n.style.display="none",e[t].style.display="none",e[t].classList.remove("forIcons"),e[t].src="img/our_works/"+(t+1)+".png",e[t].style.display="block"})}},function(e,t){e.exports=function(){let e=document.querySelectorAll(".glazing_block"),t=document.querySelectorAll(".link"),n=document.querySelectorAll(".image"),o=document.querySelector(".glazing_slider"),l=document.getElementsByName("tree");function s(e){for(let t=e;t<l.length;t++)l[t].classList.remove("show"),l[t].classList.add("hide")}function c(e){l[e].classList.contains("hide")&&(l[e].classList.remove("hide"),l[e].classList.add("show"))}s(1),o.addEventListener("click",function(o){let l=o.target;if(l&&l.classList.contains("glazing_block")||l.classList.contains("link")||l.classList.contains("image"))for(let o=0;o<e.length;o++){if(l==e[o]||l==t[o]||l==n[o]){t[o].classList.add("active"),s(0),c(o);break}t[o].classList.remove("active")}});let i=document.querySelectorAll(".decor_link"),r=document.querySelector(".decoration_slider"),a=document.querySelectorAll(".d_link"),d=document.querySelectorAll(".decoration_item"),u=document.querySelectorAll(".decor");function p(e){for(let t=e;t<u.length;t++)u[t].classList.remove("show"),u[t].classList.add("hide")}function y(e){u[e].classList.contains("hide")&&(u[e].classList.remove("hide"),u[e].classList.add("show"))}p(1),r.addEventListener("click",function(e){let t=e.target;if(t&&t.classList.contains("decor_link")||t.classList.contains("d_link")||t.classList.contains("decoration_item"))for(let e=0;e<i.length;e++){if(t==i[e]||t==a[e]||t==d[e]){a[e].classList.add("after_click"),p(0),y(e);break}a[e].classList.remove("after_click")}})}},function(e,t){e.exports=function(){!function(e,t){let n=document.getElementById(e),o=n.querySelector(".days"),l=n.querySelector(".hours"),s=n.querySelector(".minutes"),c=n.querySelector(".seconds"),i=setInterval(function(){let e=function(e){let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),l=Math.floor(t/36e5%60),s=Math.floor(t/864e5);return s<10&&(s=`0${s}`),l<10&&(l=`0${l}`),o<10&&(o=`0${o}`),n<10&&(n=`0${n}`),{total:t,days:s,hours:l,minutes:o,seconds:n}}(t);o.textContent=e.days,l.textContent=e.hours,s.textContent=e.minutes,c.textContent=e.seconds,e.total<=0&&(clearInterval(i),o.textContent="00",l.textContent="00",s.textContent="00",c.textContent="00")},1e3)}("timer","2019-07-04 00:00:00")}}]);