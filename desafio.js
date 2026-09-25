// Desafio – Calculadora de IMC
// Crie um programa que calcule o Índice de Massa Corporal (IMC).
// O programa deverá:Criar uma variável para armazenar o peso.Criar uma variável para armazenar a altura.Calcular o IMC utilizando a fórmula:
// IMC = peso / (altura * altura)Verificar o resultado do IMC.Exibir uma das seguintes mensagens:
// "Abaixo do peso"
// "Peso normal"
// "Sobrepeso"
// "Obeso"

let peso = 65
let altura = 1.64

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Peso normal")
} else if (imc > 25 && imc < 29.9) {
    console.log("Sobrepeso")
} else if (imc > 30){
    console.log("Obesidade")
}