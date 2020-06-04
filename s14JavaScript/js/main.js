var dataArray = []
      
const userData = user => {
   return userObject = {
       name:prompt("ingresa tu nombre"),
       lastName:prompt("ingresa tus apellidos"),       
       street:prompt("ingresa el nombre de tu calle"),
       number:prompt("ingresa el numero de tu casa"),
       suburb:prompt("ingresa tu colonia"),
       postalCode:prompt("ingresa tu codigo postal"),
       town:prompt("ingresa tu alcaldia"),

   }
}
let algo = dataArray.map(user => {
   return userData(user);
})
console.log(algo);


/*cars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]
var userCars=prompt("elige el año de un vehiculo")
 
const userCarsRequire= models=>{
    if(userCars>=){
       
    }
    
}
    crear una función que pida al usuario un año (2000, 1989, etc).
    la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
    por cada auto extraído, mostrar al usuario un mensaje que diga "Opción ${indice}: ${fabricante del auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"
*/