
$('#about').on('click', function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top - 20
    }, 500);
});

$('#projects').on('click', function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top - 20
    }, 500);
});


$('.footer .fa-arrow-up').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
      }, 500);
});

