// Assignment code here
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&*_+=";

const passwordLength = window.input("Choose length of password between 8 and 128 characters.");
const includeLower = window.prompt("Do you want to use lowercase letters?");
const includeUpper = window.prompt("Do you want to use uppercase letters?");
const includeNumbers = window.prompt("Do you want to include numbers?");
const includeSpecial = window.prompt("Do you want to include special characters?")



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
