// Created by Paolo Rizzone

var TruthArry = new Array
(
"Do you like pineapple on pizza?" ,
"Tell about the last dream you had and don’t leave anything out.",
"What's the most embarrassing thing you did when you were drunk?",
"Have you ever shared chewing gum with anyone?",
"What don't your parents know about you?",
"Who looks sexier in this room?",
"What is your excuse to get out of exercising?",
"What was your favorite childhood television show?",
"If you had a remote control that would operate anything, what would you control and why?",
"If you were the opposite sex for a day, what would you do?",
"Where is your favorite vacation spot?",
"If you were granted one wish, what would you wish for?",
"What is your favorite season?",
"On a scale from 1-10, what do you rate the person on your right?",
"What is the funniest joke you know?",
"Do you have a weird collection?"
);

////////////////////////////////////////////

var DareArray= new Array
(
"Get a bar of soap from the bathroom and sell it to the group for 1 minutes.",
"Go outside, and while skipping down the street, sing “Let it Go’ from Frozen.",
"With your eyes closed, pick someone from your contact list and send them a text.",
"Stand up and do your best impersonation of the person on your right.",
"Go in the kitchen and rearrange everything in the food pantry in alphabetical order.",
"Imagine that you are a dog and act like it until your next turn.",
"Describe what the sky looks like without using the words blue or white.",
"Sing the chorus of your favorite song.",
"Make up a song about the host of the party.",
"Exchange shirts with the person to your left and wear it for the remainder of the game.",
"For the next 15 minutes, everything you say must be spoken in baby talk.",
"Make a sandwich while blindfolded.",
"Eat a spoonful of hot sauce.",
"From now until your next turn, every time someone talks, interrupt by saying, “that’s a lie.”",
"Get down on one knee and propose to the person on your left.",
"Open Facebook and “like” the first thing that pops up even if you disagree with it.",
"Stand up and do your best impersonation of your mom.",
"Rearrange all the pictures in the room according to their size.",
"Take off your shoe and clean your foot as though you are an animal.",
"Put makeup on the person sitting the farthest away from you.",
"Stand up and do jumping jacks until your next turn.",
"Be silent and say nothing from now until your next turn.",
"Get on all fours and walk over to a wall like a dog, then lick the wall.",
"Stand on a chair and act like a monkey for 5 minutes.",
"Act like a cat and “make bread” on the person sitting beside you."
);

function TruthF(){
    var l = TruthArry.length;
    var x= Math.floor((Math.random()*l));
    var TOD =document.getElementById("tod");
    TOD.value=TruthArry[x];
}

function DareF(){
    var l = DareArray.length;
    var x= Math.floor((Math.random()*l));
    var TOD =document.getElementById("tod");
    TOD.value=DareArray[x];
}

var r = document.querySelector(':root');

function palette_set_blue(){
  r.style.setProperty('--bgc', '#242F9B');
  r.style.setProperty('--btnc', '#9BA3EB');
  r.style.setProperty('--abtnc', '#646FD4');
  r.style.setProperty('--txtc', '#DBDFFD');
}

function palette_set_red(){
  r.style.setProperty('--bgc', '#3a001e');
  r.style.setProperty('--btnc', '#ff6347');
  r.style.setProperty('--abtnc', '#cc1f00');
  r.style.setProperty('--txtc', '#fff7f3');
}

function palette_set_pink(){
  r.style.setProperty('--bgc', '#7A4495');
  r.style.setProperty('--btnc', '#FF8FB1');
  r.style.setProperty('--abtnc', '#B270A2');
  r.style.setProperty('--txtc', '#FCE2DB');
}

function palette_set_green(){
  r.style.setProperty('--bgc', '#483838');
  r.style.setProperty('--btnc', '#90B77D');
  r.style.setProperty('--abtnc', '#42855B');
  r.style.setProperty('--txtc', '#D2D79F');
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function palette() {
  document.getElementById("myDropdown").classList.toggle("show");
}

