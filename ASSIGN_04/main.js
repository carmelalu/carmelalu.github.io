$(document).ready(function() {

    $('#btnMorn').click(function() {
        $('.imgMorn').fadeIn()
        $('#btnChoice').fadeIn();
    });

    $('#btnMid').click(function() {
        $('.imgDay').fadeIn()
        $('#btnChoice').fadeIn();
    });

    $('#btnEven').click(function() {
        $('.imgEven').fadeIn()
        $('#btnChoice').fadeIn();
    });

    $('#btnNight').click(function() {
        $('.imgNight').fadeIn()
        $('#btnChoice').fadeIn();
    });

    $("#btnChoice").click(function() {
        $('.imgMorn').fadeOut()
        $('.imgDay').fadeOut()
        $('.imgEven').fadeOut()
        $('.imgNight').fadeOut()
        $('#btnChoice').fadeToggle();
    });

});