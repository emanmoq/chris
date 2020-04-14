jQuery(function ($) {


  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');
      $('.bigBackground').css('top', '-90');
      $('.basicLogo').css('display', 'none');
      $('.scrollLogo').css('display', 'block');
     
    }

    else {
      $('header').removeClass('scrollNav');
      $('.bigBackground').css('top', '0');
      $('.basicLogo').css('display', 'block');
      $('.scrollLogo').css('display', 'none');

    }


  });
  function onScroll(event) {

    var scrollPosition = $(document).scrollTop();
    $('.nav-link a[href^="#"').each(function () {
      console.log($(this).attr('href'));
      var refElement = $($(this).attr("href"));
      //   console.log($(this).attr("href")); //log
      if (refElement.length && refElement.position().top <= scrollPosition) {
        $('.nav-link').removeClass("active");
        $(this).parent().addClass("active");
      }

      else {
        $(this).removeClass("active");
      }

    });
  }
  $(document).on("scroll", onScroll);
  $('.navbar-collapse ul li a').on('click', function () {
    if ($(this).attr('href') == "steps") {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top - 250 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      $('.mobileNav .navbar-collapse.collapse.show').removeClass('show');


    }

    else {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      $('.mobileNav .navbar-collapse.collapse.show').removeClass('show');


    }

    return false;
  });
  $('.screenShotsSlider').owlCarousel({
    loop: true,
    navText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],


    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  $('.salesSlider').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $('.BlogCarousel').owlCarousel({
    loop: true,
    margin: 11,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $('.stepsslider').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }

  });
  $(".close").click(function () {
    $('.navbar-collapse').collapse("hide");
    $(".overlay").css("display", "none");
  }
  );
  $(".overlay").click(function () {
    $('.navbar-collapse').collapse("hide");
    $(".overlay").css("display", "none");
  });

  $(".navbar-toggler").click(function () {
    $(".overlay").css("display", "block");
  });
  $('.up a').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

  function onScroll(event) {

    var scrollPosition = $(document).scrollTop();
    $('.nav-item a[href^="#"').each(function () {
      console.log($(this).attr('href'));
      var refElement = $($(this).attr("href"));
      if (refElement.length && refElement.position().top - 200 <= scrollPosition) {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
      }

      else {
        $(this).removeClass("active");
      }

    });
  }
  $(".contactbtn").on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 250 }, 1000);
  });
$(".forgetLink").click(function(){
$(".modal").modal('hide');
$("#forgetPass").modal('show');

})
});

