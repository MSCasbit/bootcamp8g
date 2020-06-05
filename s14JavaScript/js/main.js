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


cars = [
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
   const showCars = ()=>{
       let userRequire= parseInt(prompt("ingresa el año del auto"))
       let filterCars=cars.filter((car,index)=>{
           return parseInt(car.year)>=userRequire
           
       })
      filterCars.forEach(element => {
          console.log(element)
      });
   }
    
