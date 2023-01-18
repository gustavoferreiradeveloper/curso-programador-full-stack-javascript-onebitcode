let menu = 0;

do {
  menu = parseInt(
    prompt(
      `Olá! escolha uma das opções abaixo para a recarga do seu TIM:\n 
    1 - R$20 \n
    2 - R$40 \n
    3 - R$60 \n
    4 - R$100 \n
    5 - sair \n`
    )
  );

  switch (menu) {
    case 1:
      alert(`Você escolheu a recarga de R$20,00
      \nCrédito Realizado com Sucesso!`);
      break;
    case 2:
      alert(`Você escolheu a recarga de R$40,00
      \nCrédito Realizado com Sucesso!`);
      break;
    case 3:
      alert(`Você escolheu a recarga de R$60,00
      \nCrédito Realizado com Sucesso!`);
      break;
    case 4:
      alert(`Você escolheu a recarga de R$100,00
      \nCrédito Realizado com Sucesso!`);
      break;
    case 5:
      alert(`Você escolheu SAIR
      \nFinalizando...`);
      alert(`Até logo!`);
      break;
    default:
      alert("Opção Inválida! Tente novamente as opções de 1 a 5");
  }
} while (menu !== 5);
