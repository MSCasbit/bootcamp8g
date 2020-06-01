/*const userWord =()=>{
    let word= prompt("ingresa una palabra")
    let Arrays= countArrays(word)
    if(Arrays>1){
        alert("Ingresa Solo Una Palabra")
    }
    let number=countNumbers(word) 
    if(number===true){
        alert("Solo Ingresa Palabras")
    } 
    let palindromes= Palindrome(word)
    if(palindromes=== true){
        alert ("Tu Palabra Es Un Palindromo")
    }else if(palindromes===false){
        alert("Tu Palabra No Es Un Palindromo")
    } 
}

const countArrays = words =>{
    let wordsSplit= words.split(" ").length     
    return wordsSplit
}
const countNumbers = number =>{
    let foundNumber = number.match(/\d/)
    if(foundNumber){
        return true
    }else{
        return false
    }
}
const Palindrome = palindromo =>{
    let ifPalindrome = palindromo.split("").reverse().join("")
    if(ifPalindrome===palindromo){
        return true
    }else{
        return false
    }
    
}*/
//ejercicio 
const count_input = string => string.trim().replace(',',' ').split(' ').length;
const get_number = () => {
    let number = prompt("Ingresa un numero")
    if(count_input(number) > 1){
   return 'solo ingresar numeros'
    }
    if(filter_number(number)){
        return 'Favor de ingresar solo números'
    }
    let arrayPrimeNumbers= get_prime_number_array(parseInt(number))
    let primeFactor = get_prime_factor(number,arrayPrimeNumbers);
    
    if(primeFactor){
        return `Los factores primo de ${number} son: ${primeFactor}`;
    }else{
        return `No pudimo obtener el factor primo de ${number}`
    } 
       
}
 const filter_number = number => {
    if(number.match(/\D/)){
        return true;
    }
    return false;
 }
 const get_prime_number_array = number => {
    let arrayNumber =[]
    for( let i = 2; i <= number; i++){
        if(is_prime_number(i)){
            arrayNumber.push(i);
        }
    }    
    return arrayNumber;
}
 const is_prime_number = number => {
    
    if(number === 0 || number === 1){
        return false
    } else {
        for( let i = 2; i < number; i++){
            if(number % i === 0){
                return false
            }  
        }
    }
    return true
}
const get_prime_factor = (number,arrayPrimeNumbers) => {
    let primeFactorArr = [],
        flag = true
    while(flag == true){
        let firstNumber = get_first_number (arrayPrimeNumbers)
        if(number % firstNumber === 0){
            primeFactorArr.push(firstNumber);
            number /= firstNumber;
        }else{
            arrayPrimeNumbers.shift();
        }
        flag = arrayPrimeNumbers.length === 0 ? false : true;
    }
    return primeFactorArr.join(',');
}
const get_first_number = numberArr => numberArr[0]

console.log(get_number());




