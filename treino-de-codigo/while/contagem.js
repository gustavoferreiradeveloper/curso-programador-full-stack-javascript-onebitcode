let numero = parseFloat(prompt("Digite um número..."));

while (numero > 0) {
  alert(numero);
  numero -= 1;

  if (numero === 0) {
    break;
  }
}

alert("FIM!!!");
