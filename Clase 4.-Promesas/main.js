//Promesas

const numbers = [1,2,3,4,5]; //Declaración directa (Sugar Syntaxis)
const numeros = new Array(5); //Instanciar un arreglo

const resolveAfter = ()=>{
    return new Promise((resolve, reject)=>{
        let value = true;
        setTimeout(()=>{
            //Operador ternario ?->Si se cumple :->Si no se cumple
            return (value) ? resolve(numbers) : reject("Rechazado");
        }, 2000)
    })
}

//Async y Await 

//Llamada asíncrona
const asyncCall = async ()=>{
// Manejo de errores con try y catch
/* try -> Maneja un bloque de código a ejecutar
  catch -> Lo que sucede cuando hay un error*/
    try{
        console.log("Llamando a la función");
        const result = await resolveAfter(); //Await->Nos permite ver el resultado de como esta funcionando sin necesidad de influir
        return result;
    } catch(error){
        console.log(error);
        return new Promise((resolve, reject) => reject("La petición no paso :("))
    }
}

asyncCall();

//Elements se conviente en una promesa
const elements = asyncCall();

//Esta estructura se usa ya que elements es una promesa
elements
.then((value)=>console.log(value))
.catch((err)=>console.log(err))

//Hacer peticiones a una API con async y await
const apiCall = async (url, property=null)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(property){
            console.log(data[property]);
        }else{
            console.log(data);
        }
    } catch(error){
        console.log(error);
    }
}

apiCall("https://rickandmortyapi.com/api/character", "results");
