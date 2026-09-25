// Atividade 1 – Classificação de Temperatura
// Crie uma variável chamada temperatura e atribua um valor numérico a ela.
// O programa deverá verificar a temperatura e exibir:
// "Muito frio" se a temperatura for menor que 15.
// "Frio" se a temperatura estiver entre 15 e 20.
// "Agradável" se a temperatura estiver entre 21 e 28.
// "Muito quente" se a temperatura for maior que 28.
// Teste o programa utilizando diferentes valores para a variável temperatura.

let temperatura = 0


if (temperatura < 15) {
    console.log("Muito frio")
} else if (temperatura > 15 && temperatura < 20) {
    console.log("Frio")
} else if (temperatura > 21 && temperatura < 28) {
    console.log("Agradável")
} else {
    console.log("Muito quente")
}