/* Nesse exercício:
Faremos um conversor de medidas, usando o SWITCH:

Escreva um programa em JavaScript que funcione como um conversor de medidas.
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (use o break e o default pra isso)
*/

const metros = parseFloat(
  prompt("Digite o valor a ser convertido em metros: ")
);

let unidadeDeMedida =
  prompt(`Escolha a unidade de medida que gostaria de converter o valor digitado: (Digite apenas a sigla) \n
Milímetro (mm)\n
Centímetro (cm)\n
Decímetro (dm)\n
Decâmetro (dam)\n
Hectômetro (hm)\n
Quilômetro (km)`);

let conversao;

switch (unidadeDeMedida) {
  case "mm":
    conversao = metros * 1000;
    alert(
      `${metros} metro(s) convertido(s) em milímetros serão ${conversao} milímetros`
    );
    break;
  case "cm":
    conversao = metros * 100;
    alert(
      `${metros} metro(s) convertido(s) em centímetros serão ${conversao} centímetros`
    );
    break;
  case "dm":
    conversao = metros * 10;
    alert(
      `${metros} metro(s) convertido(s) em decímetros serão ${conversao} decímetros`
    );
    break;
  case "dam":
    conversao = metros / 10;
    alert(
      `${metros} metro(s) convertido(s) em decâmetros serão ${conversao} decâmetros`
    );
    break;
  case "hm":
    conversao = metros / 100;
    alert(
      `${metros} metro(s) convertido(s) em hectômetros serão ${conversao} hectômetros`
    );
    break;
  case "km":
    conversao = metros / 1000;
    alert(
      `${metros} metro(s) convertido(s) em quilômetros serão ${conversao} quilômetros`
    );
  default:
    alert("Opção inválida");
}
