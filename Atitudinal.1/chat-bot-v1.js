import { palavrasPraia, palavrasComidas, animalPraia, mostProbablyQuestion } from "./can-i-answer.js";
console.log(animalPraia)

let pergunta = "Onde fica a montanha mais alta ?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.split(' ')

const banco = [
    palavrasComidas, palavrasPraia, animalPraia, 
]

for (let i = 0; i < pergunta.length; i++) {
    for (let j = 0; j < banco.length; j++) {
        if (banco[j].probablywords.indexOf(pergunta[i])) {
            banco[j].matched++
        }
    }
    
}

console.log(mostProbablyQuestion(pergunta))