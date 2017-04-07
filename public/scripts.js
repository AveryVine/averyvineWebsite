//Copyright 2017, Avery Vine, All rights reserved.

$(document).ready(function() {
  //adjust height of image to that of the parent card
  $('#gradesImage').height($('#grades').height() - $('#gradesHeader').height() - 16);
  //adjust anchor heights due to navbar
  $(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  });

  //konami code stuff
  var konami = new Konami(function() {
    alert("What, did you expect this to do something useful?");
  })
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
    x[i].className = x[i].className.replace(" w3-blue-gray", "")
  }
  x = document.getElementsByClassName(tabName + "Button")
  for (i = 0; i < x.length; i++) {
    x[i].className += " w3-blue-gray"
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName + "Header").style.display = "block"
}
