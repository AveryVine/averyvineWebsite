!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$(document).ready(function(){var e=0,t=["What, did you expect this to do something useful? P.S. I wouldn't do it again if I were you...","If you keep doing this, things will end badly...","You're playing with fire...","This is not gonna end well for you..."];new Konami(function(){e<2?(alert(t[e]),e++):0==n(0,t.length-2)?(window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),e=0):alert(t[n(2,t.length-1)])});r(),$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=parseInt($(".navbar").css("height"))+10;$("html, body").animate({scrollTop:$(this.hash).offset().top-t},800)}}),$(".figure").each(function(){$(this).on("click",function(){var e=$("#modal-display"),t=$("#modal-content"),n=$("#modal-caption"),o=$(this).find(".content-image").attr("src"),r=$(this).find(".figure-caption").text();t.attr("src",o),n.text(r),e.show(),e.on("click",function(){e.hide()})})});const o=["a co-op student","an application developer","a black belt in karate","a mobile developer","an avid musician","a full stack developer","a video game enthusiast"],i=new TypeIt("#header-typeit",{strings:[],breakLines:!0,loop:!0,autoStart:!1,startDelay:2e3,afterString:function(){i.pause(2e3).delete().type(o[Math.floor(Math.random()*o.length)])}});i.type(o[Math.floor(Math.random()*o.length)])});let n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var o=1;let r=function(){for(var e=[],t=0,n=1;$("#project"+n).length;n++)n>=o&&n<o+3&&e.push($("#project"+n).attr("id")),t++;for(n=1;$("#project"+n).length;n++){$("#project"+n).fadeOut(600,function(){e.includes($(this).attr("id"))&&$(this).fadeIn(600)})}o=(o+3-1)%t+1};window.onload=function(){$(".loading-donut").fadeOut(1e3,function(){$("#body-container").fadeIn(1e3);let e=0;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e=-120),window.sr=ScrollReveal({reset:!0,mobile:!0,scale:.7,viewOffset:{top:60,right:0,bottom:e,left:0}}),sr.reveal(".content-block",{duration:1e3}),sr.reveal(".figure",{duration:1e3}),sr.reveal(".card",{duration:1e3})})},window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=e/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;$("#progress-bar").css("width",t+"%"),0==e&&$(".progress-container").is(":visible")?$(".progress-container").fadeOut():$(".progress-container").is(":visible")||$(".progress-container").fadeIn()}}]);