const dayString="7/22/2022";

const d=new Date(dayString);
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day= weekday[d.getDay()];

console.log(day);
