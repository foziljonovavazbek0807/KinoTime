// aos
AOS.init();


// first swiper
let i = 0;

$('.slide').click(function() {
    $('.active').addClass('nonActive').find('span').empty()
    $(this).removeClass('nonActive').addClass('active')
    i = $(this).index()
})

setItner = setInterval(go, 4000);

function go() {
    $('.active').addClass('nonActive').find('span').empty()
    $($('.slide')[i % 10]).removeClass('nonActive').addClass('active')
    i++;
}