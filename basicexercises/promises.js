// let prom = new Promise((res,rej)=>{
//     x=5
//     y=54
//     z=x+y
//     if(z==10){
//         res("good")
//     }
//     else{
//         rej('bad')
//     }
// })

// prom.then((message)=>{
    
//     console.log(message);
// }).catch((message)=>{
//     console.log(message); 
// })






let prom = new Promise((res,rej)=>{
    res(fetch('https://api.agify.io/?name=meelad'))
    .then(res=>res.json())
    .then(data=>console.log(data));
})
// prom.then((data)=>{
//     console.log(data);
// })
