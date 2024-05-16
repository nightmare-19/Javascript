const mySym = Symbol("mykey1")
const jsUser = {
    name : "uzhair",
    age : 20,
    ['mySym'] : "mykey2",
    email : "uzhair19@gmail.com",
    lastLoginDays : ["Monday" , "Sunday"]

}
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser.lastLoginDays[1]);
// console.log(mySym );
//Object.freeze(jsUser)

// jsUser.email = "uzhair@google.com"
// console.log(jsUser.email)


jsUser.gretting = function(){
    console.log("hello js user");
}

// #important
jsUser.gretting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.gretting());
console.log(jsUser.gretting2());
