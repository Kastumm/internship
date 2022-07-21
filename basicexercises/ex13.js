function getCount(objects) {
  let counter = 0;

  objects.forEach((element) => {
    if (element.x === element.y) {
    //   console.log(element);
      counter += 1;
    //   console.log(counter);
    }
  });

  return counter;
}

const arrObj = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
// console.log(getCount(arrObj));

console.log(getCount(arrObj));
