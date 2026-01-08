// Guessing Game
// User enters a max number & then tries to guess a random generated number between 1 to max.

const max = prompt("Enter the max number");
// console.log(max);

const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("Guess the Number | Type quit to Quit");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: your guess was too small. please try agian");
    } else {
        guess = prompt("hint: your guess was too large. please try agian");
    }
}