//Copyright 2017, Avery Vine, All rights reserved.

$(document).ready(function() {
  //adjust height of image to that of the parent card
  $('#gradesImage').height($('#grades').height() - $('#gradesHeader').height() - 16);
  //adjust anchor heights due to navbar
  $(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  });
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
      showTab(tabIndex.skillTab.index += n, "skillTab");
      break;
    case "workExperienceTab":
      showTab(tabIndex.workExperienceTab.index += n, "workExperienceTab");
      break;
    case "appliedProjectsTab":
      showTab(tabIndex.appliedProjectsTab.index += n, "appliedProjectsTab");
      break;
    default:
      console.log("Error switching tabs");
  }
}

//sets the visibility of all tabs on a given card
function showTab(n, tabClass) {
  var index;
  var tabs = document.getElementsByClassName(tabClass);
  var title;

  if (tabClass == "skillTab") {
    index = tabIndex.skillTab.index;
    title = $("#skillsTitle");
  }
  else if (tabClass == "workExperienceTab") {
    index = tabIndex.workExperienceTab.index;
    title = $("#workExperienceTitle");
  }
  else if (tabClass == "appliedProjectsTab") {
    index = tabIndex.appliedProjectsTab.index;
    title = $("#appliedProjectsTitle");
  }
  else console.log("Error switching tabs");

  if (n > tabs.length) index = 1;
  if (n < 1) index = tabs.length;
  for (var i = 0; i < tabs.length; i++) tabs[i].style.display = "none";
  tabs[index - 1].style.display = "block";

  if (tabClass == "skillTab") {
    tabIndex.skillTab.index = index;
    if (index == 1) title.text(tabIndex.skillTab.title1);
    else if (index == 2) title.text(tabIndex.skillTab.title2);
    else if (index == 3) title.text(tabIndex.skillTab.title3);
    else console.log("Error switching tabs");
  }
  else if (tabClass == "workExperienceTab") {
    tabIndex.workExperienceTab.index = index;
    if (index == 1) title.text(tabIndex.workExperienceTab.title1);
    else if (index == 2) title.text(tabIndex.workExperienceTab.title2);
    else if (index == 3) title.text(tabIndex.workExperienceTab.title3);
    else console.log("Error switching tabs");
  }
  else if (tabClass == "appliedProjectsTab") {
    tabIndex.appliedProjectsTab.index = index;
    if (index == 1) title.text(tabIndex.appliedProjectsTab.title1);
    else if (index == 2) title.text(tabIndex.appliedProjectsTab.title2);
    else console.log("Error switching tabs");
  }
  else console.log("Error switching tabs");
}

var tabIndex = {
  "skillTab" : {
    "index" : 1,
    "title1" : "Technical Skills",
    "title2" : "Communcation Skills",
    "title3" : "Problem Solving Skills"
  }, "workExperienceTab" : {
    "index" : 1,
    "title1" : "Piano Teacher",
    "title2" : "Undergraduate Research Assistant",
    "title3" : "Sandwich Artist"
  }, "appliedProjectsTab" : {
    "index" : 1,
    "title1" : "Two Buttons - iOS Application",
    "title2" : "Personal Website"
  }
};

//initialize visible tabs on skills card and work experience card
showTab(tabIndex.skillTab.index, "skillTab");
showTab(tabIndex.workExperienceTab.index, "workExperienceTab");
showTab(tabIndex.appliedProjectsTab.index, "appliedProjectsTab");
