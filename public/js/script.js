//Copyright 2018, Avery Vine, All rights reserved.

$(document).ready(function () {
  //konami code stuff
  var konamiCounter = 0;
  var konamiMessage = [
    "If you keep doing this, things will end badly...",
    "You're playing with fire...",
    "This is not gonna end well for you...",
    "Shhh, be vewy, vewy, qwiet, we're hunting people who keep entering the Konami code!",
    "These are not the Konami droids you are looking for..."
  ]
  var konami = new Konami(function () {
    if (konamiCounter == 0) {
      konamiCounter++;
      alert("What, did you expect this to do something useful? P.S. I wouldn't do it again if I were you...");
    } else if (konamiCounter == 1) {
      konamiCounter++;
      alert(konamiMessage[konamiCounter - 2]);
    } else if (randomNumber(0, 7) == 0) {
      window.open("konami/rickroll");
      konamiCounter = 0;
    } else {
      alert(konamiMessage[randomNumber(0, konamiMessage.length - 1)])
    }
  })

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //override default behaviour for navbar links
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var offset = parseInt($(".navbar").css('height')) + 10;
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - offset
      }, 800);
    }
  });

  //add modal image code to all relevant images
  $(".figure").each(function() {
    $(this).on("click", function() {
      var modal = $("#modal-display");
      var modalImg = $("#modal-content");
      var modalTxt = $("#modal-caption");
      var img = $(this).find(".content-image");
      var imgSrc = img.attr("src");
      var imgTxt = $(this).find(".figure-caption").text();

      modalImg.attr("src", imgSrc);
      modalTxt.text(imgTxt);
      modal.show();
      modal.on("click", function() {
        modal.hide();
      });

    });
  });
});

//ensures that content only appears when fully loaded
window.onload = function () {
  $(".loading-donut").fadeOut(1000, function() {
    $("#body-container").fadeIn(1000);

    //animations for fade-in on scroll
    window.sr = ScrollReveal({
      reset: true,
      mobile: false,
      scale: 0.7,
      viewOffset: {
        top: 60,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
    sr.reveal('.content-block', {
      duration: 1000
    });
    sr.reveal('.figure', {
      duration: 1000
    });
    sr.reveal('.card', {
      duration: 1000
    });
  });
}