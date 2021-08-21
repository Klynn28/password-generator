// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!#$%&()*+<_>?:;<=>?@[]|^_'{\}~";
var choiceChar = [];


function generatePassword() {
  var password = "";
  var length = 15;
  var hasUpperCase = confirm("Would you like uppercase characters included?");
  var hasLowerCase = confirm("Would you like lowercase characters included?");
  var hasSpecial = confirm("Would you like special characters included?");
  var hasNumbers = confirm("Would you like numbers included?");

  if (hasUpperCase) {
    var random = Math.floor(Math.random() * upperCase.length);
    var character = upperCase[random];
    choiceChar.push(character);
    console.log(character);
  }

  if (hasNumbers) {
    var random = Math.floor(Math.random() * number.length);
    var character = number[random];
    choiceChar.push(character);
    
  }

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * upperCase.length);
    password += upperCase[random];
  }

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * number.length);
    password += number[random];
  }


  return password;

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
