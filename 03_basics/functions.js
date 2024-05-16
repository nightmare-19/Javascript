
// function add(n1,n2)
// {  
//     console.log(n1+n2);  
// }
// add(4,5);


// function add(n1,n2)
// {  
//     let result = n1+n2
//     return result 
// }
// const result = add(4,5)
// console.log(result)

// function add(n1,n2)
// {  
//     return n1+n2;
// }
// const result = add(4,5)
// console.log(result)


// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter your username")
//         return
//     }
//     else
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("Uzhair"));


// function calculateCartPrice(...num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(100,200,300));
// // Output in array - [100, 200, 300]




function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject(
    {
        name : "Uzhair",
        price : 50
    }
)

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,300,400]))
