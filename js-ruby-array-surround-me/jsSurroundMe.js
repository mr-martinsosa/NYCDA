function surroundMe(protectee, array){
  protectedPerson = [protectee]
  for(let i = 0; i < array.length; i++){
    protectedPerson.unshift(array[i])
    protectedPerson.push(array[i])
  }
  return protectedPerson.join(" ").toString().replace("," , " ")
}

let array = [
  "king-arthur",
  "lancelot",
  "percival"
]

surroundMe("guenevere", array)

