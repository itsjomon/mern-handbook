// Favorite Movie

let favMovie = "dune";
let guess = prompt("Guess my favorite movie, (type 'quit' to exit).");

while(guess != favMovie) {
    if (guess == "quit") {
        console.log("You chose to quit, better luck next time!");
        break;
    }
    guess = prompt("Wrong guess, try again! (type 'quit' to exit)");
}

if(guess == favMovie) {
    console.log(`You guessed it right, my favorite movie is ${favMovie}!`);
}