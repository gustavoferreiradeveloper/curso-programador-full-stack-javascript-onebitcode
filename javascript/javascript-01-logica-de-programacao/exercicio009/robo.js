const numDesejado = prompt(
  "Olá! Eu sou o Robô da Tabuada\n " +
    "Informe o número que você deseja calcular a Tabuada..."
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += `-> ${numDesejado} * ${fator} = ${numDesejado * fator} \n`;
}

alert(`Resultado da Tabuada de ${numDesejado}:\n\n ${resultado}`);
