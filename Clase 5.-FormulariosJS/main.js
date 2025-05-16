// Manejo de Formularios con JavaScript

const registerButton = document.querySelector("#register-button");
const togglePasswordButtons = [...document.querySelectorAll(".toggle-password")];

const handleRegister = (e)=>{
//Previniendo el evento por default del JS
    e.preventDefault();
    const form = document.querySelector(".form-container form");//Guarda el mismo form
    const userEmail = form.children[1].value;
//Validar el email
    if(!userEmail){ //Cuando hay un string vacío lo considera como false
        alert("Debes ingresar un correo");
        return;
    }
    const userPassword = form.children[3].value;
    const userConfirmationPassword = form.children[5].value;
// Validar que ambas contraseñas sean iguales
    if (userPassword !== userConfirmationPassword) {
        alert("Ambas contraseñas deben ser iguales");
        return;
    }
//Fortaleza de la contraseña
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regexPassword.test(userPassword)) {
        alert("Tu contraseña debe contener una letra mayúscula, una minuscula, un número, un carácter especial y debe ser de al menos 8 caracteres");
        return;
    }
    console.log([userEmail,userPassword,userConfirmationPassword]);
}

const handleTogglePassword = (e)=>{
    e.preventDefault();
    const input = e.target.parentElement.children[0];
    if (input.type === "password") {
        input.type = "text";
    }else {
        input.type = "password";
    }
}

registerButton.addEventListener("click", (e)=> handleRegister(e));
togglePasswordButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{ handleTogglePassword(e);})
})

