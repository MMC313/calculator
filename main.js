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
    if(num2 === 0){
        return "(ಠ_ಠ)(ಠ_ಠ)(ಠ_ಠ)(ಠ_ಠ)"
    }
    return num1/num2;
}

function sign(num1){
    return `${num1*(-1)}`;
}

function percent(num1){
    return num1/100;
}

function operate(num1,operator,num2){
    if(operator === "+"){
       return add(num1,num2)
    }else if(operator === "-"){
        return sub(num1,num2)
    }else if(operator ==="x"){
        return mul(num1,num2)
    }else if(operator === "/"){
        return div(num1,num2)
    }else if(operator === "±"){
        return sign(num1)
    }else if(operator ==="%"){
        return percent(num1)
    }
}

/* creating and naming buttons */

const btns = document.querySelector(".buttons")

for(i=0;i<20;i++){
    const btn = document.createElement("button");
    if((i>3&&i<7)||(i>7&&i<11)||(i>11&&i<15)||i===16){
        btn.classList.add("number")
    }
    if(i===3||i===7||i===11||i===15){
        btn.classList.add("operator")
    }
    if(i===1){
        btn.classList.add("sign")
        btn.textContent = "±"
    }
    if(i===2){
        btn.classList.add("percent")
        btn.textContent = "%"
    }
    if(i===0){
        btn.classList.add("clear")
        btn.textContent = "C"
    }
    if(i===17){
        btn.classList.add("decimal")
        btn.textContent = "."
    }
    if(i===18){
        btn.classList.add("back")
        btn.textContent = "⌫"
    }
    if(i===19){
        btn.classList.add("equal")
        btn.textContent = "="
    }

    btn.classList.add("button");
    btns.appendChild(btn);
}

const nums = [7,8,9,4,5,6,1,2,3,0,]
const numbtn = document.querySelectorAll(".number")
for(i=0;i<10;i++){
    numbtn[i].textContent = nums[i];
}

const ops = ["/","x","-","+"]
const opbtn = document.querySelectorAll(".operator")
for (i=0;i<4;i++){
    opbtn[i].textContent = ops[i];
}


/* making number buttons display their value */

let num1 = "";
let num2 = "";
let operator;

const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const signbtn = document.querySelector(".sign");
const percentbtn = document.querySelector(".percent");
const decbtn = document.querySelector(".decimal");
const eqlbtn = document.querySelector(".equal");
const clrbtn = document.querySelector(".clear");
const bckbtn = document.querySelector(".back");

numbtn.forEach(btn => btn.addEventListener("click",function(){
    if(d2.textContent==="0"){
        d2.textContent="";
    }
    if(d2.textContent.length<15){
    d2.textContent+=btn.textContent;
    }
}))

decbtn.addEventListener("click",function(){
    if(d2.textContent.includes(".")){
        return;
    }
    d2.textContent+= decbtn.textContent;
})

/* making operators display their value*/

signbtn.addEventListener("click",function(){
    num3 = Number(d2.textContent);
    operator2 = "±";
    d2.textContent=operate(num3,operator2,num2);
})

percentbtn.addEventListener("click",function(){
    num3 = Number(d2.textContent);
    operator2 = "%";
    d2.textContent=operate(num3,operator2,num2);
})


/* clicking the operators button again will calculate value before using new operator */
opbtn.forEach(btn => btn.addEventListener("click",function(){
    if(d1.textContent.includes("=")){
        num1="";
    }
    if(d2.textContent !== "" && num1!== ""){
        let result;
        num2 = Number(d2.textContent);
        result = operate(num1,operator,num2);
        num1= result;
        operator=btn.textContent
        d1.textContent=result+operator;
        d2.textContent="";
        return;
    }
    operator = btn.textContent;
    num1 = Number(d2.textContent);
    d2.textContent = "";
    d1.textContent = num1+operator;
}))

eqlbtn.addEventListener("click",function(){
   
    if(num1 === ""){
        return;
    }
    if(d1.textContent.includes("=")){
        num1=Number(d2.textContent);
        d1.textContent=num1+operator+num2+"=";
        d2.textContent=operate(num1,operator,num2)
        return;
    }
    num2 = Number(d2.textContent);
    d2.textContent = operate(num1,operator,num2);
    d1.textContent = num1+operator+num2+"=";
})

bckbtn.addEventListener("click",function(){
    let dispnumber = d2.textContent;
    let dispnumbersplit = dispnumber.split("");
    console.log(dispnumbersplit)
    dispnumbersplit.pop();
    d2.textContent = dispnumbersplit.join("")

})

clrbtn.addEventListener("click",function(){
    num1 = "";
    num2 = "";
    num3 = "";
    d1.textContent = "";
    d2.textContent = 0;
    operator = "";
    operator2 = "";
})

