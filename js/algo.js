let numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7, 11, -4, 0];
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i] > biggest) {
    biggest = numericArray[i];
  }
}
console.log ("the biggest element is: ",biggest);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i] < smallest) {
    smallest = numericArray[i];
  }
}
console.log ("the smallest element is: ",smallest);

let contains = false; 
for (let i = 0; i < numericArray.length && contains == false; i++) {
  if (numericArray[i] == 0) {
    contains = true;
  }
}
console.log("numericArray contains 0:", contains)