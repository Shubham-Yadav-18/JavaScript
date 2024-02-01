// syntax ()=>{}
const greet=()=>{
    console.log('welcome to web');
    console.log(this)
}
//  if you have one liner function , no need to write return and curly brace
const one=()=>  ("hello");
    
console.log(one());
greet();
console.log(this);
// 