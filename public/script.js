let nome = prompt("Qual seu nome?");
let renda = Number(prompt("Quanto você ganha por mês?"));

while (isNaN(renda)) {
  renda = Number(prompt("Número inválido, digite denovo:"));
}

let quantidadeDespesas = Number(prompt("Quantas despesas você quer colocar? (1 a 5)"));

while (isNaN(quantidadeDespesas)) {
  quantidadeDespesas = Number(prompt("Valor inválido, digite denovo (1 a 5):"));
}

if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = Number(prompt("Valor da despesa " + i + ":"));

  while (isNaN(despesa)) {
    despesa = Number(prompt("Número inválido, digite de novo" + i + ":"));
  }

  totalDespesas = totalDespesas + despesa;
}

let sobra = renda - totalDespesas;
let mensagem = "";

if (totalDespesas > renda) {
  mensagem = "Você gastou mais do que ganhou";
} else {
  if (sobra >= renda * 0.3) {
    mensagem = "Tá bem controlado";
  } else {
    mensagem = "Dá pra economizar mais";
  }
}

let resultado =
  "Resumo:\n" +
  "Nome: " + nome + "\n" +
  "Renda: " + renda.toFixed(2) + "\n" +
  "Despesas: " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: " + sobra.toFixed(2) + "\n" +
  mensagem;

alert(resultado);

console.log("----- RESULTADO -----");
console.log("Nome:", nome);
console.log("Renda:", renda.toFixed(2));
console.log("Despesas:", totalDespesas.toFixed(2));
console.log("Sobra:", sobra.toFixed(2));
console.log("Situação:", mensagem);