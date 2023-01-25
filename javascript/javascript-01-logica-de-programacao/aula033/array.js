const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aaragorn",
  "Legolas",
  "Gimli",
];

console.log(arr);

// Adicionando elementos no Array
// push - Serve para adicionarmos elementos no final da lista

arr.push("Boromir");
console.log(arr);

// unshift  - Serve para adicionarmos elementos no começo do array

arr.unshift("Boromir");
console.log(arr);

// Removendo elementos no Array
// pop - Serve para removermos elementos que estão no final do Array

let utlimoElemento = arr.pop();
console.log(arr);
console.log(utlimoElemento);

// shift  - Serve para removermos elementos no começo do array

utlimoElemento = arr.shift();
console.log(arr);
console.log(utlimoElemento);

// Pesquisar por um Elemento
//includes

const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição de elementos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(elemento + " se encontra na posição " + i);
}
