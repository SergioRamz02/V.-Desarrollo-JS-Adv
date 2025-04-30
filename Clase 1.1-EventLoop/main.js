console.log("A"); //Primero en ejecutarse

setTimeout( () =>{  //Cuarto en ejecutarse
    console.log("B");
},0);

Promise.resolve.then(() => console.log("C")); //Tercero en ejecutarse

console.log("D"); //Segundo en ejecutarse
