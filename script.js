
// write a function that divides two number
let divide = (num1, num2) => {
    result = num1/num2
    console.log(result)
}

divide(25, 25);
divide(100, 5);
divide(56, 5);
divide(144,12);
divide(121,11)



// write a function that checks if a number is even or odd
function checkEven(number){
    if (number % 2 === 0){
        console.log(`${number} is an even number`)
    }else if(isNaN(number)){
        console.log(`${number} is not a number`)  
    }else{
        console.log(`${number} is an old number`)
    }
}

checkEven(13);
checkEven(12);
checkEven(121);
checkEven("ghuh");


// write a function that returns the largest of three number.
const checkMax=(one, two, three) =>{
    console.log(Math.max(one, two, three))
    console.log(Math.min(one,two,three))
}

checkMax(125, 100, 135)
checkMax(1,5,10)

// perimeter of a rectangle

function perimeter (L,W){
    answer= 2*(L+W)
    console.log(answer)
}

perimeter(12,5);
perimeter(100,200);


for(let i=0; i < 5; i++){
    console.log("the value of i:", i)
}

function even(num){
    retur= num %2 === 0
    console.log(retur)

}

even(121);
even(2);
even (3)

console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li")[3].innerHTML)
console.log(document.querySelectorAll("li")[4].innerHTML = "Curry")
console.log(document.querySelector("li"))

document.querySelector("h2")
function change(){
    let h2= document.querySelector("h2")
    if( h2.innerHTML === "close"){
        h2.innerHTML="open"
        alert('close')
    }
    else{
        h2.innerHTML="close"
        alert("open")
    }
}

let list = document.querySelectorAll("li")


// =======
// write a function that divides two number
let divides = (num1, num2) => {
    result = num1/num2
    console.log(result)
}

divides(25, 25);
divides(100, 5);
divides(56, 5);
divides(144,12);



// write a function that checks if a number is even or odd
function checkEven(number){
    if (number % 2 === 0){
        console.log(`${number} is an even number`)
    }else if(isNaN(number)){
        console.log(`${number} is not a number`)  
    }else{
        console.log(`${number} is an old number`)
    }
}

checkEven(13);
checkEven(12);
checkEven(121);
checkEven("ghuh");


// write a function that returns the largest of three number.
const checkMaxx=(one, two, three) =>{
    console.log(Math.max(one, two, three))
    console.log(Math.min(one,two,three))
}

checkMaxx(125, 100, 135)
checkMaxx(1,5,10)

// perimeter of a rectangle

function perimeter (L,W){
    answer= 2*(L+W)
    console.log(answer)
}

perimeter(12,5);
perimeter(100,200);


for(let i=0; i < 5; i++){
    console.log("the value of i:", i)
}

function even(num){
    retur= num %2 === 0
    console.log(retur)

}

even(121);
even(2);
even (3)

console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li")[3].innerHTML)
console.log(document.querySelectorAll("li")[4].innerHTML = "Curry")
console.log(document.querySelector("li"))

document.querySelector("h2")
function change(){
    let h2= document.querySelector("h2")
    if( h2.innerHTML === "close"){
        h2.innerHTML="open"
        alert('close')
    }
    else{
        h2.innerHTML="close"
        alert("open")
    }
}

let lists = document.querySelectorAll("li")



function send(){
    let chatInput = document.getElementById("messageBox")

    let newChat= document.createElement("p")
    newChat.textContent = chatInput.value;

    document.getElementsByClassName("message").appendChild(chatInput)
    chatInput.value = ' '
}