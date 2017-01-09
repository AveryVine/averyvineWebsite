//Copyright 2017, Avery Vine, All rights reserved.

$(document).ready(function() {
  //adjust height of image to that of the parent card
  $('#gradesImage').height($('#grades').height() - $('#gradesHeader').height() - 16);
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

//increments the current tab on a given card
function changeTab(n, tabClass) {
  if (tabClass === "skillTab") showTab(tabIndex.skillTab += n, "skillTab");
  else showTab(tabIndex.workExperienceTab += n, "workExperienceTab");
}

//sets the visibility of all tabs on a given card
function showTab(n, tabClass) {
  var index;
  if (tabClass === "skillTab") index = tabIndex.skillTab;
  else index = tabIndex.workExperienceTab;
  var x = document.getElementsByClassName(tabClass);
  if (n > x.length) {index = 1}
  if (n < 1) {index = x.length}
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[index - 1].style.display = "block";
  if (tabClass === "skillTab") tabIndex.skillTab = index;
  else tabIndex.workExperienceTab = index;
}

var tabIndex = {"skillTab" : 1, "workExperienceTab" : 1};
//initialize visible tabs on skills card and work experience card
showTab(tabIndex.skillTab, "skillTab");
showTab(tabIndex.workExperienceTab, "workExperienceTab");
