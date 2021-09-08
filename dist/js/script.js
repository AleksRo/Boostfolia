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
    $('#exampleModal').modal('hide')
  });
  $('.modal').modal({
    backdrop: false
  })


  var email = document.getElementById('form-email');
  var name = document.getElementById('form-name');
  var message = document.getElementById('form-textarea');

  var error_name = document.getElementById("error_name");
  var error_email = document.getElementById("error_email");
  var error_message = document.getElementById("error-massage");


  $('.btn-form').click(() => {
    Validate();
  })

  $('.form-control').keydown(() => {
    $('.form-control').css('border', '1px solid black');
    $('.erorr').text('');
  })


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email, re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  }
  function Validate() {
    let error_name = document.getElementById("error_name");
    let error_email = document.getElementById("error_email");
    if (name.value == "") {
      name.style.border = "1px solid red";
      error_name.textContent = "Username is required";
      name.focus();
      return false;
    }
    if (!validateEmail(email.value)) {
      email.style.border = "1px solid red";
      error_email.textContent = "Email is required";
      email.focus();
      return false;
    }
    if (message.value == "") {
      message.style.border = "1px solid red";
      error_message.textContent = "Message is required";
      message.focus();
      return false;
    }
    if (message.value.length > 299) {
      message.style.border = "1px solid red";
      error_message.textContent = "Message too long";
      message.focus();
      return false;
    }
    $('.form-body').remove();
  }
});
