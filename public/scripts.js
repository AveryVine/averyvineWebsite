$(document).ready(function() {
  $('#gradesImage').height($('#grades').height());
});

function collapseNavBar(navBar) {
    var x = document.getElementById(navBar);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function changeTab(n, tabClass) {
  if (tabClass === "skillTab") showTab(tabIndex.skillTab += n, "skillTab");
  else showTab(tabIndex.workExperienceTab += n, "workExperienceTab");
}

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
showTab(tabIndex.skillTab, "skillTab");
showTab(tabIndex.workExperienceTab, "workExperienceTab");
