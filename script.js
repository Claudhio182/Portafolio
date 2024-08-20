var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
menu.addEventListener("click", function () {
    nav.classList.toggle("add")
})

$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });
  
    // Toggle mobile menu
    $('#menu').on('click', function() {
      $('#nav').toggleClass('show');
    });
  });

  $(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });
  
    // Toggle mobile menu
    $('#menu').on('click', function() {
      $('#nav').toggleClass('show');
    });
  
    // Fade in hero section
    $('.hero').hide().fadeIn(1000);
  });