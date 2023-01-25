var words = [
  "water",
  "movie",
  "monkey",
  "snake",
  "paint",
  "computer",
  "keyboard",
  "machine",
  "tiger",
  "lion",
  "color",
  "coffee",
  "poor",
  "elephant",
  "pencil",
  "bottle",
];

var random = Math.floor(Math.random() * words.length);

var guess = words[random];
var dashed_arr = [];
// add no of blank space in Dash array
for (var i = 0; i < guess.length; i++) {
  dashed_arr[i] = "_ ";
}

// show 2 random letters in the word
for (var i = 0; i < 2; i++) {
  var random_letter = Math.floor(Math.random() * guess.length);

  dashed_arr[random_letter] = guess[random_letter];
}

//split the word and make word-array
var guess_arr = guess.split("");

//convert blank space array to string
var dashed_str = dashed_arr;
alert(dashed_str.join(""));

var counter = 0;
var letter_counter = 0;
var flag = -1;

// hangman game starts
while (counter < 10) {
  var user_input = prompt("Enter a letter");

  //get the no of same letters present in the word
  var indexArray = [];

  for (var i = 0; i < guess.length; i++) {
    if (guess_arr[i] == user_input) {
      //appends the index of the letter in the word to the index array
      indexArray.push(i);
    }
  }

  //checks if user_input is present in the word
  if (guess_arr.indexOf(user_input) !== -1) {
    //if its present then blank space is replaced by user_input
    for (var i = 0; i < indexArray.length; i++) {
      //if more than one letter is present then loop runs n times
      dashed_arr[indexArray[i]] = user_input;
      dashed_str = dashed_arr.join("");
      alert(dashed_str);
    }

    //if the blank/dashed string is equal then flag is set to 0
    if (dashed_str == guess) {
      flag = 0;
      break;
    }
  }
  //else chances are decreased
  else {
    counter++;
    if (counter == 10) {
      flag = 1;
    }
    alert(`you have ${10 - counter} chance left`);
  }
}

if (flag === 0) alert("You win");
else {
  alert(`Better luck next time\nRight answer - ${guess}`);
}
