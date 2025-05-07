let value = 1;

setTimeout(() =>{
    value = 2;
}, 1000);

console.log(value);

setTimeout(() =>{
    console.log(value);
    
}, 2000);