//HouseHustles 2019
$(document).ready(function(){

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvY_FDczZ5p3sGquM1AZyqYelCVGnYFrs",
    authDomain: "househustles-com.firebaseapp.com",
    databaseURL: "https://househustles-com.firebaseio.com",
    projectId: "househustles-com",
    storageBucket: "househustles-com.appspot.com",
    messagingSenderId: "890399735882",
    appId: "1:890399735882:web:58b88c94dae2bef1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference the ORDERS collection
  var ordersRef = firebase.database().ref("orders");

  //OPTION BOXES
  var state = 0; //click states
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

  //SUBMISSION HANDLERS
  //get form submit
  document.getElementById('newOrder').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();
    //getValues from main submitForm
    var name = getInputVal("order-name");
    var email = getInputVal("order-email");
    var roomtype = getInputVal("room-type-select");
    var roomtypeyn = getInputVal("room-type-select-yn");
    var min = getInputVal("min");
    var max = getInputVal("max");
    var desc = getInputVal("order-desc");
    //add the order to firebase
    addOrder(name,email,roomtype,roomtypeyn,min,max,desc);
  }//end of submitForm

  //function to get each part of form
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  //save order
  function addOrder(name,email,roomtype,roomtypeyn,min,max,desc){
    var newOrderRef = ordersRef.push();
    newOrderRef.set({
      name: name,
      email: email,
      roomtype: roomtype,
      roomtypeyn: roomtypeyn,
      min: min,
      max: max,
      desc: desc
    });
  }

 function displayTestimonials(index){

     var customers = ["Aishwarya", "Tyler"];
     var testimonials = ["HouseHustles is a life saver!! They've helped me out when I was stranded in the housing process. They work really fast, all I had to do was tell them my requirements, and in less than six hours, they'd mailed me a detailed list. What makes their service special is the comments regarding each listing, which shows that they really looked into each of them and given a clear idea of what each one entails. Overall I am happy with their service and hope the best fo them!!",  "HouseHustles made looking for housing a breeze and so simple! I would recommend this to any student or busy individual!"];
     //iterate through
       $("#testimonial").html(testimonials[index]);
       $("#author").html("by "+customers[index]);

   } //end of displayTestimonials function

   displayTestimonials(0);

  //count up function
  $(window).scroll(function (event) {
    var scroll = $("#aboutSection").scrollTop();
    $('.big-number').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });
  }); //end of count up



}); //end of DOCUMENT READY
