menuBtn = document.querySelector('.burger')
closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', (e)=>{
  e.target.style.display = 'none'
  document.querySelector('.nav-wrapper').classList.add('expand-menu')
  document.querySelector('.nav-links').classList.add('open-menu')
})
closeBtn.addEventListener('click', (e)=>{
  menuBtn.style.display = 'inline-block'
  // document.querySelector('.nav-wrapper').classList.remove('expand-menu')
  document.querySelector('.nav-wrapper').classList.add('contract-menu')
  document.querySelector('.nav-links').classList.remove('open-menu')
})
prevBtn = document.getElementById('prev-btn')
nextBtn = document.getElementById('next-btn')
loop = true

function autoChange(){
    setTimeout(() => {
        if(loop ==true){
            plusDivs(1)
            autoChange()
        }
    }, 4000);
}autoChange()
prevBtn.addEventListener('click',()=>{
    plusDivs(-1)
    loop = false
})
nextBtn.addEventListener('click',()=>{
    plusDivs(1)
    loop = false
})
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
//   debugger
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
      slideIndex = 1
    //   x[x.length-1].classList.remove('show')
    }
  if (n < 1) {
      slideIndex = x.length
    //   x[0].classList.remove('show')
    }
    // debugger
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    x[i].classList.remove('show')
    x[i].classList.remove('hide')
  }
  if(slideIndex==1){
    x[x.length-1].style.display = "block";
    x[x.length-1].classList.remove('show')
    x[x.length-1].classList.add('hide')
    setTimeout(() => {
        x[x.length-1].style.display = "none";
    }, 300);
  }else{
    x[slideIndex-2].style.display = "block";
    x[slideIndex-2].classList.remove('show')
    x[slideIndex-2].classList.add('hide')
    setTimeout(() => {
        x[slideIndex-2].style.display = "none";
      }, 200);
  }
  setTimeout(() => {
    x[slideIndex-1].style.display = "block"; 
    x[slideIndex-1].classList.add('show')
  }, 300);
}



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

        $('#nav-inicio').html('Inicio')
        $('#nav-te-brindamos').html('Te Brindamos')
        $('#nav-nosotros').html('Nosotros')
        $('#nav-contactanos').html('Contáctanos')
        $('#titulo-page1').html('Sabor único, exquisito y fresco')
        $('.subtitle1').html('Productos cultivados naturalmente')
        $('.title2').html('Te brindamos')
        $('#palta-fuerte').html('Palta Fuerte')
        $('#palta-hass').html('Palta Hass')
        $('#palta-one-title').html('Palta Fuerte')
        $('#palta-two-title').html('Palta Hass')
        $('.info').html("Trabajamos desde julio del 2019 de la mano con comunidades de las zonas de: Lambayeque, Anchash, Lima, Ica, Arequipa, Ayacucho, Huancayo, Huancavelica y Cajamarca.")
        $('#notepad').attr("src", "img/notepad.png")
        $('#nosotros').html('Nosotros')
        $('.contactate-1').html('Contáctate')
        $('.contactate-2').html('con')
        $('.contactate-3').html('nosotros')
        $('#name').attr('placeholder','Nombre completo')
        $('#email').attr('placeholder','Correo Electrónico')
        $('#number').attr('placeholder','Teléfono')
        $('.enviar-button').html('Enviar')
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
        $('#notepad').attr("src", "img/notepad-eng.png")
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