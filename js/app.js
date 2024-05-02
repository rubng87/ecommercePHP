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
  let nif = formData.get("nif").toUpperCase().trim();
  let direccion = formData.get("direccion").trim();

  // Pattern nombre
  const patternNombre = /^[a-zA-ZáéíóúàèìòùüñÑçÇÁÉÍÓÚÀÈÌÒÙÜ\s]+$/;
  if (!validarItems(nombre, patternNombre, "nombre")) {
    return;
  }
  if (!validarItems(apellidos, patternNombre, "apellidos")) {
    return;
  }
  if (password1 !== password2) {
    document.getElementById("errorPassword").innerHTML =
      "<p>Las contraseñas no coinciden</p>";
    document.getElementById("password2").value = "";
    return;
  }


  const patternNif = /[0-9A-Z][0-9]{7}[A-Z]/;
  // if (nif.length < 9 || validarItems(nif, patternNif, "nif")) {
    console.log(patternNif.test(nif));

  if (nif.length < 9 || !patternNif.test(nif)) {
    document.getElementById("error-nif").style.display = "block";
    document.getElementById("error-nif").innerHTML = "<p>NIF incorrecto</p>";
    return;
  } else {
    document.getElementById("error-nif").style.display = "none";
  }

  const patternDireccion = /^[a-zA-ZáéíóúàèìòùüñÑçÇÁÉÍÓÚÀÈÌÒÙÜ0-9\s]+$/;
  if (!validarItems(direccion, patternNombre, "direccion")) {
    return;
  }

  // Generar el objeto con los datos
  const data = {
    nombre,
    apellidos,
    nif,
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

function validarItems(text, pattern, attribute) {
  if (pattern.test(text)) {
    document.getElementById("error-" + attribute).style.display = "none";
    return true;
  } else {
    console.log(attribute + " is not a valid");
    document.getElementById("error-" + attribute).style.display = "block";
    document.getElementById(
      "error-" + attribute
    ).innerHTML = `<p>${text} no es válido</p>`;
    return false;
  }
}