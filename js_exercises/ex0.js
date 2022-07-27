
//0. Choose a public api, make a call and get the result by using both then method and async/await as well.
import fetch from 'node-fetch';

const fetchPromise = fetch("https://api.agify.io/?name=emil");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});

async function getData(){
    const response = await fetch("https://api.agify.io/?name=emil")
    const data = await response.json()
    console.log(data);
}


getData();