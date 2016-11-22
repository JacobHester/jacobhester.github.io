// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
         url : "http://api.wunderground.com/api/c880e7d6a7b2d90e/geolookup/conditions/q/IA/" + lat + "," + long + ".jsonp",
  dataType : "jsonp",
  success : function(parsed_json) {
console.log(parsed_json);
  var location = parsed_json['location']['city'];
    var state = parsed_json['location']['state'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  $("#cityDisplay").text("Current temperature in " + location + " is: " + temp_f)








      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
