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