$(function() {
$("#fhehead").load("fheheader.html");
});

$(function() {
$("#fhefoot").load("fhefooter.html");
});

$(function(){
		// Array containing Objects with Fruit names & quantities
		var fruitBasket = [	
            {title:'I Nephi Having been born of goodly...', description: '<strong>Scripture:</strong> Read together the first verse of 1 Nephi. Ask for everyone to think about what it says and read it again by themselves. Ask if anyone learned something new. Lead a discussion about how much information is contained in the scriptures that we often look over. Commit your familiy to read the whole chapter of 1 Nephi 1 marking everything new that they didnt observe before.'},
            {title:'Oranges', description:'<strong>Video:</strong> Watch a 5 minute portion of David A. Bednars talk, "The Character of Christ." Afterwards ask questions to help us see how we can be link Christ. Commit your FHE group to think of one character trait in particular and focus on that trait. Next week verify if everyone improved in their selected trait'},
							{title:'Kiwis', description:50},
							{title:'Strawberries', description:45},
							{title:'Bananas', description:10},
							{title:'Mangoes', description:5},
							{title:'Tomatoes', description:30} ];
    
    var activities = [
        {title:'', description: 'Travel: Go to Porter Park and play capture the flag. Split teams evenly and play an practice round to gauge athletesism. Further adjust team to ensure equally matched rounds. 5 points to win. Establish two base areas that are 20 feet by 20 feet. Guards cannot stand still in this area. If tagged accross the midline you must return to this area before you can continue to play.'},
        {title:'', description: 'Activity: Play Noahs Ark. One person is selected to be in the middle of a circle. They have their eyes closed and say "Rotate." Everyone else moves around them trying to conceal their identity. The Person says stop and points in a dirrection. This person closest to their finger has to clap. The person in the middle will say, "make a elephant noise." The person will then have to make that noise. The person in the middle will get one chance to guess who made the noise! If they guess who made the noise, that person goes in the middle. The person in the middle can choose any animal and the selected person has to attenpt to make that noise.'} ];
    

		// Your jQuery code goes here
    
    
        $.each( fruitBasket, function( index, element){
            $('#fruits').append('<li>' + element.description + '</li>' + '<br>');
        })
        
        $('.fruits > li').each( function(index, element){
            $(element).css('border', '5px')
        });
        
        $.each( activities, function(index, element){
            $('#activities').append('<li>' + element.description + '</li>' + '<br><br>');
        } )
	})