console.log("Iman");
setTimeout(() => {
    console.log("Njamba");
}, 3000);
console.log("Zeddy");


var a="42";
var b=Number (a);
var c=a*10

console.log(a);
console.log(b);
console.log(c);


const Tax_Rate=0.03;
var amount=102.98;
amount=amount+(amount *Tax_Rate);
console.log(amount);

var amount=105;
if(amount>100){
    let amount=200;
    amount=amount*2;
    console.log(amount);

}
console.log(amount);

var Mpesa_balance=500;
var price=150;
if(Mpesa_balance >= price){
    console.log("You can purchase the fruit");
}
else{
    console.log("sorry you cannot purchase the fruit your mpesa balance is low");
}


for(var i=1;i<=9;i++){
    console.log(i);
}
var i=9
while (i > 0){
    console.log(i);
    i--;
}

do{
    console.log(i);
    i--;
}

while(i>0);

 function myName(){
   console.log("Iman Yahya");

    }
    myName();

// function myAge(year_of_birth){
//     return 2021- year_of_birth

// }    
//     myAge();

function one(){
    var a=1;
    console.log(a);
}
function two(){
    var a=2;
    console.log(a);
}
one();
two();

function outer(){
    var a=1;

function inner(){
    var b=2;
    console.log(a+b);
}
inner();
console.log(a);

}
outer();


