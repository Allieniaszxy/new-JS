// write a function that divides two number
let divide = (num1, num2) => {
    result = num1/num2
    console.log(result)
}

divide(25, 25);
divide(100, 5);
divide(56, 5);
divide(144,12);



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

