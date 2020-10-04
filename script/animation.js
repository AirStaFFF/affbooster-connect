var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('am1'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: './script/json/data3.json'
})

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('am2'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: './script/json/data2.json'
})
var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('am3'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: './script/json/data.json'
})
// When the DOM is ready, run this function
$(document).ready(function() {

  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: false,
    interval: 4000,
  });
    $('.nx').on('click', function() {
        const element =  $('.carousel-item')
        $(element).addClass('animated', 'bounceOutLeft')
    })
  var check = false
  $(window).scroll(function(){
    if($(window).scrollTop() >= $('#anim').scrollTop() && !check){
      check = true
      setTimeout(function() {
        animation1.play()
      }, 2000);
      setTimeout(function() {
        animation1.stop()
        animation2.play()
      }, 5000);
      setTimeout( function() {
        animation2.stop()
        animation3.play()
      }, 8000);
      setTimeout( function() {
        animation3.stop()
      }, 11000);
    };
  });
  var checkList = {
    am1: true,
    am2: true,
    am3: true
  };
  $('#am1').mouseover(function() {
    if(checkList.am1){
      checkList.am1 = false
      animation1.play();
      setTimeout(function () {
        checkList.am1 = true
        animation1.stop()
      }, 3000);
    }
  });
  $('#am2').mouseover('click', function() {
    if(checkList.am2){
      animation2.play()
      checkList.am2 = false
      setTimeout(function() {
        checkList.am2 = true
        animation2.stop()
      }, 3000);
    }
  });
  $('#am3').mouseover('click', function() {
    if(checkList.am3){
      animation3.play();
      checkList.am3 = false
      setTimeout( function() {
        checkList.am3 = true
        animation3.stop()
      }, 3000);
    }
  });
});