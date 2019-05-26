//HouseHustles 2019

$(document).ready(function(){

  //OPTION BOXES
  var state = 0; //click state

  $("#optionLightBox1").find("div").css({"display":"none"});

  //find me listings
  $("#option1").click(function(){
  }, function(){ state = 1;showLightBox(state);}); //change global state to 1

  //house scout for me
  $("#option2").click(function(){
    showLightBox(); //open the lightbox
  }, function(){ state = 2; showLightBox(state);}); //change global state to 2

  $("#cancelLink").click(function(){
     $("#optionLightBox1").find("div").fadeOut(1000);
     $("#optionLightBox1").addClass("fade-out");
     $("#optionLightBox1").removeClass("fade-in");
     $([document.documentElement, document.body]).animate({ scrollTop: $("#option1").offset().top}, 100);
  });

  $("#cancelLink2").click(function(){
    $("#optionLightBox2").find("div").fadeOut(1000);
    $("#optionLightBox2").addClass("fade-out");
    $("#optionLightBox2").removeClass("fade-in");
  });

  function showLightBox(param){
    if(param == 1) {
      $("#optionLightBox1").removeClass("fade-out");
      $("#optionLightBox1").find("div").fadeIn(1000, function(){ $("#form-name-email").css({"display":"inline-flex"});} );
      $("#optionLightBox1").addClass("fade-in");
      $([document.documentElement, document.body]).animate({ scrollTop: $("#optionLightBox1").offset().top-30}, 500);
    }
    else if(param == 2) {
       $("#optionLightBox2").removeClass("fade-out");
       $("#optionLightBox1").find("div").fadeIn(1000);
       $("#optionLightBox2").addClass("fade-in"); }
  }

}); //end of DOCUMENT READY
