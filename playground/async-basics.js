console.log("App Start");

setTimeout(()=>{
    console.log("App Inside 1");
}, 2000);

setTimeout(()=>{
    console.log("App Inside 2");
}, -1);

console.log("App End");