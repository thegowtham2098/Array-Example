var counter = 0;
var line=[];
for (var lines of line) {
  console.log(lines.length);
}
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
    // document.write(`<p>${i}<br></p>`);
  }
}
console.log(line);
//length of the array from 0 to 200
let result = line.every( e  => e > 0);
console.log('Total array length: ' +line.length);
//splitting array numbers which are having more than one digit
var twoThreeDigits = line;
var newArray = []
for (var i = 0; i < twoThreeDigits.length; i++) {
    if (twoThreeDigits[i] > 9 && twoThreeDigits[i] < 200) {
      newArray.push(twoThreeDigits[i]);
    }
}
console.log(newArray);

//addition function which the number is a sum of 9
  // function addTwoDigitNumbers(array) {
  //   var sum = 9;
  //   var newArray = [];
  //   array.forEach(function(element) {
  //     // Checks if character is a letter and not a number
  //     if (typeof element == "number" || element.length <=2) {
  //       if(element % sum == 0 && element != 0)
  //         newArray.push(sum);
  //       else 
  //         newArray.push(element%sum);
  //     } 
  //     // console.log(newArray.length);
  //   });
  //   return newArray;  
  // }

  // console.log(addTwoDigitNumbers(line));




// function add_two_digits(n)
// {
//   sum = 9;
//   if (a + b == sum)  {
//     return n % 10 + Math.floor(n / 10) ;
//   }
//   else {
//     return false;
//   }
   
// }
// console.log(add_two_digits(18));






