function summer(argOne, argTwo){
    return argOne + argTwo
}

function multiplier(argOne, argTwo){
    return argOne * argTwo
}

function combiner(argOne, argTwo){
    let argSum = summer(argOne, argTwo)
    let argProduct = multiplier(argOne, argTwo)
    let argAnswer = []
    argAnswer.push(argSum, argProduct)
    return argAnswer
}

let argAnswer = []

argAnswer = combiner(5, 10)

console.log(argAnswer)
