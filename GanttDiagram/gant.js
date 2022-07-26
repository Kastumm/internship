import fs from "fs";

let data = fs.readFileSync("ganttDiagramData.json");
let parsedData = JSON.parse(data);

const goodData = [];

//Collects good data
for (let i = 0; i < parsedData.length; i++) {
  const from = parsedData[i].from;

  const date = new Date(parsedData[i].date);
  const dateDay = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();

//   goodData.push({from,date})
  goodData.push({ from},{dateMonth, dateDay, dateYear });
}


const datesCollection=[];
for (let i = 0; i < parsedData.length; i++) {
    const from = parsedData[i].from;
  
    const date = new Date(parsedData[i].date);
    datesCollection.push(date);
  }
  

const sortedDates=datesCollection.sort((a,b)=>a-b);
    

function dateRange(startDate, endDate, steps = 1) {
    const dateArray = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate));
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray;
  }
  
  const allDates = dateRange(sortedDates[1], sortedDates[sortedDates.length-1]);
//   console.log(allDates);


const goodDates=[]

for(let i=0;i<allDates.length;i++){
  const dateDay = allDates[i].getDate();
  const dateMonth = allDates[i].getMonth();
  const dateYear = allDates[i].getFullYear();

  goodDates.push({dateMonth, dateDay, dateYear });
}

for(let i=0;i<goodData.length;i++){

}











// /////////
// //Number of days in the month
// const getDays = (year, month) => {
//   return new Date(year, month, 0).getDate();
// };


// const resultsPeople = [];
// for (let i = 0; i < goodData.length; i++) {
//   if (!resultsPeople.includes(goodData[i].from)) {
//       resultsPeople.push(goodData[i].from)
//     }
// }

// // const numberOfDays = getDays(goodData[i].dateYear, goodData[i].dateMonth);
// for (let i = 0; i < results.length; i++) {
//   console.log(results[i]);
// }














// const results =[]

// for (let i = 0; i < goodData.length; i++) {
//     if(goodData[i].from!=results[i].from){
//         results.push()
//     }
// }

//   for(let i=0; i<datesInAMonth.length; i++){
// for(let i=0; i<goodData.length; i++){
// if(goodData[i].dateMonth===datesInAMonth[i])

// }

//   }

// const results = [];
// for(let i=0; i<goodData.length; i++){
//     if(goodData[i].dateMonth==datesInAMonth[i]){
//         results.push(goodData[i]);
//     }
// }

// console.log(results);
//Groups data by 'from:'
//   const groupByFrom = goodData.reduce((group, product) => {
//     const { from } = product;
//     group[from] = group[from] ?? [];
//     group[from].push(product);
//     return group;
//   }, {});

//   console.log(results);
