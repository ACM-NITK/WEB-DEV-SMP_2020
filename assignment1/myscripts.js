function redirect_(){
    window.location="mainpage.html";
    }
    $(document).ready(function(){
        // Add smooth scrolling to all links in navbar + footer link
        
        $(window).scroll(function() {
          $(".slideanim").each(function(){
            var pos = $(this).offset().top;
      
            var winTop = $(window).scrollTop();
              if (pos < winTop + 600) {
                $(this).addClass("slide");
              }
          });
        });
      })
      function carouselimage(){
          
      }