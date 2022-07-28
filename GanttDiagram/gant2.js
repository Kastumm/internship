import fs from "fs";

class Person {
  constructor(name) {
    this.name = name;
    this.set = [];
    this.activity = "";
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
    this.dates = this.getDaysInMonth(this.year, this.month); // Array of dates in the Month
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
  getDaysInMonth(year, month) {
    let t = new Date(year, month, 0).getDate();
    const numberOfDaysArray = [];
    for (let i = 1; i <= t; i++) {
      numberOfDaysArray.push(i);
    }
    return numberOfDaysArray;
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

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < monthSetArray.length; i++) {
    const monthStringName = monthNames[monthSetArray[i].month];
    console.log(
      `${monthStringName} ${monthSetArray[i].year} ${monthSetArray[i].dates}`
    );

    ////
    const persons = monthSetArray[i].persons;
    const dates = monthSetArray[i].dates;

    persons.forEach((person) => {
      const records = person.set;

      dates.forEach((date) => {
        if (records.find((d) => d.day === date)) {
          person.activity += "==";
        } else {
          person.activity += "--";
        }
      });

      console.log(person.name, person.activity);
    });
  }
}

main();
