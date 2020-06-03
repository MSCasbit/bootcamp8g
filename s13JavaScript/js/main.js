const phrase = "La mejor forma de predecir tu futuro es creandolo"

let splitPrhase= phrase.split(" ")
 
let phraseToUpperCase = splitPrhase.map((word,indx)=>indx %2===0 ? word.toUpperCase(): word)
   console.log(phraseToUpperCase.join(" "))


 //5 letras
let newArrayFiveLetters = splitPrhase.filter(word=> word.length >=5 ? word: null)
 console.log(newArrayFiveLetters.join(" "))
 


 //promedio
 let average = splitPrhase.reduce((accum,word,idx,arr)=>{
    accum += word.length
    if(arr.length -1 ===idx ){
       return accum/arr.length 
    }else{
      return accum
    }


 },0)
 console.log(`La frase usa en promedio ${average} caracteres por palabra`)