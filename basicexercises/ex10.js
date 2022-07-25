function reverseString(s) {

  try {
    const result = s.split("").reverse().join("");
    console.log(result);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

console.log(reverseString("1234"));
console.log(reverseString(Number(1234)));
