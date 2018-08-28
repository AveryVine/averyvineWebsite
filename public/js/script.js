$(document).ready(function () {
  //konami code stuff
  var konamiCounter = 0;
  var konamiMessage = [
    "What, did you expect this to do something useful? P.S. I wouldn't do it again if I were you...",
    "If you keep doing this, things will end badly...",
    "You're playing with fire...",
    "This is not gonna end well for you...",
  ];
  var konami = new Konami(function () {
    if (konamiCounter < 2) {
      alert(konamiMessage[konamiCounter]);
      konamiCounter++;
    } else if (randomNumber(0, konamiMessage.length - 2) == 0) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      konamiCounter = 0;
    } else {
      alert(konamiMessage[randomNumber(2, konamiMessage.length - 1)]);
    }
  });

  loadProjects();

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
  $(".figure").each(function () {
    $(this).on("click", function () {
      var modal = $("#modal-display");
      var modalImg = $("#modal-content");
      var modalTxt = $("#modal-caption");
      var img = $(this).find(".content-image");
      var imgSrc = img.attr("src");
      var imgTxt = $(this).find(".figure-caption").text();

      modalImg.attr("src", imgSrc);
      modalTxt.text(imgTxt);
      modal.show();
      modal.on("click", function () {
        modal.hide();
      });

    });
  });

  //set up typeit
  const typeitPhrases = [
    'a co-op student',
    'an application developer',
    'a black belt in karate',
    'a mobile developer',
    'an avid musician',
    'a full stack developer',
    'a video game enthusiast'
  ];

  const headerTypeIt = new TypeIt('#header-typeit', {
    strings: [],
    breakLines: true,
    loop: true,
    autoStart: false,
    startDelay: 2000,
    afterString: function () {
      headerTypeIt.pause(2000).delete().type(typeitPhrases[Math.floor(Math.random() * typeitPhrases.length)]);
    }
  });

  headerTypeIt.type(typeitPhrases[Math.floor(Math.random() * typeitPhrases.length)]);

});

let randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//projects scripts
const projectsToDisplay = 3;
var firstVisibleProject = 1;

//runs when a user requests more projects
let getProjects = function () {
  loadProjects();
  var offset = parseInt($(".navbar").css('height')) + 10;
  $('html, body').animate({
    scrollTop: $('#projects').offset().top - offset
  }, 800);
};

//loads a set of up to {projectsToDisplay} projects (probably 3)
let loadProjects = function () {
  var projectsToShow = [];
  var totalProjects = 0;

  //track which projects should be shown
  for (var projectIndex = 1; $('#project' + projectIndex).length; projectIndex++) {
    if (projectIndex >= firstVisibleProject && projectIndex < firstVisibleProject + projectsToDisplay) {
      projectsToShow.push($('#project' + projectIndex).attr('id'));
    }
    totalProjects++;
  }

  //hide all projects, then show tracked projects
  for (var projectIndex = 1; $('#project' + projectIndex).length; projectIndex++) {
    var project = $('#project' + projectIndex);
    project.fadeOut(600, function () {
      if (projectsToShow.includes($(this).attr('id'))) {
        $(this).fadeIn(600);
      }
    });
  }

  //increment firstVisibleProject for next time
  firstVisibleProject = ((firstVisibleProject + projectsToDisplay - 1) % totalProjects) + 1;
};

//ensures that content only appears when fully loaded
window.onload = function () {
  $(".loading-donut").fadeOut(1000, function () {
    $("#body-container").fadeIn(1000);

    //animations for fade-in on scroll
    let bottomValue = 0;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      bottomValue = -120;
    }
    window.sr = ScrollReveal({
      reset: true,
      mobile: true,
      scale: 0.7,
      viewOffset: {
        top: 60,
        right: 0,
        bottom: bottomValue,
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
};

//progress bar scripts
window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $("#progress-bar").css("width", scrolled + "%");
  if (winScroll == 0 && $(".progress-container").is(":visible")) {
    $(".progress-container").fadeOut();
  } else if (!$(".progress-container").is(":visible")) {
    $(".progress-container").fadeIn();
  }
};
