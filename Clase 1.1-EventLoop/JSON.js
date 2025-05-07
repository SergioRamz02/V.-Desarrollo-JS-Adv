const token = {
    uuid: "eyENFGTsdtrhic78vdvzl56",
    timestamp: "2025-05-06T19:45:19+00:00"
};

const tokenJSON = JSON.stringify(token);

//Creación en el localStorage
localStorage.setItem("token",tokenJSON);

//object to string
const browserToken = localStorage.getItem("token");
console.log(browserToken);

//string to object
const parsedToken = JSON.parse(browserToken);
console.log(parsedToken);

//Remover del localStorage
localStorage.removeItem("token");

