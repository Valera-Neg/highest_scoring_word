function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

console.log(high('man i need a taxi up to ubud')) //> "taxi"
console.log(high('what time are we climbing up the volcano')) //> "volcano"
console.log(high('take me to semynak')) //> "semynak"
console.log(high('aa b')) //> "aa"
console.log(high('b aa')) //> "b"
console.log(high('bb d')) //> "bb"
console.log(high('d bb')) //> "d"
console.log(high('aaa b')) //> "aaa"