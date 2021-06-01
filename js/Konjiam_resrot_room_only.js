$(document).ready(function () {
    $(".nv_con li").mouseover(function () {
        $(".nav_all").addClass('on')
    });
    $(".nav_all").mouseleave(function () {
        $(this).removeClass('on')
    });
})
var swiper = new Swiper(".r_photo", {
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

$.datepicker.setDefaults($.datepicker.regional['ko']);
function showDays() {
    var currentDate = new Date();
    var start = $('#today').datepicker('getDate');
    var end = $('#nextday').datepicker('getDate');
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
document.querySelector("#today").value= d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + day;

document.querySelector("#nextday").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + nextday;

document.querySelector("#cal").value = 1 + "박"