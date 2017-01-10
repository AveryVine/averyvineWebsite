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
  switch(tabClass) {
    case "skillTab":
      showTab(tabIndex.skillTab += n, "skillTab");
      break;
    case "workExperienceTab":
      showTab(tabIndex.workExperienceTab += n, "workExperienceTab");
      break;
    case "appliedProjectsTab":
      showTab(tabIndex.appliedProjectsTab += n, "appliedProjectsTab");
      break;
    default:
      console.log("Error switching tabs");
  }
}

//sets the visibility of all tabs on a given card
function showTab(n, tabClass) {
  var index;
  switch(tabClass) {
    case "skillTab":
      index = tabIndex.skillTab;
      break;
    case "workExperienceTab":
      index = tabIndex.workExperienceTab;
      break;
    case "appliedProjectsTab":
      index = tabIndex.appliedProjectsTab;
      break;
    default:
      console.log("Error switching tabs");
  }
  var x = document.getElementsByClassName(tabClass);
  if (n > x.length) index = 1;
  if (n < 1) index = x.length;
  for (var i = 0; i < x.length; i++) x[i].style.display = "none";
  x[index - 1].style.display = "block";
  switch(tabClass) {
    case "skillTab":
      tabIndex.skillTab = index;
      break;
    case "workExperienceTab":
      tabIndex.workExperienceTab = index;
      break;
    case "appliedProjectsTab":
      tabIndex.appliedProjectsTab = index;
      break;
    default:
      console.log("Error switching tabs");
  }
}

var tabIndex = {"skillTab" : 1, "workExperienceTab" : 1, "appliedProjectsTab" : 1};
//initialize visible tabs on skills card and work experience card
showTab(tabIndex.skillTab, "skillTab");
showTab(tabIndex.workExperienceTab, "workExperienceTab");
showTab(tabIndex.appliedProjectsTab, "appliedProjectsTab");
