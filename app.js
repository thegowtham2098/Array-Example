// var myArray = []; 
// var fullArray = 0;

// for (i=0; i <= 200; i++) {
//     // console.log([i]);
//     fullArray = fullArray + 1;
//     // console.log(fullArray);
   
//     myArray.push(fullArray);
//     console.log(myArray);
// }
// var myArr = [];
// for(var i = 1; i <= 200; i++) {
//     if (i % 1 == 0) {
//       document.write(i +"<br>")
//     }
// }

var counter = 0;
var line=[];

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
    document.write(`<p>${i}<br></p>`);
  }
}
console.log(line);

let result = line.every( e  => e > 0);
console.log('Total array length: ' +line.length);
// function add_two_digits(n)
// {
//    return n % 10 + Math.floor(n / 100) ;
// }
// console.log(add_two_digits(126));

