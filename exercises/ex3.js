// //3. Write a function that takes an array of strings as argument. Group those strings by their first letter.
// // Return an object that contains properties with keys representing first letters
// // The values should be arrays of strings containing only the corresponding strings
// // For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// // Ex: { a: ['Alf', 'Alice'], b: ['Ben']}

const arr = ["this", "that", "home", "hotel", "there", "wolf", "what"];

function itGroups(anArray) {
  let letterObj = {};
  anArray.forEach((element) => {
    let startsWith = element[0];

    let innerArr = [];
    if (letterObj[startsWith] === undefined) {
      innerArr.push(element);
      letterObj[startsWith] = innerArr;
    } else {
      letterObj[startsWith].push(element);
    }
  });
  return letterObj;
}

console.log(itGroups(arr));
