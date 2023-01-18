/* 
Visitando novas cidades:
Escreva um  programa em JavaScript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
 */

const turista = prompt("Olá turista! Qual o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim / Não)");

while (continuar === "sim" || continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += `- ${cidade} \n`;
  contagem++;
  continuar = prompt("Você visitou mais alguma cidade? (Sim / Não)");
}

alert(
  `Turista: ${turista}\n 
  Quantidade de cidades visitadas: ${contagem}\n
  As cidades visitadas por ele, são: \n
  ${cidades}`
);
