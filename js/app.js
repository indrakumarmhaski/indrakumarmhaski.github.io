    $(function(){
    $(window).on("load resize", function(){
         $(".fill-screen").css("height",window.innerHeight);
     });
    
     //scrollspy
     $('body').scrollspy({
         target: '.navbar',
         offset:150
     });

     $('nav a').bind('click', function(){
         $($(this).attr('href')).animatescroll({scrollSpeed: 3000, padding:50});
         event.preventDefault();
     });

    })