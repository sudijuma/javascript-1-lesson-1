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
//example 3, function as a variable
var login = function (name){
    console.log("you may login: ", name)
}
login("Sudi");

function login (name){
    console.log("you may login: ", name)
}

// function as a property of an object

var user = {
    name: "Sudi",
    occupation: "student",
    login: function (name){
        console.log("hello, my name is", name)
    }
}
console.log("my user object", user)
console.log("name", user.name);

user.login("Sudi")
var myName = "Sudi";

function login(arg){
    var myName = arg //local scope
    return myName;
}
var someVar = login("Mwakie");
console.log(someVar)
