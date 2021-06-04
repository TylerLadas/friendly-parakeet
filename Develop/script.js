// Assignment code here

// password array variables //
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

// user choice variables //
let passwordLength = "";
let includeLower;
let includeUpper;
let includeNumbers; 
let includeSpecial;

// chosen password variable //
let chosenCharacters = [];

// prompt how many characters //
function generatePassword() {
  passwordLength = window.prompt("Choose length of password between 8 and 128 characters");

  // check password length //
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters, try again.");
    passwordLength = window.prompt("Choose length of password between 8 and 128 characters");
  }

  // confirm characters to include in password //
  includeLower = confirm("Click OK to use lowercase letters?");
  includeUpper = confirm("Click OK to use uppercase letters?");
  includeNumbers = confirm("Click OK to include numbers?");
  includeSpecial = confirm("Click OK to include special characters?");

    // if no characters chosen //
    while (includeLower === false && includeUpper === false && includeNumbers === false && includeSpecial === false) {
      window.alert("At least one type of character must be slected!");
      includeLower = confirm("Click OK to use lowercase letters?");
      includeUpper = confirm("Click OK to use uppercase letters?");
      includeNumbers = confirm("Click OK to include numbers?");
      includeSpecial = confirm("Click OK to include special characters?");
    }

  // select arrays for password //

    // all 4 selected //
    if (includeLower && includeUpper && includeNumbers && includeSpecial) {
      chosenCharacters = lowerLetters.concat(upperLetters, numbers, special);
    // 3 selected //
    } else if (includeLower && includeUpper && includeNumbers) {
      chosenCharacters = lowerLetters.concat(upperLetters, numbers)
    } else if (includeLower && includeUpper && includeSpecial) {
      chosenCharacters = lowerLetters.concat(upperLetters, special);
    } else if (includeUpper && includeNumbers && includeSpecial) {
      chosenCharacters = upperLetters.concat(numbers, special);
    
    // 2 selected //
    } else if (includeLower && includeUpper) {
      chosenCharacters = lowerLetters.concat(upperLetters);
    } else if (includeLower && includeNumbers) {
      chosenCharacters = lowerLetters.concat(numbers);
    } else if (includeLower && includeSpecial) {
      chosenCharacters = lowerLetters.concat(special);
    } else if (includeUpper && includeNumbers) {
      chosenCharacters = upperLetters.concat(numbers);
    } else if (includeUpper && includeSpecial) {
      chosenCharacters = upperLetters.concat(special);
    } else if (includeSpecial && includeNumbers) {
      chosenCharacters = special.concat(numbers);
    
    // 1 selected //
    } else if (includeLower) {
      chosenCharacters = lowerLetters;
    } else if (includeUpper) {
      chosenCharacters = upperLetters
    } else if (includeNumbers) {
      chosenCharacters = numbers;
    } else  if (includeSpecial) {
      chosenCharacters = special;
    }

  // select array items for password//
  // set variable to string//
  let randomPassword = "";

  for (var i= 0; i < passwordLength; i++) {
    randomPassword = randomPassword + chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  }
  return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
