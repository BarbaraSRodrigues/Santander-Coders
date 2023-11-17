/* Comentario */
// Comentario

console.log('Hello, World!')
console.log('Bem vindo ao curso de JavaScript')

console.clear()

// VARIAVEIS

let idade = 21
let altura = 1.65
let nome = "Barbara"
let estudando = true

console.log(idade, typeof idade)
console.log(altura, typeof altura)
console.log(nome, typeof nome)
console.log(estudando, typeof estudando)


let outra;
console.log(outra)

let nula = null
console.log(nula)

const constante = 200
console.clear()

// OPERADORES
let numero1 = 20
let numero2 = 2;

const soma = numero1 + numero2

console.log('Soma = ', numero1 + numero2)
console.log('Soma = ', soma)
console.log('Subtração = ', numero1 - numero2)
console.log('Multiplicação = ', numero1 * numero2)
console.log('Divisão = ', numero1 / numero2)
console.log('Exponenciação = ', numero1 ** numero2)
console.log('Resto da divisão = ', numero1 % numero2)
console.log(Math.PI)

console.clear()

const numero = 10;

console.log(numero == 10)
console.log(numero === 10)
console.log(numero !== 10)

idade = 21
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso dirigir? ', possoDirigir)

// OR ||
// NOT !

console.clear()

// COERÇÃO DE TIPOS

const numeroCT = 10
console.log(numeroCT, typeof numeroCT)

const numeroString = String(numeroCT)
console.log(numeroString, typeof numeroString)

console.log('10' + 1)
console.log('10' - 1)
