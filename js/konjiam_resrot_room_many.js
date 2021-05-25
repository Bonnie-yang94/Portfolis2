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
    observer: true,
    observeParents: true
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
var week = new Array('SUN', 'MON', 'TUE', 'WED',
    'THU', 'FRI', 'SAT', 'SUN');
document.querySelector("#today").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
document.querySelector("#today2").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
document.querySelector("#today3").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

document.querySelector("#nextday").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + (d.getDate() + 1);
document.querySelector("#nextday2").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + (d.getDate() + 1);
document.querySelector("#nextday3").value = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + (d.getDate() + 1);

document.querySelector("#cal").value = 1 + "박"
document.querySelector("#cal2").value = 1 + "박"
document.querySelector("#cal3").value = 1 + "박"

$(".tab_contents").hide().eq(0).show();
$("ul.noble_list li").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).fadeIn(1000)
        .siblings('.tab_contents').fadeOut(300);
});