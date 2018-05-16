function add(arg1, arg2){
    return arg1 + arg2
}

function subtract(arg1, arg2){
    return arg1 - arg2
}

function multiply(arg1, arg2){
    return arg1 * arg2
}

function divide(arg1, arg2){
    return arg1 / arg2
}

function calculator(arg1, arg2, operation){
    if(operation === "add"){
        return add(arg1, arg2)
    }
    else if(operation === "subtract"){
        return subtract(arg1, arg2)
    }
    else if(operation === "multiply"){
        return multiply(arg1, arg2)
    }
    else if(operation === "divide"){
        return divide(arg1, arg2)
    }
}

function calculator(arg1, arg2, callback){
    return callback(arg1, arg2)
}

calculator(4, 5, (arg1, arg2) => {
    return multiply(5, add(arg1, arg2))
})

console.log(calculator(2, 2, "add")) // 4
console.log(calculator(10, 15, "multiply")) // 150
console.log(calculator(90, 4, "subtract")) // 86
console.log(calculator(9, 3, "divide")) // 3

console.log(calculator(2, 2, add)) // 4
console.log(calculator(10, 15, multiply)) // 150
console.log(calculator(90, 4, subtract)) // 86
console.log(calculator(9, 3, divide)) // 3
