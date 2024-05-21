//for of loop
const arr = [1,2,3,4,5]
for (const val of arr) {
    //console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('FR' , "France")
map.set('CH',"China")
//console.log(map);

for (const [key,value] of map) {
    console.log(key +":-"+ value);
}

const myObj = {
    'Game1' : "NFS",
    'Game2' : "GTA",
    'Game3' : "PUBG"
}
// for (const key of myObj) {
//     console.log(key +":-"+ value);
// } this wont work for onjects, not iterable 