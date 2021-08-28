document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  $('slider-btn')

  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.slider_row',
      type: 'bullets',
      bulletClass: 'slider-btn',
      clickable: 'true'
    },
  });
  setTimeout(() => {
    $('#exampleModal').modal('show');
    $('main, header').css('opacity', 0);
  }, 1000);
  
  $('.btn-primary').click(() => { 
    $('main, header').css('opacity', 1)
    $('#exampleModal').modal('hide') });
  $('.modal').modal({
    backdrop: false
  })
});