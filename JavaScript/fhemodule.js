$(function() {
$("#fhehead").load("fheheader.html");
});

$(function() {
$("#fhefoot").load("fhefooter.html");
});


$(function(){
        $.getJSON("fhedata.json", function(result){
            console.log(result);
           /* $.each(result, function(i, field){
                $("div").append(field + " ");
            });*/
        });
    
});






/*$(function() {

  $.ajax({
    url: "fhedata.json"
    , dataType: "jsonp"
    , success: function (data){
        console.log(data);
        
    
      

        var SpiritualThoughts = data.spiritualThoughts;
        console.log(spiritualThoughts);
    /*    $.each( spiritualThoughts, function( index){
            $('#fruits').append('<li>' + spiritualThoughts[index]+ '</li>' + '<br>');
        })
        
        $('.fruits > li').each( function(index, element){
            $(element).css('border', '5px')
        });
        
        $.each( activities, function(index, element){
            $('#activities').append('<li>' + element.description + '</li>' + '<br><br>');
        } )

	}
  })
})*/