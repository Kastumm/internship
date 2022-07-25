class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  perimeter() {
    let arr= this.arr;
    return arr.reduce((x, y) => x + y);
  }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());