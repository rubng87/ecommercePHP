// Ocultar formulario de alta 
document.getElementById("signup").style.display = "none";

// Funciones para mostrar y ocultar formularios
function mostrarFormularioAlta() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function volverInicio() {
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "none";
}


const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim().toLower;
    console.log(nombre);
});
//     let password1 = document.getElementById("password1").value;
//     let password2 = document.getElementById("password2").value;

//     if (password1!== password2) {
//         document.getElementById("errorPassword").innerHTML = "<p>Las contraseñas no coinciden</p>";
//         document.getElementById("password2").value = ""
//         return;
//     } else {
//         document.getElementById("errorPassword").innerHTML = "<p>Las contraseñas coinciden</p>";
//         return;
//     }

//     signupForm.reset();
// });

function corregirNombre(nombre) {

    let nombreCorregido = "";
    let temp = nombre.split(" ");

    // de del el la los las
   
   
    return nombreCorregido
}

