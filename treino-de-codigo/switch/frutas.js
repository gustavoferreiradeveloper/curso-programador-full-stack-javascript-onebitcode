let frutas = prompt("Qual fruta deseja consultar?");

switch (frutas) {
  case "maçã":
    alert("Olá, a Maçã está $3,99 o Kilo");
    break;
  case "abacaxi":
    alert("Olá, o Abacaxi está $6,99 o Kilo");
    break;
  case "kiwi":
    alert("Olá, infelizmente o Kiwi está fora de época, não temos a venda!");
    break;
  case "laranja":
    alert("Olá, a laranja só temos a Lima e Pêra e estão $5,99 o Kilo");
    break;
  case "uva":
    alert("Olá, estamos com escassez de uva");
    break;
  case "pitaya":
    alert("Olá, infelizmente não vendemos essa fruta aqui");
    break;
  default:
    alert("Tente outra fruta!");
}
