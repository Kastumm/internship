function reverseString(s) {


  try {
    const result = s.split("").reverse().join("");
    console.log(result);
  } catch (error) {
    console.log(Error.arguments);
  }
}

console.log(reverseString("1234"));
