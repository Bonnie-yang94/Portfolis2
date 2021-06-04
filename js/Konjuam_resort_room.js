$(document).ready(function () {
    $(".nv_con li").mouseover(function () {
        $(".nav_all").addClass('on')
    });
    $(".nav_all").mouseleave(function () {
        $(this).removeClass('on')
    });
    $(".go_up").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500)
    });
})

$(".bg").vegas({
    slides: [
        { src: "../img/metrial/sub2/header_bg.png" },
    ],
    animation: 'kenburnsDown'
});

$(document).ready(function () {
    $('#prime').click(function () {
        $(location).attr('href', '../html/Konjiam_resrot_room_prime.html');
    });
    $('#noble').click(function () {
        $(location).attr('href', '../html/konjiam_resrot_room_Noble.html');
    });
});

if ($(window).width() < 640) {
    $(document).ready(function () {
        $('.menu_M').click(function () {
            $(this).toggleClass('on');
            $('.nv_con').toggleClass('on');
            $('.nav_all').toggleClass('on');
        })
    });
}