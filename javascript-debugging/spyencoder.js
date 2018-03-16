/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
  // somewhere to store the converted characters
  let result = [];
  // next we loop over each character in the string.
  //for(let position of word){
    for(let position = 0; position < word.length; ++position){
  // and save the charcode to the array
    //console.log(word.charCodeAt(position-1));
    result.push(word.charCodeAt(position));
  }
  // and return that list of codes, separated by colon return result.join(':');
  return result.join(':');
}

function decode(hash) {
  // split the code by semicolons!
  let array = hash.split(':');
  // again somewhere to put our codes let result = [];
  let result = [];
  // loop over the codes
  for(let code of array){
  // change the code back to the string character equivalent
    result.push(String.fromCharCode(code));
  }
  return result.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);

message = "dog";
encodedMessage = encode(message);
decodedMessage = decode(encodedMessage);

console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);

message = "cat";
encodedMessage = encode(message);
decodedMessage = decode(encodedMessage);

console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);

message = "My name is Groot";
encodedMessage = encode(message);
decodedMessage = decode(encodedMessage);

console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);