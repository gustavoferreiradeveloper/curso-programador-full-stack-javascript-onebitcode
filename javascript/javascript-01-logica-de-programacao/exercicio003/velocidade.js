/* Escreva um programa em JavaScript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é o mais rápido (ou que as velocidades são iguais se este for o caso) */
const primeiroVeiculo = prompt("Qual veiculo você está usando?");
const velocidadeDoPrimeiro = prompt("Qual a velocidade dele? em Km/H");
const segundoVeiculo = prompt("Qual veiculo você está usando?");
const velocidadeDoSegundo = prompt("Qual a velocidade dele? em Km/H");

if (velocidadeDoPrimeiro > velocidadeDoSegundo) {
  alert(`O ${primeiroVeiculo} é o mais veloz`);
} else if (velocidadeDoSegundo > velocidadeDoPrimeiro) {
  alert(`O ${segundoVeiculo} é o mais veloz`);
} else {
  alert("Ambos veículos tem a mesma velocidade!");
}
