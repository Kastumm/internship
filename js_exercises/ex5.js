// 5. An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.
//     Determine if the input number is an Armstrong number. Return either true or false.
//     Ex: 1^3 + 5^3 + 3^3 = 153

function armstrongNumber(num) {
  const numberLength = num.toString().length;
  const numberArray = num.toString().split("");
  const resultsArr = [];

  numberArray.forEach((element) => {
    let poweredNumber = Math.pow(element[0], numberLength);
    resultsArr.push(poweredNumber);
  });

  const sumNumber= resultsArr.reduce((x,y)=>x+y);

  if(sumNumber===num)return "true";
  if(sumNumber!=num)return 'false';
}

console.log(armstrongNumber(371));
