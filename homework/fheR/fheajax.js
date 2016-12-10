$(function() {
$("#fhehead").load("fheheader.html");
});

$(function() {
$("#fhefoot").load("fhefooter.html");
});

$.getJSON( "fhemessages.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" + "<br><br>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "ul.fruits" );
});

$.getJSON( "fheactivity.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" + "<br><br>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "ul.activities" );
});

$.getJSON( "fhesnacks.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" + "<br><br>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "ul.snacks" );
});

$('.roulette').click( function(){
                var lets = 0;
                console.log(lets);
            });










/* function roulette(){
        
        var selector = Math.floor(Math.random() * 2);
        
        
        
        document.getElementById("h2").innerHTML = spt1;
        document.getElementById("h3").innerHTML = act1;
        document.getElementById("h4").innerHTML = ds1;
        
    }*/