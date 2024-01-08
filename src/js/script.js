$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true, 
        adaptiveHeight:true,
        slidesToScroll:1,
        speed:1000,        
        infinity:true,
        autoplay:false,
        autoplaySpeed:300,  
        touchThreshold:10, 
        waitForAnimate:false, 
    });
});  
// dots: false