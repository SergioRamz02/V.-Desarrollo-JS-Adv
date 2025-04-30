console.log("A"); //Primero en ejecutarse

//Esto es un Task Queue
setTimeout( () =>{  //Cuarto en ejecutarse
    console.log("B");
},0);

//Esto es un microtask Queue
Promise.resolve.then(() => console.log("C")); //Tercero en ejecutarse

console.log("D"); //Segundo en ejecutarse
