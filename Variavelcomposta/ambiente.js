let num = [5, 8, 2, 9, 3]
num [5] = 6 // Adicionar um array sabendo o índice.
num.push(7) // Adicionar um array por último.
num.length // Dizer quantas casas tem.
num.sort() // Por em ondem crescente.
console.log(`Vetor tem ${num.length} posições.`) // Usando para descobrir quantas posíções á.
console.log(`Nosso vetor são ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(12)
//console.log(`O valor está na posição ${pos}`)

// ou 
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}