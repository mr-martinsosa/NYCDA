function compare(numbers, value){
    let lessThan = []
    let equalTo = []
    let greaterThan = []
    let arrayOfThree = []
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < value){
            lessThan.push(numbers[i])
        }else if(numbers[i] === value){
            equalTo.push(numbers[i])
        }else if(numbers[i] > value){
            greaterThan.push(numbers[i])
        }
    }
    arrayOfThree.push(lessThan, equalTo, greaterThan)
    return arrayOfThree
}

function flatten(unflattenedArray){
    let flattenedArray = []
    for(let i = 0; i < unflattenedArray.length; i++){
        for(let j = 0; j < unflattenedArray[i].length; j++){
            flattenedArray.push(unflattenedArray[i][j])
        }
    }
    return flattenedArray
}

console.log(compare([10, -30, -45, 4, 21, -30], -30)) // [[-45], [-30, -30], [10, 4, 21]]
console.log(flatten([[9], [42, 12, -1], [-9, 1001, 2], [23, 56]])) // [ 9, 42, 12, -1, -9, 1001, 2, 23, 56 ])