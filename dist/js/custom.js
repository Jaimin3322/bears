
$(document).ready(function () {


    $(function () {
        $('#header').data('size', 'big');
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            if ($('#header').data('size') == 'big') {
                $('#header').data('size', 'small');
                $('#header').stop().animate({
                    height: '90px'
                }, 300);
                $("#header").css("background-color", "rgba(255, 255,255, 0.9)");
                $("#header").css("box-shadow", "black 0px -2px 10px 2px");
                $('#header .navbar ul:last-child a').stop().animate({
                    height: '90px'
                }, 300);

            }
        }
        else {
            if ($('#header').data('size') == 'small') {
                $('#header').data('size', 'big');
                $('#header').stop().animate({
                    height: '121px'
                }, 300);
                $("#header").css("background-color", "rgba(255, 255,255, 0.7)");
                $('#header .navbar ul:last-child a').stop().animate({
                    height: '121px'
                }, 300);

            }
        }
    });

});


// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');

//         var target = this.hash;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top - 90 
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });


$(document).ready(function () {

    var headerHeight = $('header').outerHeight(); 

    $('#main-nav li a').click(function (e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 90
        }, 1000);

        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

    });
});


// function onScroll(event) {
//     var scrollPos = $(document).scrollTop();
//     $('#main-nav ul li a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//         // $('#navbar li.nav-item a, #collapsibleNavbar li.nav-item a').removeClass("active");
//         currLink.addClass("active");
//       }
//       else {
//         currLink.removeClass("active");
//       }
//     });
//   }

// function onScroll(event) {
//     var scrollPosition = $(document).scrollTop();
//     $('#main-nav ul li a').each(function () {
//         var currentLink = $(this);
//         var refElement = $(currentLink.attr("href"));
//         if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//             $('#main-nav ul li a').removeClass("active");
//             currentLink.addClass("active");
//         }
//         else {
//             currentLink.removeClass("active");
//         }
//     });
// }