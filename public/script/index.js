// navbar scrolling

document.addEventListener("DOMContentLoaded", function() {

  window.addEventListener('scroll', function() {

    if (window.scrollY > 200) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
// DOMContentLoaded  end


$('.dropdown').hover(function() {
  $('.dropdown-toggle', this).trigger('click');
}, function() {
  $('.dropdown-toggle', this).trigger('click');
});

// navbar scrolling

// carousel
var cont = 0;

function loopSlider() {
  var xx = setInterval(function() {
    switch (cont) {
      case 0: {
        $("#slider-1").fadeOut(400);
        $("#slider-2").delay(400).fadeIn(400);
        $("#sButton1").removeClass("bg-purple-800");
        $("#sButton2").addClass("bg-purple-800");
        cont = 1;
        break;
      }
      case 1: {
        $("#slider-2").fadeOut(400);
        $("#slider-1").delay(400).fadeIn(400);
        $("#sButton2").removeClass("bg-purple-800");
        $("#sButton1").addClass("bg-purple-800");
        cont = 0;
        break;
      }
    }
  }, 5000);

}

function reinitLoop(time) {
  clearInterval(xx);
  setTimeout(loopSlider(), time);
}

function sliderButton1() {
  $("#slider-2").fadeOut(400);
  $("#slider-1").delay(400).fadeIn(400);
  $("#sButton2").removeClass("bg-purple-800");
  $("#sButton1").addClass("bg-purple-800");
  reinitLoop(4000);
  cont = 0
}

function sliderButton2() {
  $("#slider-1").fadeOut(400);
  $("#slider-2").delay(400).fadeIn(400);
  $("#sButton1").removeClass("bg-purple-800");
  $("#sButton2").addClass("bg-purple-800");
  reinitLoop(4000);
  cont = 1

}

$(window).ready(function() {
  $("#slider-2").hide();
  $("#sButton1").addClass("bg-purple-800");
  loopSlider();

});
