let peruFlag = document.querySelector('.flag-peru')
let usFlag = document.querySelector('.flag-us')
let language = 'es'
peruFlag.addEventListener('click', ()=>{
    if($('.flag-peru').attr("src")=="img/flag-peru-off.svg"){
        language = 'es'
        $('.flag-us').css("opacity", "0")
        setTimeout(() => {
            $('.flag-us').attr("src","img/flag-us-off.svg");
            $('.flag-us').css("opacity", "1")
        }, 200);
        setTimeout(() => {
            $('.flag-peru').css("opacity", "0")
        }, 150);
        setTimeout(() => {
            $('.flag-peru').attr("src","img/flag-peru-on.svg");
            $('.flag-peru').css("opacity", "1")
        }, 350);
    }
    
})

usFlag.addEventListener('click', ()=>{
    if($('.flag-peru').attr("src")=="img/flag-peru-on.svg"){
        language = 'en'
        $('.flag-peru').css("opacity", "0")
        setTimeout(() => {
            $('.flag-peru').attr("src","img/flag-peru-off.svg");
            $('.flag-peru').css("opacity", "1")
        }, 200);
        setTimeout(() => {
            $('.flag-us').css("opacity", "0")
        }, 150);
        setTimeout(() => {
            $('.flag-us').attr("src","img/flag-us-on.svg");
            $('.flag-us').css("opacity", "1")
        }, 350);
        
        $('#nav-inicio').html('Home')
        $('#nav-te-brindamos').html('We present to you')
        $('#nav-nosotros').html('About us')
        $('#nav-contactanos').html('Contact us')
        $('#titulo-page1').html('Exquisite, fresh and unique taste')
        $('.subtitle1').html('Naturally harvested')
        $('.title2').html('We present to you')
        $('#palta-fuerte').html('Fuerte avocado')
        $('#palta-hass').html('Hass avocado')
        $('#palta-one-title').html('Fuerte Avocado')
        $('#palta-two-title').html('Hass Avocado')
        $('.info').html("We've been working since July, 2019 hand in hand with communities from: Lambayeque, Ancash, Lima, Ica, Arequipa, Ayacucho, Huancayo, Huancavelica and Cajamarca.")
        $('#notepade').attr("src", "img/notepad-eng.png")
        $('#nosotros').html('About us')
        $('.contactate-1').html('Get in touch')
        $('.contactate-2').html('with')
        $('.contactate-3').html('us')
        $('#name').attr('placeholder','Full name')
        $('#email').attr('placeholder','Email')
        $('#number').attr('placeholder','Phone number')
        $('.enviar-button').html('Send')
        
    }
})

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("enviar-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.disabled = true;
      if(language == 'es'){
        status.innerHTML = "¡Su mensaje fue enviado exitósamente!"
      }else{
        status.innerHTML = "Message sent successfully!"
      }
      status.classList.add('success');
      button.style.opacity = .4
      setTimeout(() => {
        button.disabled = false;
        button.style.opacity = 1
    }, 4000);
    }

    function error() {
        button.disabled = true;
        if(language == 'es'){
            status.innerHTML = "Ups, hubo un error, por favor mandar un mensaje a ventas@laacopiadora.com"
          }else{
            status.innerHTML = "Oops, something went wrong, please email ventas@laacopiadora.com"
          }
        status.classList.add('error');
        button.style.opacity = .4
        setTimeout(() => {
            form.reset();
            button.disabled = false;
            button.style.opacity = 1
        }, 3000);
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }