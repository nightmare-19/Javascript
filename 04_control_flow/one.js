//if
// const score=200
// if(score > 100){
//     const power = "fly"
//     console.log(`Power : ${power}`);
// }
// else{
//     console.log("no");
// }

//const balance = 1000
// if(balance > 500) console.log("Test"), console.log("Test2"); do not do it like this
// if(balance < 500){
//     console.log("Balance less than 500");
// }
// else if(balance < 750)
//     {
//         console.log("Balance less than 750"); 
//     }
// else if(balance< 900)
//     {
//         console.log("Balance less than 900");
//     }
// else{
//     console.log("Balance less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard)
    {
        console.log("Allow to buy course");
    }
else (loggedInFromGoogle || loggedInFromEmail)
    {
        console.log("User logged in");
    }



    





