let numbers = [1, 2, 3, 4, 5];

function oddOrEven(numArr) {

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      numArr[i] = numArr[i] * 2;

    }
    if (numArr[i] % 2 === 1) {
      numArr[i] = numArr[i] * 3;
    }
  }
  return numArr;
}

console.log(oddOrEven(numbers));
console.log(numbers);
