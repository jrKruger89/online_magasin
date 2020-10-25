$(function () {


    $('.main_nav_toggle').click(function() {
        $('.main_nav').slideToggle();
        $('.sub_nav').css('display', 'none');
    });

    $('.sub_nav').hide();
    $(".nav_item:has(ul)").click(function () {
        $(".main_nav").find('.sub_nav').slideUp();
        $(this).find('.sub_nav').slideDown();
    });

});