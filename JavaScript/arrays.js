// ARRAYS PARTE 1

let arr = ['Barbara', 21, 1.65, true]

console.log(arr)
console.log('Primeiro elemento: ', arr[0])
console.log('Tamanho: ', arr.length)

for(let i = 0; i < arr.length; i++){
    console.log(`Elemento ${i+1}: `, arr[i])
}

console.clear()

for(let elemento of arr){
    console.log(elemento)
}

console.clear()

for(let indice in arr){
    console.log(indice)
}

console.clear()

// ARRAYS PARTE 2

console.log(arr.slice(0,2))

arr.push('Utilizando push')
console.log(arr)

arr.unshift('Utilizando unshift')
console.log(arr)

arr.pop()
console.log("Removido com pop\n", arr)

arr.shift()
console.log("Removido com shift\n", arr)

let arr2 = ['Kennedy', 20]
console.log(arr.concat(arr2))

console.clear()

console.log(arr.indexOf('Barbara'))
arr.push('Barbara')
console.log(arr.lastIndexOf('Barbara'))

console.log(arr.includes(0))

console.log(arr.reverse())