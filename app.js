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


 //has to do with the time picking parts
  const _t = (s) => {
    if (i18n !== void 0 && i18n[s]) {
      return i18n[s];
    }

    return s;
  };

  const timezones = [
    "Etc/GMT+12",
    "Pacific/Midway",
    "Pacific/Honolulu",
    "America/Juneau",
    "America/Dawson",
    "America/Boise",
    "America/Chihuahua",
    "America/Phoenix",
    "America/Chicago",
    "America/Regina",
    "America/Mexico_City",
    "America/Belize",
    "America/Detroit",
    "America/Indiana/Indianapolis",
    "America/Bogota",
    "America/Glace_Bay",
    "America/Caracas",
    "America/Santiago",
    "America/St_Johns",
    "America/Sao_Paulo",
    "America/Argentina/Buenos_Aires",
    "America/Godthab",
    "Etc/GMT+2",
    "Atlantic/Azores",
    "Atlantic/Cape_Verde",
    "GMT",
    "Africa/Casablanca",
    "Atlantic/Canary",
    "Europe/Belgrade",
    "Europe/Sarajevo",
    "Europe/Brussels",
    "Europe/Amsterdam",
    "Africa/Algiers",
    "Europe/Bucharest",
    "Africa/Cairo",
    "Europe/Helsinki",
    "Europe/Athens",
    "Asia/Jerusalem",
    "Africa/Harare",
    "Europe/Moscow",
    "Asia/Kuwait",
    "Africa/Nairobi",
    "Asia/Baghdad",
    "Asia/Tehran",
    "Asia/Dubai",
    "Asia/Baku",
    "Asia/Kabul",
    "Asia/Yekaterinburg",
    "Asia/Karachi",
    "Asia/Kolkata",
    "Asia/Kathmandu",
    "Asia/Dhaka",
    "Asia/Colombo",
    "Asia/Almaty",
    "Asia/Rangoon",
    "Asia/Bangkok",
    "Asia/Krasnoyarsk",
    "Asia/Shanghai",
    "Asia/Kuala_Lumpur",
    "Asia/Taipei",
    "Australia/Perth",
    "Asia/Irkutsk",
    "Asia/Seoul",
    "Asia/Tokyo",
    "Asia/Yakutsk",
    "Australia/Darwin",
    "Australia/Adelaide",
    "Australia/Sydney",
    "Australia/Brisbane",
    "Australia/Hobart",
    "Asia/Vladivostok",
    "Pacific/Guam",
    "Asia/Magadan",
    "Pacific/Fiji",
    "Pacific/Auckland",
    "Pacific/Tongatapu"
  ];

  const i18n = {
    "Etc/GMT+12": "International Date Line West",
    "Pacific/Midway": "Midway Island, Samoa",
    "Pacific/Honolulu": "Hawaii",
    "America/Juneau": "Alaska",
    "America/Dawson": "Pacific Time (US and Canada); Tijuana",
    "America/Boise": "Mountain Time (US and Canada)",
    "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
    "America/Phoenix": "Arizona",
    "America/Chicago": "Central Time (US and Canada)",
    "America/Regina": "Saskatchewan",
    "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
    "America/Belize": "Central America",
    "America/Detroit": "Eastern Time (US and Canada)",
    "America/Indiana/Indianapolis": "Indiana (East)",
    "America/Bogota": "Bogota, Lima, Quito",
    "America/Glace_Bay": "Atlantic Time (Canada)",
    "America/Caracas": "Caracas, La Paz",
    "America/Santiago": "Santiago",
    "America/St_Johns": "Newfoundland and Labrador",
    "America/Sao_Paulo": "Brasilia",
    "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
    "America/Godthab": "Greenland",
    "Etc/GMT+2": "Mid-Atlantic",
    "Atlantic/Azores": "Azores",
    "Atlantic/Cape_Verde": "Cape Verde Islands",
    "GMT": "Dublin, Edinburgh, Lisbon, London",
    "Africa/Casablanca": "Casablanca, Monrovia",
    "Atlantic/Canary": "Canary Islands",
    "Europe/Belgrade": "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
    "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
    "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    "Africa/Algiers": "West Central Africa",
    "Europe/Bucharest": "Bucharest",
    "Africa/Cairo": "Cairo",
    "Europe/Helsinki": "Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius",
    "Europe/Athens": "Athens, Istanbul, Minsk",
    "Asia/Jerusalem": "Jerusalem",
    "Africa/Harare": "Harare, Pretoria",
    "Europe/Moscow": "Moscow, St. Petersburg, Volgograd",
    "Asia/Kuwait": "Kuwait, Riyadh",
    "Africa/Nairobi": "Nairobi",
    "Asia/Baghdad": "Baghdad",
    "Asia/Tehran": "Tehran",
    "Asia/Dubai": "Abu Dhabi, Muscat",
    "Asia/Baku": "Baku, Tbilisi, Yerevan",
    "Asia/Kabul": "Kabul",
    "Asia/Yekaterinburg": "Ekaterinburg",
    "Asia/Karachi": "Islamabad, Karachi, Tashkent",
    "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
    "Asia/Kathmandu": "Kathmandu",
    "Asia/Dhaka": "Astana, Dhaka",
    "Asia/Colombo": "Sri Jayawardenepura",
    "Asia/Almaty": "Almaty, Novosibirsk",
    "Asia/Rangoon": "Yangon Rangoon",
    "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
    "Asia/Krasnoyarsk": "Krasnoyarsk",
    "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR, Urumqi",
    "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
    "Asia/Taipei": "Taipei",
    "Australia/Perth": "Perth",
    "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
    "Asia/Seoul": "Seoul",
    "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
    "Asia/Yakutsk": "Yakutsk",
    "Australia/Darwin": "Darwin",
    "Australia/Adelaide": "Adelaide",
    "Australia/Sydney": "Canberra, Melbourne, Sydney",
    "Australia/Brisbane": "Brisbane",
    "Australia/Hobart": "Hobart",
    "Asia/Vladivostok": "Vladivostok",
    "Pacific/Guam": "Guam, Port Moresby",
    "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
    "Pacific/Fiji": "Fiji Islands, Kamchatka, Marshall Islands",
    "Pacific/Auckland": "Auckland, Wellington",
    "Pacific/Tongatapu": "Nuku'alofa"
  }

  const selectorOptions = moment.tz.names()
    .filter(tz => {
      return timezones.includes(tz)
    })
    .reduce((memo, tz) => {
      memo.push({
        name: tz,
        offset: moment.tz(tz).utcOffset()
      });

      return memo;
    }, [])
    .sort((a, b) => {
      return a.offset - b.offset
    })
    .reduce((memo, tz) => {
      const timezone = tz.offset ? moment.tz(tz.name).format('Z') : '';

      return memo.concat(`<option value="${tz.name}">(GMT${timezone}) ${_t(tz.name)}</option>`);
    }, "");

  document.querySelector(".js-Selector").innerHTML = selectorOptions;

  document.querySelector(".js-Selector").value = "America/Arizona";

}); //end of DOCUMENT READY
