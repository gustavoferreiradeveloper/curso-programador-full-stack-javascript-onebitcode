/* 
- Simular uma fila de espera de um consultório médico;
- Iniciar mostrando um menu interativo;
- Dentro deste menu tem que haver uma lista com todos os pacientes esperando em ordem e mostrando sua posição ao lado do nome; 
- No menu deve permitir que o usuário escolha, entre opções:
  - Novo Paciente - para adicionar um paciente ao fim da fila pedindo o nome do paciente;
  - Consultar Paciente - Que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado;
  - Sair - o programa só deve ser encerrado se escolher sair, caso contrário voltar ao menu;
*/
let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n";
  }
  opcao = prompt(
    "Olá! Bem vindo à Fila de Espera do consultório:\n\n" +
      "Pacientes: \n" +
      pacientes +
      "\n O que você deseja fazer?" +
      "\n 1 - Novo Paciente" +
      "\n 2 - Consultar Paciente" +
      "\n 3 - Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Digite o nome do paciente:");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      alert(pacienteConsultado + " Passou pela consulta.");
      break;
    case "3":
      alert("Encerrando...");
      alert("Finalizando o programa, até logo!");
      break;
    default:
      alert("Opção Inválida! Tente novamente as opções de 1 a 3");
  }
} while (opcao !== "3");
