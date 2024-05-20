const user = {
    username  : "uzhair",
    price : 30,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}
// user.welcomeMessage()
// console.log(user.price)

// this can only  be used inside functions decalred inside the objects

// arrow function syntax  () => {}

// const addTwo = (num1,num2) => {
//     return num1+num2
// }


// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4));

//return object using arrow
const rtnObject = (user) => ({username : "Uzhair"})
console.log(rtnObject(user));

