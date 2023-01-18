let nome = prompt("Digite seu primeiro Nome: ");
let sobrenome = prompt("Digite seu Sobrenome: ");
let estudo = prompt("Qual seu campo de estudo?");
let nascimento = parseFloat(prompt("Qual o ano do seu nascimento?"));

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo:" +
    " " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo:" +
    " " +
    estudo +
    "\nIdade:" +
    " " +
    (2023 - nascimento)
);
