//Não sabia o que fazer, então decidi fazer uma calculadora de IMC básica.

let peso = parseFloat(prompt("Digite seu peso:"));
let altura = parseFloat(prompt("Digite sua altura:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Você está abaixo do peso normal");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Você está no seu peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com excesso de peso");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Você está em obesidade classe 1");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Você está em obesidade classe 2");
} else {
    console.log("Você está em obesidade classe 3");
}