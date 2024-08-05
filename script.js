let animal = "Monkey";
let number = 7;
let total = number * 4;
let ripe = true;
let userInput = prompt("Enter a color:")

let story = "Once upon a time, a " + animal + " stole " + total + " bananas from the deli. " + "The monkey knew they were " + (ripe ? "ripe." : "unripe.") + " He stuffed them in his " + userInput + " coat.";
console.log(story);