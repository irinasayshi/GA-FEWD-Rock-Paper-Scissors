$(document).ready(function(){

// User inputs name

$("#submit").click(inputName);

function inputName(){
	event.preventDefault();
	var playerName = $("#player-name").val();
	$("#submit").toggle();
	$("input").hide();
	$("#player-name-input").text(playerName);
	$("#player-name-input").css("text-align","center");
	return playerName;
}

// Start the scores at 0

var playerTotal = 0;
var botTotal = 0;

// Bot chooses at random and store bot choice

function computerChoiceGen(){
var botPick = ["rock","paper","scissors"]
return botPick[Math.floor(Math.random() * 3)];
}

// Store player choice in function

$("#rock").click(function (){
		play("rock");
	});
$("#paper").click(function (){
		play("paper");
	});
$("#scissors").click(function (){
		play("scissors");
	});

// check if the player choice beats, loses, or ties to bot

// if the player beats bot, add to player score

function play(humanChoice){

	var botChoice = computerChoiceGen();

	$("#status").html("You picked " + humanChoice + ". Computer picked " + botChoice + ". ");

	if (humanChoice === botChoice) {
    $("#status").append("It is a draw!");
  	}
  	// player picks rock, computer picks paper
  	else if (humanChoice === "rock" && botChoice === "paper") {
    $("#status").append("You lose!");
    botTotal = botTotal + 1;
    $('#bot-score').text(botTotal);
  	}
  	// player picks rocks, computer picks scissors
  	else if (humanChoice === "rock" && botChoice === "scissors") {
    $("#status").append("You win!");
	playerTotal = playerTotal + 1;
	$('#player-score').text(playerTotal);
  	} 
  	// player picks paper, computer picks rock
  	else if (humanChoice === "paper" && botChoice === "rock") {
    $("#status").append("You win!");
	playerTotal = playerTotal + 1;
	$('#player-score').text(playerTotal);
  	}
  	// player picks paper, computer picks scissors
  	else if (humanChoice === "paper" && botChoice === "scissors") {
    $("#status").append("You lose!");
    botTotal = botTotal + 1;
    $('#bot-score').text(botTotal);
  	}
  	// player picks scissors, computer picks rock
  	else if (humanChoice === "scissors" && botChoice === "rock") {
    $("#status").append("You lose!");
	botTotal = botTotal + 1;
	$('#bot-score').text(botTotal);
  	}
  	// player picks scissors, computer picks paper
  	else if (humanChoice === "scissors" && botChoice === "paper") {
    $("#status").append("You win!");
	playerTotal = playerTotal + 1;
	$('#player-score').text(playerTotal);
  	}
 }

});