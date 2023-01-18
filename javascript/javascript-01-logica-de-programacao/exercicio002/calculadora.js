const primeiroNumero = parseFloat(prompt("Digite um número: "));
const segundoNumero = parseFloat(prompt("Digite outro numero: "));

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;

alert(
  "Resultados entre o número " +
    primeiroNumero +
    " e o número " +
    segundoNumero +
    ": \n" +
    "\nSoma: " +
    " " +
    soma +
    "\n Subtração: " +
    " " +
    subtracao +
    "\n Multiplicação: " +
    " " +
    multiplicacao +
    "\n Divisão: " +
    " " +
    divisao
);
