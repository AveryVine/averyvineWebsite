$(document).ready(function () {
  //konami code stuff
  let konamiCounter = 0;
  let konamiMessage = [
    "What, did you expect this to do something useful? P.S. I wouldn't do it again if I were you...",
    "If you keep doing this, things will end badly...",
    "You're playing with fire...",
    "This is not gonna end well for you...",
  ];
  let konami = new Konami(function () {
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
      let offset = parseInt($(".navbar").css('height')) + 10;
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - offset
      }, 800);
    }
  });

  //add modal image code to all relevant images
  $(".figure").each(function () {
    $(this).on("click", function () {
      let modal = $("#modal-display");
      let modalImg = $("#modal-content");
      let modalTxt = $("#modal-caption");
      let img = $(this).find(".content-image");
      let imgSrc = img.attr("src");
      let imgTxt = $(this).find(".figure-caption").text();

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
    'a black belt in karate',
    'an iOS developer',
    'an avid musician',
    'a full stack developer',
    'a video game enthusiast',
    'a proud cat owner',
    'a WWDC scholarship winner'
  ];

  let phraseIndex = Math.floor(Math.random() * typeitPhrases.length);
  const headerTypeIt = new TypeIt('#header-typeit', {
    strings: [],
    breakLines: true,
    loop: true,
    autoStart: false,
    startDelay: 2000,
    afterString: function () {
      let previousIndex = phraseIndex;
      do {
        phraseIndex = Math.floor(Math.random() * typeitPhrases.length);
      } while (phraseIndex == previousIndex);
      headerTypeIt.pause(2000).delete().type(typeitPhrases[phraseIndex]);
    }
  });

  headerTypeIt.type(typeitPhrases[phraseIndex]);

  //adjust parallax effect for devices that do not support "background-attachment: fixed"
  if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) {
    $('.parallax').css("background-attachment", "scroll");
  }
});

let randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//projects scripts
const projectsToDisplay = 3;
let firstVisibleProject = 1;

//runs when a user requests more projects
let getProjects = function () {
  loadProjects();
  let offset = parseInt($(".navbar").css('height')) + 10;
  $('html, body').animate({
    scrollTop: $('#projects').offset().top - offset
  }, 800);
};

//loads a set of up to {projectsToDisplay} projects (probably 3)
let loadProjects = function () {
  let projectsToShow = [];
  let projectSeparatorsToShow = [];
  let totalProjects = 0;

  //track which projects should be shown
  for (let projectIndex = 1; $('#project' + projectIndex).length; projectIndex++) {
    if (projectIndex >= firstVisibleProject && projectIndex < firstVisibleProject + projectsToDisplay) {
      projectsToShow.push($('#project' + projectIndex).attr('id'));
      projectSeparatorsToShow.push($('#project-separator-' + projectIndex).attr('id'));
    }
    totalProjects++;
  }

  //hide all projects, then show tracked projects
  for (let projectIndex = 1; $('#project' + projectIndex).length; projectIndex++) {
    let project = $('#project' + projectIndex);
    let projectSeparator = $('#project-separator-' + projectIndex);
    project.fadeOut(600, function() {
      if (projectsToShow.includes($(this).attr('id'))) {
        $(this).fadeIn(600);
      }
    });
    projectSeparator.fadeOut(600, function() {
      if (projectSeparatorsToShow.includes($(this).attr('id'))) {
        $(this).fadeIn(600);
      }
    });
  }

  //increment firstVisibleProject for next time
  firstVisibleProject = ((firstVisibleProject + projectsToShow.length - 1) % totalProjects) + 1;
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
      scale: 0.8,
      viewOffset: {
        top: 60,
        right: 0,
        bottom: bottomValue,
        left: 0
      }
    });
    sr.reveal('.content-block', {
      duration: 800
    });
    sr.reveal('.figure', {
      duration: 800
    });
    sr.reveal('.card', {
      duration: 800
    });
  });
};

//progress bar scripts
window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  $("#progress-bar").css("width", scrolled + "%");
  if (winScroll == 0 && $(".progress-container").is(":visible")) {
    $(".progress-container").fadeOut();
  } else if (!$(".progress-container").is(":visible")) {
    $(".progress-container").fadeIn();
  }
};
