$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1841810&appid=a3bff4341071c1d92c61a31940fa628d&units=metric', function (result) {
    $('.ctemp').append(result.main.temp + '˚' + 'C');
    var wiconUrl = '<img src="img/wheater/' + result.weather[0].icon + '.svg" width="65px" height="55px" alt="' + result.weather[0].description + '">'
    $('.w_icon').html(wiconUrl);
});

var swiper1 = new Swiper('.swiper-container.autobg', {
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    }
});

$.datepicker.setDefaults($.datepicker.regional['ko']);
function showDays() {
    var currentDate = new Date();
    var start = $('.st').datepicker('getDate');
    var end = $('.fn').datepicker('getDate');
    if (!start || !end) return;
    var days = (end - start) / 1000 / 60 / 60 / 24;
    $('#cal').val(days + '박');
}
$(".st").datepicker({
    minDate: 0,
    dateFormat: 'yy/mm/dd',
    onSelect: showDays,
    onClose: function (selectedDate) {
        $(".fn").datepicker("option", "minDate", selectedDate);
    }
});
$(".fn").datepicker({
    minDate: 0,
    dateFormat: 'yy/mm/dd',
    onSelect: showDays,
    onClose: function (selectedDate) {
        $(".st").datepicker("option", "maxDate", selectedDate);
    }
});

var d = new Date();
var day = new String(d.getDate());
var nextday = new String(d.getDate()+1);
day = day >=10 ? day:'0' + day;
nextday = nextday >=10 ? nextday:'0' + nextday;
var week = new Array('SUN', 'MON', 'TUE', 'WED',
    'THU', 'FRI', 'SAT', 'SUN');
    document.querySelector("#today").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + day;

document.querySelector("#nextday").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + nextday;

document.querySelector("#cal").value = 1 + "박"

var currentDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + week[d.getDay()];
var result = document.getElementById("now_day");
result.innerHTML = currentDate;


function printTime() {
    var clock = document.getElementById("now_time");
    var now = new Date();
    clock.innerHTML =
        + now.getHours() + ":"
        + now.getMinutes() + ":"
        + now.getSeconds();
    setTimeout("printTime()", 1000);
} window.onload = function () { printTime(); };

var swiper = new Swiper(".sec1_s", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$("section.sec2 .tab_contents").hide().eq(0).show();
$("section.sec3 .tab_contents.Rooms").hide().eq(0).show();
$("ul.tab_conlist li").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).fadeIn(1000)
        .siblings('.tab_contents').fadeOut(300);
});

$(document).ready(function () {
    $('ul.menu , .mini_nav').mouseenter(function () {
        $('.menu , .nav , .top_logo , .mini_logo , .m_nav , .mini_nav select , .mini_nav li, .nav_all').addClass('on')
    });
    $('.nav_all').mouseleave(function () {
        $('.menu , .nav , .top_logo , .mini_logo , .m_nav , .mini_nav select , .mini_nav li, .nav_all').removeClass('on')
    });
    $('span.material-icons-outlined.add').click(function () {
        $('.N_wrap').slideToggle(800)
        $('span.material-icons-outlined.add').toggleClass('rotate')
    });
    $('span.material-icons-outlined.add2').click(function () {
        $('.Q_con').slideToggle(800)
        $('span.material-icons-outlined.add2').toggleClass('rotate')
    });
    $(".go_up").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});

if ($(window).width() < 640) {
    $(document).ready(function () {
        $('.menu_M').click(function () {
            $(this).toggleClass('on');
            $('.menu').toggleClass('on');
            $('.nav_all').toggleClass('on');
        })
    });

    var swiper = new Swiper(".M_cons1", {
        effect: "flip",
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    var d2 = new Date()
    document.getElementById('M_st').valueAsNumber = d2;
    document.getElementById('M_nt').valueAsNumber = d2.setDate(d2.getDate() + 1);
    var st = $('#M_st').val();
    var et = $('#M_nt').val();
    var stArray = st.split('-');
    var etArray = et.split('-');  
    var start_date = new Date(stArray[0], stArray[1], stArray[2]);
    var end_date = new Date(etArray[0], etArray[1], etArray[2]);
    var days = (end_date - start_date) / 1000 / 60 / 60 / 24;
    $('#cal_M').val(days + '박');
}
var email = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
var named = RegExp(/^[가-힣]+$/);


$("#name").keyup(function () {
    if ($("#name").val() == "") {
        $("#n_check").text("이름를 입력해주세요");
        $("#name").focus();
        return false;
    }
    else if (!named.test($("#name").val())) {
        $("#n_check").text("형식에 맞게 입력해주세요");
        $("#name").focus();
        return false;
    } else {
        $("#n_check").text("");
    }
});

$("#number").keyup(function () {
    if ($("#number").val() == "") {
        $("#p_check").text("핸드폰 번호를 입력해 주세요");
        $("#number").focus();
        return false;
    } else {
        $("#p_check").text("");
    }
});

$("#email").keyup(function () {
    if ($("#email").val() == "") {
        $("#e_check").text("이메일을 입력 해주세요");
        $("#email").focus();
        return false;
    }
    else if (!email.test($("#email").val())) {
        $("#e_check").text("이메일형식에 맞게 입력해주세요");
        $("#email").focus();
        return false;
    } else {
        $("#e_check").text("");
    }
});

$("#f_name").keyup(function () {
    if ($("#f_name").val() == "") {
        $("#f_check").text("행사명을 입력해 주세요");
        $("#f_name").focus();
        return false;
    } else {
        $("#f_check").text("");
    }
});

$("#m_num").keyup(function () {
    if ($("#m_num").val() == "") {
        $("#m_check").text("인원 수를 입력해 주세요");
        $("#m_num").focus();
        return false;
    } else {
        $("#m_check").text("");
    }
});

$('.p_num').keydown(function (event) {
    var key = event.charCode || event.keyCode || 0;
    $text = $(this);
    if (key !== 8 && key !== 9) {
        if ($text.val().length === 3) {
            $text.val($text.val() + '-');
        }
        if ($text.val().length === 8) {
            $text.val($text.val() + '-');
        }
    }
    return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
});

function doOpenCheck(chk) {
    var obj = document.getElementsByName("checkbox");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] != chk) {
            obj[i].checked = false;
        }
    }
}
function checkOnlyOne(chk) {
    var obj = document.getElementsByName("checkbox2");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] != chk) {
            obj[i].checked = false;
        }
    }
}
function checkOnlyOne2(chk) {
    var obj = document.getElementsByName("checkbox3");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] != chk) {
            obj[i].checked = false;
        }
    }
}