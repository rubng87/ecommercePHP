


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