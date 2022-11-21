//create object
const user = {
    "name": "Rizal",
    "age": 20,
    "country": "Malaysia"
}

//get value from object
//conventional
const nameUser = user.name
const ageUser = user.age

//destructure
const {name, age, country} = user

console.log(name, age, country)