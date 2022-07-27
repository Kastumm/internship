// 4. Create a class called CustomList with these methods:
//     insertFirst(data)
//     insertLast(data)
//     getFirst()
//     getLast()
// Make sure you test the functionality by creating some objects.
// Bonus: Create a class for a LinkedList.

class CustomList {
  constructor() {
    this.list = [];
  }
  insertFirst(data) {
    this.data = data;
    this.list.unshift(data);
  }
  insertLast(data) {
    this.data = data;
    this.list.push(data);
  }
  getFirst() {
    return this.list[0];
  }
  getLast() {
    const list = this.list;
    return list[list.length - 1];
  }
}

//check
const obj1 = new CustomList();
obj1.insertFirst("Hello");
obj1.insertLast("turn arround");
obj1.insertFirst("this is me");

console.log(obj1.getFirst());
console.log(obj1.getLast());
