function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

function operate(operator,num1,num2){
    if(operator === "+"){
       return add(num1,num2)
    }else if(operator === "-"){
        return sub(num1,num2)
    }else if(operator ==="*"){
        return mul(num1,num2)
    }else if(operator === "/"){
        return div(num1,num2)
    }
}

function screen(){

}

const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");



/* display */
display.textContent = ""



/* numbers section */

for(i=9;i>=0;i--){
    const container = document.createElement("button");
    container.classList.add("nums");
    container.textContent = i;
    numbers.appendChild(container);
}

for(i=0;i<1;i++){
    const container = document.createElement("button");
    container.classList.add("nums");
    container.textContent = ".";
    numbers.appendChild(container);
}

for(i=0;i<1;i++){
    const container = document.createElement("button");
    container.classList.add("clear");
    container.textContent = "C";
    numbers.appendChild(container);
}
/* operators */

let ops = ["÷","×","−","+","="];

for(i=0;i<=4;i++){
    const container = document.createElement("button");
    container.classList.add("ops"+i);
    container.textContent = ops[i];
    operators.appendChild(container);
}


const numbtns = document.querySelectorAll(".nums");

numbtns.forEach(btn => btn.addEventListener("click", function(){
    display.textContent += btn.textContent;
    console.log(display.textContent)
}))



