// FUNCOES

// Sem parametros
function saudacao(){
    console.log('Hello, World!')
}

saudacao()
console.clear()

// Utilizando parametros
function parametros(nome){
    console.log(nome)
}

parametros('Barbara')
console.clear()

function parametros2(nome, idade = 21){
    console.log(`${nome} tem ${idade} anos`)
}

parametros2('Barbara')
console.clear()

// Retornando na função
function soma(numero1, numero2){
    return numero1 + numero2
}

const result = soma(10, 20)
console.log(result)
console.clear()

// OBJETOS
let pessoa = {
    nome: 'Barbara',
    idade: 21
}

console.log(pessoa)
console.log(pessoa.nome) // Alternativa: pessoa['nome']
console.clear()

pessoa.altura = 1.77
console.log(pessoa)

delete pessoa.altura
console.log(pessoa)

for(let chave in pessoa){
    console.log(chave)
}