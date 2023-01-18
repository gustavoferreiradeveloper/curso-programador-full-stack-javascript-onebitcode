/* 
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa do outro personagem e se ele possui escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que o  de defesa e o defensor não possuir escudo o dano causado será igual a diferença entre o ataque e a defesa 
- Se o poder de ataque for maior do que a defesa e o defensor possuir escudo o dano causado será igual a metade da diferença entre o ataque e a defesa
- Se o poder de ataque for menor ou igual a defesa, o dano causado será igual a 0
/*- Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos personagens.
 */

const personagemDeAtaque = prompt("Qual o seu Pokémon?");
const poderDeAtaque = parseFloat(
  prompt("Qual o poder de ataque dele ? (Em números)")
);
let dano = 0;

const personagemDeDefesa = prompt("Qual o seu Pokémon");
let pontosDeVida = parseFloat(
  prompt("Quantos pontos de vida ele tem ? (Em números)")
);

const poderDeDefesa = parseFloat(
  prompt("Qual o poder de defesa dele ? (Em números)")
);

const escudo = prompt("Ele possui escudo? (S / N)");

if ((poderDeAtaque > poderDeDefesa && escudo === "n") || escudo === "N") {
  dano = poderDeAtaque - poderDeDefesa;
} else if (
  (poderDeAtaque > poderDeDefesa && escudo === "s") ||
  escudo === "S"
) {
  dano = (poderDeAtaque - poderDeDefesa) / 2;
} else if (poderDeAtaque <= poderDeDefesa) {
  dano = 0;
}

pontosDeVida -= dano;

alert(
  `O ${personagemDeAtaque} causou ${dano} de dano no ${personagemDeDefesa}:\n`
);
alert(`Pokémon de ataque:\n
Nome: ${personagemDeAtaque}\n
Poder de Ataque: ${poderDeAtaque}\n

Pokémon de defesa:\n
Nome: ${personagemDeDefesa}\n
Pontos de vida: ${pontosDeVida}\n
Poder de defesa: ${poderDeDefesa}\n
Possui escudo: ${escudo}`);
