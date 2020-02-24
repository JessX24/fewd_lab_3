var greet = function(){
    return "Haydo!"
}

var salutation = greet()

console.log(salutation)

function echo(sound){
    return sound
}

function greet(name){
    return "Hello " + name + "!"
}

function shout(word){
    return console.log(word+word)
}
shout("Fire")

function doSomething(name){
    return name
}
console.log(doSomething("Mark"))

function multiplyFive(number){
    return number*5
}
/*
function myFunction(){
    alert("Hello World!")
}
myFunction()*/
 var answerIsRight = true
 if(answerIsRight){
     console.log("The answer is right!")
 }else{
     console.log("The answer is wrong!")
 }
 function js15(numberOfChildren,partnerName,geographicLocation,jobTitle){
    return "You will be a " + jobTitle + " in " + geographicLocation + " married to " + partnerName + " with " + numberOfChildren + " kids." 
 }
 console.log(js15(4,"Jen","Alaska","Doctor"))
 console.log(js15(11,"May","Australia","Police"))
 console.log(js15(2,"Rachel","India","Janitor"))