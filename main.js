(()=>{"use strict";(function(){var e=document.querySelector(".slider"),t=Array.from(e.querySelectorAll(".slider__image")),n=e.querySelector(".slider__pagination"),r=document.querySelector("#tab-template").content;!function(e){for(var t=0;t<e.length;t++){var i=r.querySelector(".tab-item").cloneNode(!0);n.append(i)}}(t);var i=Array.from(e.querySelectorAll(".pagination__item")),o=i[0],l=t[0];u(o),s(l);var c,a,d=(c=o,7e3,a=i.indexOf(c),s(t[a],l),setInterval((function(){a===i.length&&(a=0),u(i[a],o),s(t[a],l),a++}),7e3));function u(e,t){e.style.fill="#00B2A0",t&&t!==e&&(t.style.fill="#FFFFFF"),o=e}function s(e,t){e.classList.remove("slider__image_hidden"),t&&t!==e&&t.classList.add("slider__image_hidden"),l=e}i.forEach((function(e,n){e.addEventListener("click",(function(e){return function(e,n){clearTimeout(d),u(e.target,o),s(t[n],l)}(e,n)}))}))})(),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))})();