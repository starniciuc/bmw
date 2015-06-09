
function goScroll(a) {
    if (a != 0) {
        $('html, body').animate({scrollTop: $("#" + a).offset().top}, 1000);
    } else {
        $('html, body').animate({scrollTop: 0}, 1000);
    }

}

$('.inputmask').inputmask({
  mask: '+7(999)-999-99-99'
})