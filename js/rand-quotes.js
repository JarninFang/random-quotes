/*
 * 1. Generate a random number
 * 2. Use that to find a random quote
 * 3. Use jQuery to show that quote on the page
 */

 var quoteArray = [
 	"The best preparation for tomorrow is doing your best today.", 
 	"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
 	"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 
 	"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
 	"Perfection is not attainable, but if we chase perfection we can catch excellence.",
 	"Try to be a rainbow in someone's cloud.",
 	"We must let go of the life we have planned, so as to accept the one that is waiting for us.",
 	"I believe in living today. Not in yesterday, nor in tomorrow.",
 	"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
 	"Put your heart, mind, and soul into even your smallest acts. This is the secret of success."
 ];

 var randomNum = Math.floor((Math.random() * quoteArray.length));
 console.log("The random number is " + randomNum);


 $(document).ready(function () {
 	$("#quote-text").text(quoteArray[randomNum]);
 	$("#quote-btn").click(function() {
 		$("#quote-text").text(quoteArray[random_num()]);
 	});
 });

function random_num() {
	return Math.floor((Math.random() * 10));
}