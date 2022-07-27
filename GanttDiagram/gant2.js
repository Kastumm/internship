import fs from "fs";

class Person {
  constructor(name) {
    this.name = name;
    this.set = [];
  }
  addToSet(day, hasEmail) {
    let record = this.set.find((r) => r.day === day);
    if (!record) {
      this.set.push(new Record(day, hasEmail));
    }
  }
  }


class MonthSet {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.persons = []; //array of Person
  }
  addOrUpdatePerson(name, day, hasEmail) {
    let person = this.persons.find((p) => p.name === name);
    if (!person) {
      person = new Person(name);
      this.persons.push(person);
    }
    person.addToSet(day, hasEmail);
  }
}

class Record {
  constructor(day, hasEmail) {
    this.day = day;
    this.hasEmail = hasEmail;
  }
}

function main() {
  let data = fs.readFileSync("ganttDiagramData.json");
  let parsedData = JSON.parse(data);

  const monthSetArray = [];
  parsedData.forEach((element) => {
    const date = new Date(element.date);
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();
    const dateDay = date.getDate();

    let set = monthSetArray.find(
      (ms) => ms.year === dateYear && ms.month === dateMonth
    );
    if (!set) {
      set = new MonthSet(dateYear, dateMonth);
      monthSetArray.push(set);
    }
    set.addOrUpdatePerson(element.from, dateDay, true);
  });
  // console.log(JSON.stringify(monthSetArray));
  monthSetArray.forEach(element => {
    console.log(element);
  });
  // console.log(monthSetArray);



}
main();
