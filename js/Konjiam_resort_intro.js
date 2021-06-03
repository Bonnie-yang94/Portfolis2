var swiper1 = new Swiper(".autobg", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

var swiper2 = new Swiper(".album", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiper3 = new Swiper(".album2", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiper2,
    },
    navigation: {
        nextEl: ".swiper-button-next.albums",
        prevEl: ".swiper-button-prev.albums2",
    },
});

$(".sc3_con .tab_contents").hide().eq(0).show();
$(".push").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).fadeIn(1000)
        .siblings('.tab_contents').fadeOut(300);
});

var swiper4 = new Swiper(".se4_con", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
$(document).ready(function () {
    $(".go_up").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500)
    });
    $(".nv_con li").mouseover(function(){
        $(".nav_all").addClass('on')
    });
    $(".nav_all").mouseleave(function(){
        $(this).removeClass('on')
    });
});

$(".bg").vegas({
    slides: [
        { src: "../img/metrial/sub1_sec1/sub1_top_image.png" },
    ],
    animation: 'kenburnsDown'
});

if ($(window).width() < 640) {
    $(document).ready(function () {
        $('.menu_M').click(function () {
            $(this).toggleClass('on');
            $('.nv_con').toggleClass('on');
            $('.nav_all').toggleClass('on');
        })
    });

    var swiper5 = new Swiper(".M_cons1", {
        effect: "flip",
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });
}