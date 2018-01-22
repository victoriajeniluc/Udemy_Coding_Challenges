/* 
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of the two friends and assign them some values 

2. Calculate their scores 

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score) 

*/ 

var johnHeight = 172; 
var rowanHeight = 165; 
var johnAge = 26; 
var rowanAge = 29;
var friendHeight;
var friendAge; 

friendHeight = prompt("What is your height?");
friendAge = prompt("What is your age?");

var johnScore = johnHeight + 5 * johnAge;
// console.log(johnScore);
var rowanScore = rowanHeight + 5 * rowanAge;
// console.log(rowanScore);
var friendScore = friendHeight + 5 * friendAge; 
// console.log(friendScore);
 

if (johnScore > rowanScore && johnScore > friendScore) {
	console.log(`John Wins! His score was ${johnScore}`);
} else if (friendScore > johnScore && friendScore > rowanScore) {
	console.log(`The third player wins! His score was ${friendScore}`);
} else if (rowanScore > johnScore && rowanScore > friendScore) {
	console.log(`Rowan Wins! His score was ${rowanScore}`);
} else {
	console.log("It's a draw");
}

