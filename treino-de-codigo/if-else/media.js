const nomeAluno = prompt("Qual o nome do aluno?");

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
const nota4 = parseFloat(prompt("Digite a quarta nota: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media === 10) {
  alert(
    `A média é ${media}\nParabéns o aluno ${nomeAluno} está APROVADO COM DISTINÇÃO`
  );
} else if (media >= 7) {
  alert(`A média é ${media}\nParabéns o aluno ${nomeAluno} está APROVADO`);
} else {
  alert(
    `A média é ${media}\nQue pena! infelizmente o aluno ${nomeAluno} está REPROVADO`
  );
}
