//Perguntas sobre a praia
export const palavrasPraia = {
    probablywords: [
        "Onde", "fica", "a", "praia", "mais", "proxima",
        "como", "está", "o", "clima", "na", "agora",
        "mar", "perigoso", "é",
    ],
    matched: 0, 
}

//Comidas da praia
export const palavrasComidas = {
    probablywords:[
        "comida", "de", "praia", "faz", "mal",
        "é", "perigoso", "comer", "camarão",
        "vende", "sorvete", "na", "praia"
    ],
    matched: 0,
}

//Animais que tem na praia
export const animalPraia = {
    probablywords: [
    "Quais", "animais", "do", "mar", "são", "perigosos",
    "a", "mordida", "golfinho", "é", "venenosa"
    ],
    matched: 0,
}

//possiveis respostas para as constantes acima
function showAnswer (index){
    switch (index){
        case 0:
            return "O mar é perigoso se não te der pé."
        case 1:
            return "A comida da praia não é confiavel"
        case 2:
            return "Existem animasi perigosos na praia sim, mas é só tomar cuidado"
        default:
            return "Só sei assusntos relacionados a praia"
    }
}

export function mostProbablyQuestion(pergunta){
    if (pergunta.includes("montanha")) {
            return "Não falos obre montanhas"
    }
    let matches = [
        palavrasPraia.matched,
        palavrasComidas.matched,
        animalPraia.matched
    ]
    console.log(matches)
    console.log(Math.max(... matches))
    console.log(matches.indexOf(Math.max(... matches)))
    return showAnswer(matches.indexOf(Math.max(... matches)))
}

