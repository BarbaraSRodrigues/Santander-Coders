// ESTRUTURAS CONDICIONAIS

const idade = 21

if (idade >= 18) {
    console.log('Voce eh maior de idade')
} else {
    console.log('Voce eh menor de idade')
}

console.clear()

// ESTRUTURAS DE REPETIÇÃO

const input = require('readline-sync')

const numeroSorteado = 5
let numero = Number(input.question('Qual numero voce escolhe? '))

while(numero !== numeroSorteado){
    console.log('Voce errou o numero. Tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe? '))
}

console.log('Voce acertou!!')

// LAÇOS DE REPETICAO
let acumulador = 0, nota

for (let i = 0; i < 3; i++) {
    nota = Number(input.question(`Informe a nota ${i+1} do aluno: `))
    acumulador += nota
}

let media = acumulador/3

console.log('A media eh: ', media)