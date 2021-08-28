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
      setTimeout(() => {$('#exampleModal').modal('show')}, 1000);
      
    });