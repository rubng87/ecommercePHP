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

// Capturar el formulario
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Método 1 con el id
  // let nombre = document.getElementById("nombre").value.trim();
  // // console.log(nombre);
  // let apellidos = document.getElementById("apellidos").value.trim();

  // let password1 = document.getElementById("password1").value;
  // let password2 = document.getElementById("password2").value;

  // let email = document.getElementById("emailUp").value.trim();
  // let nif = document.getElementById("nif").value.trim();
  // let direccion = document.getElementById("direccion").value.trim();
  // let ciudad = document.getElementById("ciudad").value.trim();
  // let telefono = document.getElementById("telefono").value.trim();

  // Obtener datos del formulario
  const formData = new FormData(signupForm);

  // Obtener cada valor
  let nombre = formData.get("nombre").trim();
  let apellidos = formData.get("apellidos").trim();
  let password1 = formData.get("password1").trim();
  let password2 = formData.get("password2").trim();

  // Pattern nombre
  const patternNombre = /^[a-zA-ZáéíóúàèìòùüñÑçÇÁÉÍÓÚÀÈÌÒÙÜ\s]+$/;
  if (!validarNombre(nombre, patternNombre, "nombre")) {
    return;
  }
  if (!validarNombre(apellidos, patternNombre, "apellidos")) {
    return;
  }


  // if (!patternNombre.test(nombre)) {
  //   document.getElementById("error-nombre").style.display = "block"
  //   document.getElementById("error-nombre").innerHTML =
  //     "<p>Nombre no válido</p>";
  //   return;
  // }
  // let apellidos= formData.get("apellidos").trim();
  // if (!patternNombre.test(apellidos)) {
  //   document.getElementById("errorNombre").style.display = "block"
  //   document.getElementById("errorNombre").innerHTML =
  //     "<p>Nombre no válido</p>";
  //   return;
  // }
  // console.log(nombre);

  // Generar el objeto con los datos
  const data = {
    nombre,
    apellidos,

  };
  // let data2 = JSON.stringify(data);
  // console.log(data["nombre"]);

  fetch("php/signup.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

  // Con fetch se altera el flujo lineal del código
  // console.log("Linea 60");

  // const data = {
  //   nombre,
  //   apellidos,
  //   password1,
  //   password2,
  //   email,
  //   nif,
  //   direccion,
  //   ciudad,
  //   telefono
  // }

  /*
  let apellidos = document.getElementById("apellidos").value.trim();

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
  "nombre": nombre,
  "apellidos": apellidos,
  "password": password1,
  "email": email,
  "nif": nif,
  "direccion": direccion,
  "ciudad": ciudad,
  "telefono": telefono
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

  */
});

// function corregirNombre(nombre) {
//   let nombreCorregido = "";
//   let temp = nombre.split(" ");

//   // de del el la los las y i

//   return nombreCorregido;
// }

function validarNombre(text, pattern, attribute) {
  if (pattern.test(text)) {
    document.getElementById("error-" + attribute).style.display = "none";
    return true

  } else {
    document.getElementById("error-" + attribute).style.display = "block";
    document.getElementById("error-" + attribute).innerHTML =
      `<p>${text} no es válido</p>`;
    return false;
  }
}