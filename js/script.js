var myName = "Sudi";

function login(arg){
    var myName = arg //local scope
    return myName;
}
var someVar = login("Mwakie");
console.log(someVar)