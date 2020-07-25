var bigButton = document.querySelector("#generate");

var lettersSmall = "abcdefghijklmnopqrstuvwxyz";
var lettersBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var partyLetters = "$#@!~^&*()_+[]{},./<>?";
var algebraClass = "0123456789";

var lettersSmallArray = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersBigArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var partyLettersArray = "$#@!~^&*()_+[]{},./<>?".split("");
var algebraClassArray = "0123456789".split("");

var correctNumbers = false;
var correctBig = false;
var correctSmall = false;
var correctParty = false;
var lenPwdChosen = 0;

var smallestLength = 8;
var _password = "";

console.log(lettersSmallArray);
console.log(lettersBigArray);
console.log(partyLettersArray);
console.log(algebraClassArray);

lenPwdChosen = prompt("Enter the length of your password");
while (lenPwdChosen < smallestLength) {
  alert("Length of password has to be greater than 6");
  lenPwdChosen = prompt("Enter the length of your password");
} 

correctNumbers = confirm("Do you want numbers in your password?");
correctBig = confirm("Do you want uppercase letters?");
correctSmall = confirm("Do you want lowercase letters?");
confirmSpecial = confirm("Do you want special characters?");

if (correctNumbers) {
  var index = Math.floor(Math.random() * algebraClassArray.length);
  _password += algebraClassArray[index];
}
console.log(_password);

if (correctBig) {
  var index = Math.floor(Math.random() * lettersBigArray.length);
  _password += lettersBigArray[index];
}
console.log(_password);

if (correctSmall) {
  var index = Math.floor(Math.random() * lettersSmallArray.length);
  _password += lettersSmallArray[index];
}
console.log(_password);

if (confirmSpecial) {
  var index = Math.floor(Math.random() * partyLettersArray.length);
  _password += partyLettersArray[index];
}
console.log(_password);

function generatePassword() {
  var left = lenPwdChosen - _password.length;
  var allChosenStr = "";

  if (correctNumbers) {
    allChosenStr += algebraClass;
  }
  if (correctBig) {
    allChosenStr += lettersBig;
  }
  if (correctSmall) {
    allChosenStr += lettersSmall;
  }
  if (confirmSpecial) {
    allChosenStr += partyLetters;
  }
  console.log(allChosenStr);

  for (var i = 0; i < left; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    _password += allChosenStr[index];
  }
  console.log('Password before randomized order', _password);

  var pwdArr = _password.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  _password = randomOrdered.join("");

  console.log("Final password", _password);
  return _password;
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

bigButton.addEventListener("click", writePassword);