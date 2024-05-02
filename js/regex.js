let nombre = "Maria José"
nombre = "Pep"
// nombre = "anna"

const pattern = /^[a-zA-ZáéíóúàèìòùüñÑçÇÁÉÍÓÚÀÈÌÒÙü\s]+$/

console.log(nombre.match(pattern));
console.log(nombre.search(pattern));
console.log(nombre.replace(pattern, "A"));
console.log(pattern.test(nombre));