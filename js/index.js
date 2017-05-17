$(document).ready(function(){

// User inputs name

$('#submit').click(inputName);

function inputName(){
	event.preventDefault();
	var playerName = $('#player-name').val();
	$("#submit").toggle();
	$("input").hide();
	$('#player-name-input').append(playerName);
	$("#player-name-input").css('text-align','center');
}

// Start the scores at 0

var playerTotal = 0;
var botTotal = 0;

// Store potential bot choices

function computerChoiceGen(){
var botPick = ['rock','paper','scissors']
return botPick[Math.floor(Math.random() * 3)];
}

// Store player choice in function

$("#rock").click(playRock);
$("#paper").click(playPaper);
$("#scissors").click(playScissors);

// Player a choice
// Store bot choice

function playRock(){
	play('rock');
}

function playPaper(){
	play('paper');
}

function playScissors(){
	play('scissors');
}

// check if the player choice beats, loses, or ties to bot

// if the player beats bot, add to player score

function play(humanChoice){

	var botChoice = computerChoiceGen();

	$('#status').html('You picked ' + humanChoice + '. Computer picked ' + botChoice + '.');

playerTotal = playerTotal++;

$('#player-score').text(playerTotal);

// if the player loses to bot, add to bot sccore

botTotal = botTotal++;

$('#bot-score').text(botTotal);

// if the play and bot pick the same, no change

}

});