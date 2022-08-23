// Created by Paolo Rizzone

var TruthArry = new Array
(
"What is one thing that makes you relax?" ,
"Tell about the last dream you had and don’t leave anything out.",
"Have you ever told someone you weren't home just so they wouldn't come over?",
"What's the most embarrassing thing you did when you were drunk?",
"Have you ever shared chewing gum with anyone?",
"If anyone in your family could win an award for the most annoying, who would it be?",
"Have you ever cheated on a test?",
"What is your excuse to get out of exercising?",
"What was the one thing you could never learn how to do no matter how hard you tried?",
"What was your favorite childhood television show?"
"If you had a remote control that would operate anything, what would you control?",
"What is your guilty pleasure?",
"Where is your favorite vacation spot?",
"If you were granted one wish, what would you wish for?",
"What is your favorite season?",
"On a scale from 1-10, what do you rate the person on your right?",
"What makes you laugh?",
"What is something you find to be disgusting?"
);

////////////////////////////////////////////////////////////////////////
var DareArray= new Array(
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

function palette_set_blue() {
  r.style.setProperty('--bgc', '#242F9B');
  r.style.setProperty('--btnc', '#9BA3EB');
  r.style.setProperty('--abtnc', '#646FD4');
  r.style.setProperty('--txtc', '#DBDFFD');
}

function palette_set_red() {
  r.style.setProperty('--bgc', '#F90716');
  r.style.setProperty('--btnc', '#FFF323');
  r.style.setProperty('--abtnc', '#FFCA03');
  r.style.setProperty('--txtc', '#FF5403');
}
