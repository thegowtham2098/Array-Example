var counter = 0;
var line=[];

//loop of array elements from 0 to 200
for (var i = 0; i <= 200; i++) {
  if (i % 9 == 0){
    if (line.length < ++length) {
      line[counter] = i;
      counter++;
    } else {
      console.log(line);
      line=[];
      counter = 0;
      line[counter] = i;
      counter++;
    }
  }
}
console.log(line);

//length of the array from 0 to 200
let result = line.every( e  => e > 0);
console.log('Total array length: ' +line.length);

//splitting array numbers which are having more than one digit
var twoThreeDigits = line;
var newArray = [];
for (var i = 0; i < twoThreeDigits.length; i++) {
    if (twoThreeDigits[i] > 9 && twoThreeDigits[i] < 200) {
      newArray.push(twoThreeDigits[i]);
    }
}
console.log(newArray);

// addition function which the number is a sum of 9
  function addTwoDigitNumbers(array) {
    var sum = 9;
    var newArray2 = [];
    array.forEach(function(element) {
      // Checks if character is a letter and not a number
      if (typeof element == "number" || element.length <=2) {
        if(element % sum == 0 && element != 0)
          newArray2.push(sum);
        else 
          newArray2.push(element%sum);
      } 
    });
    return newArray2;  
  }
  console.log(addTwoDigitNumbers(newArray));