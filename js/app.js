//HouseHustles 2019

$(document).ready(function(){

//OPTION BOXES
var state = 0; //click state

  //find me listings
  $("#option1").click(function(){
  }, function(){ state = 1;showLightBox(state);}); //change global state to 1

  //house scout for me
  $("#option2").click(function(){
    showLightBox(); //open the lightbox
  }, function(){ state = 2; showLightBox(state);}); //change global state to 2

  function showLightBox(param){
    
  }


}); //end of DOCUMENT READY
