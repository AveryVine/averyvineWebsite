//Copyright 2017, Avery Vine, All rights reserved.

$(document).ready(function() {
  //adjust height of image to that of the parent card
  $('#gradesImage').height($('#grades').height() - $('#gradesHeader').height() - 16);
  //adjust anchor heights due to navbar
  $(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  });

  //konami code stuff
  var konamiCounter = 0;
  var konamiMessage = [
    "If you keep doing this, things will end badly...",
    "You're playing with fire...",
    "This is not gonna end well for you...",
    "Shhh, be vewy, vewy, qwiet, we're hunting wabbits!",
    "These are not the messages you're looking for..."
  ]
  var konami = new Konami(function() {
    if (konamiCounter == 0) {
      konamiCounter++;
      alert("What, did you expect this to do something useful? P.S. I wouldn't do it again if I were you...");
    }
    else if (konamiCounter == 1) {
      konamiCounter++;
      alert(konamiMessage[konamiCounter - 2]);
    }
    else {
      konamiCounter = randomNumber()
      if (konamiCounter == 2) {
        window.open("konami/rickroll");
        konamiCounter = 0;
      }
      else {
        alert(konamiMessage[konamiCounter - 3])
      }
    }
  })

  function randomNumber() {
    return Math.floor(Math.random() * (konamiMessage.length + 1)) + 2;
  }
});

//toggles the visibility of the dropdown menu nav bar
function collapseNavBar(navBar) {
    var x = document.getElementById(navBar);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function openTab(tabClass, tabName) {
  var i;
  var x = document.getElementsByClassName(tabClass);
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  x = document.getElementsByClassName(tabClass + "Button")
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace("w3-teal", "w3-blue-gray")
  }
  x = document.getElementById(tabName + "Button")
  x.className = x.className.replace("w3-blue-gray", "w3-teal")
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName + "Header").style.display = "block"
}
