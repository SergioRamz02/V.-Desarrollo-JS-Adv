// Para manejar promesas empleamos fetch
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => {console.log("La promesa ya tiene respuesta");})
// Es importante no colocar ; hasta el último códico a ejecutar

//Solicitar todos los elementos de una API con un ciclo for
const todosArray =[];

for(let i=1; i<50; i++){
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    .then((response) => response.json())
    .then((data) => todosArray.push(data))
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("La promesa ya tiene respuesta");
    })
}

console.log(todosArray);

//Función para imprimir todos los elementos con un forEach
function printTodos(todos){
    todos.forEach(todo ={
        console.log(todo.title);
    });
}*/

//AXIOS ->Me permite utilizar de manera mas fácil las peticiones

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => console.log(response.data))
.catch(function(error){
    console.log(error);
})
.finally(function(){});

/* Estructura para usar await
const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
*/