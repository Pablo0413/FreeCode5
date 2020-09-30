$(document).ready(function(){
   
    var homePos = $("#home").offset().top;
    var aboutPos = $("#aboutme").offset().top;
    var portfolioPos = $("#portfolio").offset().top;
    var contactPos = $("#contactme").offset().top;
    $("#home_page").click(function(){
       $("html, body").animate({scrollTop:homePos -50}, 700, function(){
          $(":focus").blur();
       });
       return false;
    });
    $("#about_page").click(function(){
       $("html, body").animate({scrollTop:aboutPos -50}, 700, function(){
          $(":focus").blur();
       });
       return false;
    });
    $(".portfolio_page").click(function(){
       $("html, body").animate({scrollTop:portfolioPos -50}, 700, function(){
          $(":focus").blur();
       });
       return false;
    });
    $("#contact_page").click(function(){
       $("html, body").animate({scrollTop:contactPos -50}, 700, function(){
          $(":focus").blur();
       });
       return false;
    });
    
 });
 