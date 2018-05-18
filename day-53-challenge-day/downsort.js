function downsortEvenly(array, count){
  let even = []
  let counter = 0
  for (let i = 0; i < array.length; i++){
    if(even.length+1 <= count){
      if(array[i] % 2 === 0){
        for(let j = 0; j < even.length; j++){
            if(array[i] === even[j]){
              break;
            }
            ++counter
          }
        if(counter === even.length){
          even.push(array[i])
        }
        counter = 0
      }
    }
  }
  return even.reverse()
}

function downsortOddly(array, count){
  let odd = []
  let counter = 0
  for (let i = 0; i < array.length; i++){
    if(odd.length+1 <= count){
      if(array[i] % 2 !== 0){
        for(let j = 0; j < odd.length; j++){
            if(array[i] === odd[j]){
              break;
            }
            ++counter
          }
        if(counter === odd.length){
          odd.push(array[i])
        }
        counter = 0
      }
    }
  }
  return odd.reverse()
}

function unpack(array){
  let arrStrings = []
  let arrIntegers = []
  
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === 'string'){
      arrStrings.push(array[i])
    }else if(Number.isInteger(array[i])){
      arrIntegers.push(array[i])
    }
  }

  let unpacked = {
    strings: arrStrings,
    integers: arrIntegers
  }

  return unpacked
}


// other answer
// function unpack(array){
//   return {
//     strings: () => {
//       return array.filter(element => typeof element === "string")
//     },
//     integers: () => {
//       return array.filter(element => typeof element === "number")
//     }
//   }
// }
// console.log(literal.strings()) // ["hello", "world", "cat", "dog"]
// console.log(literal.integers()) // [1, 4]

array = [2, 3, 14, 3, 9, 22]
console.log(downsortEvenly(array, 3)) // [22, 14, 2]
console.log(downsortEvenly(array, 10)) // [22, 14, 2]
console.log(downsortOddly(array, 2)) // [9, 3]

literal = unpack(["hello", "world", 1, "cat", "dog", 4])
console.log(literal.strings) // ["hello", "world", "cat", "dog"]
console.log(literal.integers) // [1, 4]