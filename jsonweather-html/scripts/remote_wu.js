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
         url : "http://api.wunderground.com/api/c880e7d6a7b2d90e/geolookup/conditions/q/" + lat + "," + long + ".jsonp",
  dataType : "jsonp",
  success : function(parsed_json) {
console.log(parsed_json);
  var location = parsed_json['location']['city'];
    var state = parsed_json['location']['state'];
  var temp_f = parsed_json['current_observation']['temp_f'];
    var summary = parsed_json['current_observation']['weather'];
var humidity = parsed_json['current_observation']['relative_humidity'];
  var celcius = parsed_json['current_observation']['temp_c'];
var wind = parsed_json['current_observation']['wind_mph'];
      
      $("#cityDisplay").text(location + " " + state);
      $("#summary").text(summary);
      $('#currentTemp').text(temp_f + "°F");
      $('#add1').text(humidity + "Humidity");
      $('#add2').text(celcius + " " + "°C");
      $('#add3').text(wind + "mph");
      








      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
