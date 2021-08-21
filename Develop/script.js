// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&()*+<_>?:;<=>?@[]|^_'{\}~";

function generatePassword() {
  var password = "";
  var length = 8;
  var upperCase = confirm("Would you like uppercase characters included?");
  var lowerCase = confirm("Would you like lowercase characters included?");
  var specialChar = confirm("Would you like special characters included?");
  var numbers = confirm("Would you like numbers included?");

  if (upperCase) {
    var random = Math
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
