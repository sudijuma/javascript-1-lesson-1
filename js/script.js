var myName = "sudi";
function login(arg) {
    var myName = arg //Local scope
    return myName;
}
var someVar = login("mwakie");
console.log(someVar);

//Example 2, callback functions

var enterSite = function () {
    console.log("hello you entered the website")
}

function loginToSite(arg) {
    arg();
}
loginToSite(enterSite);


//Example 3, assign var to a function
var login = function (name) {
    console.log("you may login: ", name)
}
login("Sudi");

function login(name) {
    console.log("you may login: ", name)
}

// function as a property of an object

var user = {
    name: "Sudi",
    occupation: "student",
    login: function (name) {
        console.log("hello, my name is", name)
    }
}
console.log("my user object", user)
console.log("name", user.name);

user.login("Sudi")


//let and const


const count = 1;
count = 99;
count = count + 99;
console.log(count);
/* 
let count = 1;
count = 2; */
/* count = count + 1; */
/* count += +1; */
/* count++;
console.log("suck it", count)

{
    let pet = "dog";
    function bark() {
        console.log(pet)
    }
    bark();
}

 
const profile = {
    name: "Sudi",
    age: "35",
    job: "doctor"
}
console.log(profile.name);
console.dir(profile);


//using backticks

const senteces = `one
                two`;
console.log(senteces)
const sentecesTwo = "blahg\ncoock"
console.log(sentecesTwo)



