/* 
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of the two friends and assign them some values 

2. Calculate their scores 

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score) 

*/ 

var johnHeight = 170.18 
var rowanHeight = 170.18 
var johnAge = 24 
var rowanAge = 24


var johnScore = johnHeight + 5 * johnAge
var rowanScore = rowanHeight + 5 * rowanAge


if (johnScore > rowanScore) {
	console.log(`John Wins! His score was ${johnScore}`);
} else if (rowanScore === johnScore) {
	console.log(`It's a tie with a score of ${johnScore}`);
} else {
	console.log(`Rowan Wins! His score was ${rowanScore}`);
}
