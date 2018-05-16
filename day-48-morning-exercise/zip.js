function zip(arr1, arr2){
    let zippedArray = []
    let zippedContainer = []
    if(arr1.length > arr2.length){
        for(let i = 0; i < arr1.length; i++){
            if(i+1 > arr2.length){
                zippedArray.push(arr1[i], null)
                zippedContainer.push(zippedArray)
                zippedArray = []
            }else{
                zippedArray.push(arr1[i], arr2[i])
                zippedContainer.push(zippedArray)
                zippedArray = []
            }
        }
    }else{
        for(let i = 0; i < arr1.length; i++){
            zippedArray.push(arr1[i], arr2[i])
            zippedContainer.push(zippedArray)
            zippedArray = []
        }
    }
    return zippedContainer
}

function objectify(zippedArray){
    let hash = {}
    for(let i = 0; i < zippedArray.length; i++){
        let hashElement = zippedArray[i][0]
        let nextHashElement = zippedArray[i][1]
        hash[hashElement] = nextHashElement
    }
    return hash
}

console.log(zip([1,2,3,4], [5,6,7,8])) // [[1,5], [2,6], [3,7], [4,8]]
console.log(zip(
  ["poke", "john", "ronnie", "dot"],
  ["mons", "cena", "digital", "martin"]
)) // [["poke", "mons], ["john", "cena"], ["ronnie", "digital"], ["dot", "martin"]]

console.log(zip(["a", "b", "c", "d", "e"], [1,2,3,4])) // [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", null]]

console.log(zip(["z", "i", "p"], ["d", "r", "i", "v", "e"])) // [["z", "d"], ["i", "r"], ["p", "i"]]

console.log(objectify([[1, 99], [3, -90], ["x", 3], ["q", null]])) // { 1: 99, 3: -90, x: 3, q: null}