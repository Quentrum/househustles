//HouseHustles 2019

function scrollToMain(){
 var scrollTo = $("#scrollToMainLink").offset.top(); //get top of main page
 $('html, body').animate({
          scrollTop: scrollTo
        }, 1000
      );
}
