// Assignment Code
var generateBtn = document.querySelector("#generate"); // Grabs the input button by html id.

var finalPass = [];

const dictionary = { // Generated numbers use dictionary object and arrays
  int: '1234567890'.split(''),
  char: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  special: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  format: []
};

const choices = {
  charNames: ["numbers", "letters", "symbols"],
  charLists: [dictionary.int, dictionary.char.split(''), dictionary.special.split('')]
};

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function passGenLoop (limit) {
  for (var i = 0; i < limit; i++) {
    finalPass.push(get_random(dictionary.format));
  }
}

function generatePassword() { // Function that runs when generate button is pressed
  var newDict;
  var characterLimit = window.prompt("How long should our Password be? (8-128 Limit)"); 
  if (characterLimit >= 8 && characterLimit <= 128) { // Asks for character length, then checks if it fits within limit.
    var answer = window.prompt("What kind of characters should be included? Choose from letters, numbers, or symbols (Please choose at least one).", "Numbers, Letters, or Symbols");

    if (answer.toLowerCase() === choices.charNames[0]) {

      var addMore = window.confirm("Would you like to add another character type?");
      writePassList(0);
      if (addMore) {
        addMore = window.confirm("Would you like to add letters?");

        if (addMore) {
          writePassList(1);
          addMore = window.confirm("Would you like to add symbols too?");

          if (addMore) {
            writePassList(2);
            passGenLoop(characterLimit);

          } return finalPass.join(''); 
        } passGenLoop(characterLimit); return finalPass.join('');
      } passGenLoop(characterLimit); return finalPass.join('');

    } else if (answer.toLowerCase() === choices.charNames[1]) {
      var addMore = window.confirm("Would you like to add another character type?");
      writePassList(1);
      if (addMore) {
        addMore = window.confirm("Would you like to add numbers?");
        if (addMore) {
          writePassList(0);
          addMore = window.confirm("Would you like to add symbols too?");
          if (addMore) {
            writePassList(2);
            passGenLoop(characterLimit);

          } return finalPass.join(''); 
        } passGenLoop(characterLimit); return finalPass.join(''); 
      } passGenLoop(characterLimit); return finalPass.join(''); 

    } else if (answer.toLowerCase() === choices.charNames[2]) {
      var addMore = window.confirm("Would you like to add another character type?");
      writePassList(2);
      if (addMore) {
        addMore = window.confirm("Would you like to add numbers?");
        if (addMore) {
          writePassList(0);
          addMore = window.confirm("Would you like to add letters too?");
          writePassList(1);
          passGenLoop(characterLimit);

        } return finalPass.join(''); 
      } passGenLoop(characterLimit); return finalPass.join(''); 
    } passGenLoop(characterLimit); return finalPass.join(''); 

  } alert("ERROR"); // Debug error alert
  function writePassList (choice) {
    newDict = dictionary.format.concat(choices.charLists[choice]);
}
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
