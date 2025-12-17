

// Sticky After Scrolling Header
$(document).ready(function() {
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});

// JS for Hover Menu
$(document).ready(function() {
    $('ul.navbar-nav .nav-item.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
});


$(document).ready(function(){
    $('.birthday-carousel').owlCarousel({
        loop:true,
        margin:25,
        responsiveClass:true,
        nav: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    })
});


$(document).ready(function(){
    $('.flowers-carousel').owlCarousel({
        loop:true,
        margin:25,
        responsiveClass:true,
        nav: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    })
});


$(document).ready(function(){
    $('.cakes-carousel').owlCarousel({
        loop:true,
        margin:25,
        responsiveClass:true,
        nav: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    })
});


$(document).ready(function(){
    $('.gift-carousel').owlCarousel({
        loop:true,
        margin:25,
        responsiveClass:true,
        nav: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    })
});


$(document).ready(function(){
    $(".text-limit a").text(function(index, currentText) {
      var maxLength = $(this).parent().attr('data-maxlength');
      if(currentText.length >= maxLength) {
        return currentText.substr(0, maxLength) + "...";
      } else {
        return currentText
      } 
    });
});

$(document).ready(function(){
    $(".text-limit i").click(function(){
      $(".product-mob-details").toggleClass("display-on");
    });
    $(".header-title a").click(function(){
      $(".product-mob-details").removeClass("display-on");
    });
});

