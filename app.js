const menu = document.querySelector('#mobile-menu');  
 const menuLinks = document.querySelector('.navbar__menu');  
 // Display mobile menu  
 const mobieMenu = () =>{  
 menu.classList.toggle('is-active')  
 menuLinks.classList.toggle('active')  
 }  
 menu.addEventListener('click', mobieMenu)  
 function myFunction() {  
   document.getElementById("demo").innerHTML = "Hello World";  
  }


  $.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};
