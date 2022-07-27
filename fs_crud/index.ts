import * as fs from "fs";

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//mocking Data
function mockingData(array: Person[]): void {
  array.push(new Person("Emil", 24));
  array.push(new Person("Eliodor", 25));
  array.push(new Person("John Doe", 36));
}


function writeFileAsync(arrayOfPersons) : Promise<string> {
    return new Promise((resolve,reject)=>{        
        const data =  JSON.stringify(arrayOfPersons);
          fs.writeFile("persons.json", data, (error) => {
          if (error) {
            reject('Not Good, there is some Error');
          } else {
            resolve(`File written!`);
          }
        });})
}

function readFile(fileName) {
  try {
    let rawData = fs.readFileSync(fileName, "utf8");
    console.log("Data Extracted");
    return rawData;
  } catch {
    console.log("No File Exists");
  }
}

function deleteFile(fileName) {
  try {
    fs.unlinkSync(fileName);
    console.log("File Deleted");
  } catch {
    console.log("No File Exists");
  }
}

function addOrUpdate(fileName) {
    fs.renameSync(fileName, 'newpersons.json')
    console.log('File Renamed');
}

async function main() {
  const personsArray: Person[] = [];
  mockingData(personsArray);
  const message = await writeFileAsync(personsArray) ; 
  console.log(message);
  const data = readFile('persons.json')
  console.log(data);
  addOrUpdate('persons.json')
  deleteFile('newpersons.json')
  
}

main();
