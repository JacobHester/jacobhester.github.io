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
  }).appendTo( "div.fruits" );
});

$.getJSON( "fheactivity.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" + "<br><br>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "div.activities" );
});

$.getJSON( "fhesnacks.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" + "<br><br>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "div.snacks" );
});

$('.roulette').click( function(){
                var rn1 = Math.floor(Math.random() * 10);
                var rn2 = Math.floor(Math.random() * 2);
                var rn3 = Math.floor(Math.random() * 10);
    
/*
TO BRO ROBERTSON:
IF YOU ARE WONDERING WHY I USED VANILLA AND A NORMAL ARRAY HERE... *ITS BECUASE I COULDNT FIGURE OUT HOW TO PICK A RANDOM ELEMENT OF MY *JSON DATA AFTER USING .getJSON. I SPENT A GOOD DEAL OF TIME (HOURS) TRYING, BUT IT WAS BREAKING MY BRAIN. I'M TAKING CIT 160 AND DOING THIS IN VANILLA MADE SO MUCH MORE SENSE IN MY BRAIN
*/
    
                console.log(rn1);
                console.log(rn2);
                console.log(rn3);
    
    var spiritual = ["Read together the first verse of 1 Nephi. Ask for everyone to think about what it says and read it again by themselves. Ask if anyone learned something new. Lead a discussion about how much information is contained in the scriptures that we often look over. Commit your familiy to read the whole chapter of 1 Nephi 1 marking everything new that they didnt observe before.", "Watch the Mormon Message entitled 'The Journey.' What can we learn from this message given by President Uchtdorf? Video can be found <a href='https://www.mormonchannel.org/watch/series/mormon-messages/the-journey' class='pagelinks'>Here</a>", "Read Moses 7:18-19 and answer the question What is Zion? Once you have defined Zion ask how can we establish Zion in our apartment this semester? Ennumerate 3 important things that your Fhe family could work on. Write These down and put this paper on the wall where everyone can see.", "Watch a 7- minute clip of Troy Dougherty’s devotional address 'The Practical Work of Building Zion in Your Apartments and Homes' Ponder the following question: What can I do now to build Zion in my apartment? Video can be found<a href='https://video.byui.edu/media/Building+Zion+(7+min)/0_gig7n1l8' class='pagelinks'>_Here_</a>", "As a group, read 4 Nephi 1:10-18. What contributed most to the Zion-like state in which the Nephites and Lamanites lived during that period of time? What specific practices from the account in 4 Nephi can be applied to apartment life to bring about Zion? What impact can your love for God have on your interpersonal relationships with roommates?", "Watch 'The Greatest Commandment' which can be found<a href='https://www.mormonchannel.org/watch/series/bible-videos/the-greatest-commandment' class='pagelinks'>_Here_</a>", "Why did God include the 'War Chapters (Alma 52-63)' in the Book of Mormon? Discuss your thoughts as an FHE group. Follow the Spirit to ask appropriate questions and learn from one another",
    "Watch this 8 minute clip of David A. Bednars talk 'Bearing our Burdens with Hope.' Video can be found<a href='https://www.mormonchannel.org/watch/series/mormon-messages/bearing-our-burdens-with-hope' class='pagelinks'>_Here_</a>", "Read Alma 62:40-52 and discuss the principle found within it. What can we learn about prayer from the War between the Lamanites and the Nephites? Discuss the importance of sincere prayer in our daily lives. Commit your FHE group to pray every morning and night", "Watch this short Mormon Message about the Ten Commandments. Discuss how we often forget God in our own lives today. Discuss how we can better obey the Ten Commandments. Video can be found<a href='https://www.mormonchannel.org/watch/series/mormon-messages/obedience-to-the-ten-commandments' class='pagelinks'>_Here_</a>"];
    
    var acts = ["Go to Porter Park and play capture the flag. Split teams evenly and play an practice round to gauge athletesism. Further adjust team to ensure equally matched rounds. 5 points to win. Establish two base areas that are 20 feet by 20 feet. Guards cannot stand still in this area. If tagged accross the midline you must return to this area before you can continue to play", "Play Noahs Ark. One person is selected to be in the middle of a circle. They have their eyes closed and say 'Rotate.' Everyone else moves around them trying to conceal their identity. The Person says stop and points in a dirrection. This person closest to their finger has to clap. The person in the middle will say 'make a elephant noise.' The person will then have to make that noise. The person in the middle will get one chance to guess who made the noise! If they guess who made the noise that person goes in the middle. The person in the middle can choose any animal and the selected person has to attempt to make that noise", "Go to the Craze fun center and play lazer tag! It would cost around 6 dollars per person, but it's worth it! Split your FHE group into guys vs girls or any other combination", "Play Pterodactyl. The point of this game is to not show your teeth. Form a cirle and practice saying the word pterodactyl without showing your teeth becuase if your teeth show you are eliminated. One person starts being it. When you are it you can say 'pterodactyl' pass the turn to the person on your right. Or you can squawk like a pterodactyl/dinosaur to pass the turn to the left. The person you pass it to makes the same decision and the game goes on. The point is to make other people laugh which will force them the show their teeth. When only two people are left they must stand on one foot while flapping their arms like pterodactyl wings while squawking. The first one to stop hopping loses", "Go and rollerskate at the MC! You will need to get there around 5 to ensure that there will be roller skates! Even if some members in your group don't know how to skate go anyways. Its fun to learn and sometimes fall", "Download the free headbands app and enjoy some laughs! Google play link can be found <a href='https://play.google.com/store/apps/details?id=com.wb.headsup&hl=en' class='pagelinks'>_Here_</a>", "Make a trip to the Rexburg Temple! This should be an uplifting experience and should remind your FHE group of the goal to be sealed in one of God's Temples", "Murder in the dark! To play find an area that will be large enough for your entire FHE group to move around freely. Bring a deck of cards and shuffle in the ace of spades into any number of cards (depending on the size of your group). Who ever gets the ace of spades it the murderer. Turn off the lights and have everyone walk around. Everyone but the murder should have their eyes shut. The murderer will 'slit' peoples throats by putting their hand on the other persons neck. That person must crouch down and stop moving. If someone finds a crouched down person they should yell 'murder in the dark.' After that the remaining live players should deliberate and select someone as the murderer. If that was the murderer then they lose. If not, turn the lights out again and keep playing. The murderer wins if they manage to kill everyone without being selected", "Watch a DVD, Netflix, Vidangel, Hulu, Redbox, or even go to Great Scotts where they have a ton of Movies to rent. Don't forget the popcorn and soda!", "Play Smurf! One person goes outside the apartment. The rest of your group decides on a verb that will be the 'smurf.' Once you decide on a verb invite the 'it' person inside. They will begin to ask you questions to discern the verb. For example: 'would you smurf with a bathing suit on?' or 'do you smurf at night?' Once they correctly guess the verb they choose the next person to be outside"];
    
    var food = ["Root Beer Floats! You will need root beer, and vanilla ice cream", "Fruit Dip! Find ingredients <a href='http://allrecipes.com/recipe/20655/bonnies-fruit-dip/' class='pagelinks'>_Here_</a>", "3 Ingredient Nutella Brownies! Find ingredients <a href='http://kirbiecravings.com/2013/02/easiest-3-ingredient-nutella-brownies.html' class='pagelinks'>_Here_</a>", "Butter Beer! Find ingredients <a href='http://www.foodnetwork.com/recipes/butterbeer-recipe.html' class='pagelinks'>_Here_</a>", "Mexican Style Salsa! You will need 1lb of roma tomates, 1 onion, 4 cloves of garlic, cilantro, 2 serrano or jalepeno chiles. Feeds 12. Heat up a frying pan with oil and put the  whole tomatoes, chiles, garlic cloves and half of the onion inside. Cook on medium heat until the tomates are tender and the chiles have changed to a lighter shade of green. Chop up the remaining onion and half the cilantro. Blend the whole cooked tomatoes, onion, chiles, and garlic. Add to a bowl with the chopped onion and cliantro.", "Jalapeno Poppers! Find ingredients<a href='http://www.bettycrocker.com/recipes/bacon-wrapped-jalapeno-poppers/e2d02568-8d4d-4072-b32a-8445e5558480' class='pagelinks'>_Here_</a>", "Agua Fresca Mexicana! You will need any type of fruit you desire, sugar, and water. Fill a blender with your fruit (suggestions: Watermelon, Cantaloupe, Mango, Bananna) and add enough water to easily blend it. It should be thin enough to drink and should taste like the fruit without being very sweet. Add sugar to compensate the addition of water. Serve with ice!", "Peanut Butter Brownie Dip! Find ingredients <a href='http://www.crazyforcrust.com/2014/09/peanut-butter-brownie-batter-dip/' class='pagelinks'>_Here_</a>", "2 Ingredient Peanut Butter Bananna Ice Cream! Find ingredients<a href='http://www.twopeasandtheirpod.com/two-ingredient-banana-peanut-butter-ice-cream/' class='pagelinks'>_Here_</a>", "<strong>Drink</strong>: Pineapple Orange Sherbet Punch! Find ingredients<a href='http://www.tablespoon.com/recipes/pineapple-orange-sherbert-punch/7640fd06-d495-47cf-a688-915cc7103a9c' class='pagelinks'>_Here_</a>"];
    
    var selected1 = spiritual[rn1];
    var selected2 = acts[rn2];
    var selected3 = food[rn3];
    document.getElementById("h2").innerHTML = selected1;
    document.getElementById("h3").innerHTML = selected2;
    document.getElementById("h4").innerHTML = selected3;
    

                
});










/* function roulette(){
        
        var selector = Math.floor(Math.random() * 2);
        
        
        
        document.getElementById("h2").innerHTML = spt1;
        document.getElementById("h3").innerHTML = act1;
        document.getElementById("h4").innerHTML = ds1;
        
    }*/