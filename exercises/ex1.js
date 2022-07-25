// /1. Given an array of objects that have a field called population, sort the objects by population size. Return the sorted array.

function Country(name, population) {
  this.name = name;
  this.population = population;
}

const arr = [
  new Country("Romania", 20000000),
  new Country("SUA", 340000000),
  new Country("Japan", 124000000),
];
console.log(arr);

let sorted = arr.sort((a, b) => (a.population > b.population ? -1 : 1));
console.log(sorted);

