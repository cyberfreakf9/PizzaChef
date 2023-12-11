const blinkEl = document.querySelector('.span-blink a')
let isblink = false
blink()
function blink() {
  setInterval(() => {
    setTimeout(() => {
      blinkEl.style.opacity = 0.2
    }, 1000)
    if (isblink) {
      blinkEl.style.opacity = 1
      blinkEl.innerText = 'Best Pizza in Town'
      isblink = false
    } else {
      blinkEl.style.opacity = 1
      blinkEl.innerText = 'New Flavour Launch'
      blinkEl.style.transition = 'all 1s '
      isblink = true
    }
  }, 3000)
}
mySlides()
function mySlides() {
  $(document).ready(function () {
    $('.slick-slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      autoplay: true,
      speed: 500,
      dots: true,
      prevArrow:
        '<div class="slick-left"><span class="fa fa-angle-left fa-2xl"></span><span class="sr-only">Prev</span></div>',

      nextArrow:
        '<div class="slick-right"><span class="fa fa-angle-right fa-2xl"></span><span class="sr-only">Next</span></div>',
    })
  })
}
