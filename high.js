/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
  x = x + " "
const scor = ["a", "b", "c","d", "e", "f", "g", "h","i", "j","k","l","m","n", "o","p", "q", "r", "s", "t","u","v", "w", "x", "y","z"];
 let word = [];
 let arr = [];
 const xArr = x.split(" ")

for (let i = 0; i < x.length; i++) {
  if(scor.indexOf(x[i]) != -1) {
     arr.push(scor.indexOf(x[i])+1)
  } else {
    word.push(arr.reduce((a,b) => a + b, 0))
    arr = []
  }  
}
const indexRes =  word.indexOf(Math.max(...word))
 return xArr[indexRes]
}

console.log(high('man i need a taxi up to ubud')) //> "taxi"
console.log(high('what time are we climbing up the volcano')) //> "volcano"
console.log(high('take me to semynak')) //> "semynak"
console.log(high('aa b')) //> "aa"
console.log(high('b aa')) //> "b"
console.log(high('bb d')) //> "bb"
console.log(high('d bb')) //> "d"
console.log(high('aaa b')) //> "aaa"
