class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  perimeter() {
    // return this.arr;
    let arr= this.arr;
    return arr.reduce((x, y) => x + y);
  }


}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());
console.log(triangle.arr);