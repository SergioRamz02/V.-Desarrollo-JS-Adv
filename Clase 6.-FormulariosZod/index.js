const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));//Usar archivos de express

app.use(express.json()) //Peticiones a json

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(port);
console.log(`Servidor corriendo en http://localhost:${port}`);


