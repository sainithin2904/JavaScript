var x = 10;

function func(){
  return x +=2;
}
func()
console.log(x) //x = 12 shows var x is accessible inside the functions as well
x= 55
console.log(x) //x = 55 shows var x is reasigned

const c= 5;
const b = 400;
console.log(b);

const c = "12";
console.log(c);
// c = "new"
// console.log(c) will show error
function sum(a,b){
  console.log(`the result is ${a+b}`)
  return(a+b)
}
console.log(sum(5,6))

{
    let temp = 5
    console.log(temp) // 5 on the console
}
console.log(temp) // temp not defined
