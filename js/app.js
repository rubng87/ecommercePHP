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
  // console.log(nombre);

  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  let email = document.getElementById("emailUp").value.trim();
  let nif = document.getElementById("nif").value.trim();
  let direccion = document.getElementById("direccion").value.trim();
  let ciudad = document.getElementById("ciudad").value.trim();
  let telefono = document.getElementById("telefono").value.trim();


  if (password1 !== password2) {
    document.getElementById("errorPassword").innerHTML =
      "<p>Las contraseñas no coinciden</p>";
    document.getElementById("password2").value = "";
    return;
  }
  
  // Objeto tipo JSON
let datos = {
    "nombre" : nombre,
    "apellidos" :apellidos,
    "password" : password1,
    "email" : email,
    "nif" : nif,
    "direccion" : direccion,
    "ciudad" : ciudad,
    "telefono" : telefono,
}

// Enviar el JSON al fichero destino
fetch('../php/signup.php', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
        'Content-Type': 'application/json'
    }
})
  // signupForm.reset();
});

function corregirNombre(nombre) {
  let excepciones = ["de", "del", "el", "la", "los", "las"];

  let nombreArray = [];

  let nombreCorregidoArray = nombre.toLowerCase().split(" ");
  nombreCorregidoArray.forEach((element) => {
    if (excepciones.includes(element)) {
      nombreArray.push(element);
    } else {
      nombreArray.push(element.charAt(0).toUpperCase() + element.slice(1));
    }
  });

  return nombreArray.toString().replaceAll(",", " ");

  // return nombreCorregido
}
