$(document).ready(function(){

   $(".ham-menu").click(function(){
       $("nav ul").slideToggle();
   });

   $("#map .inputs a").click(function(){
    $(".alert-2").animate({right:"0",opacity:"1"},1000).animate({right:"0",opacity:"1"},2000).animate({right:"-25%",opacity:"0"},3000);
});

    $("#home_btn").click(function(){
    $(".alert").animate({right:"0",opacity:"1"},1000).animate({right:"0",opacity:"1"},2000).animate({right:"-25%",opacity:"0"},3000);
});


  });

 
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.counter').counterUp({
    delay: 10,
    time: 2000
});

AOS.init();

function hamburger_menu()
{
    var v=document.getElementById("ham");
    var n=v.className;
    if(n=="fa fa-bars")
    {
        v.className="fa fa-times";
    }
    else if(n=="fa fa-times")
    {
        v.className="fa fa-bars";
    }
}


