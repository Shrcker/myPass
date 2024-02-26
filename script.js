// Assignment Code
var generateBtn = document.querySelector("#generate"); // Grabs the input button by html id.

const dictionary = { // Generated numbers use dictionary object and arrays
  int: "1234567890".split(''),
  char: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  special: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('')
}

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))]; // Generates a random number between 0 and 9.
}

function generatePassword() { // Function that runs when generate button is pressed
  var finalPass = [];
  var characterLimit = window.prompt("How long should our Password be? (8-128 Limit)"); 
  if (characterLimit >= 8 && characterLimit <= 128) { // Asks for character length, then checks if it fits within limit.
    var answer = window.prompt("What kind of characters should be included? Choose from letters, numbers, or symbols (Please choose at least one).", "Numbers, Letters, or Symbols");
    if (answer.toLowerCase() === "numbers") {
      for (var i = 0; i < characterLimit; i++) {
        finalPass.push(get_random(dictionary.int)); // Runs random number function to randomly pull from the array.
      } return finalPass.join(''); // Numbers in generated array now display without commas or spaces.
    }
  } alert("ERROR"); // Debug error alert
}

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); // Prevents JavaScript from running default click event
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //Grabs <textarea>

  passwordText.value = password; // Final password is a function.
  console.log("Password Generated"); // Debug message to see that the button has sent a signal

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
