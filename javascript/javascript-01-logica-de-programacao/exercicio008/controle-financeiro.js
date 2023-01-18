let saldo = parseFloat(prompt("Qual o valor disponível em sua conta?"));

let menu = 0;

do {
  menu = parseFloat(
    prompt(`O valor disponível em sua conta é de: R$${saldo}\n
  Gostaria de:\n
  1 - Depósito\n
  2 - Saque\n
  3 - Sair`)
  );

  let deposito = 0;
  let saque = 0;

  switch (menu) {
    case 1:
      deposito = parseFloat(
        prompt(`Qual a quantia que gostaria de depositar?`)
      );
      saldo += deposito;
      break;
    case 2:
      saque = parseFloat(prompt(`Qual a quantia que gostaria de sacar?`));
      saldo -= saque;
      break;
    case 3:
      alert("Saindo...");
      alert("Obrigado! Volte sempre!");
      break;
    default:
      alert("Opção inválida! Tente novamente...");
  }
} while (menu !== 3);
