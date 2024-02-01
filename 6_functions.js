function addTwoNumbers(a,b){
    return `Result::  ${a+b} `;
}
console.log(addTwoNumbers(3,4));
// if you don't pass a argument it will be sonsidered as undefined value
//  Rest operators(...) combines multiple values in single array and used with parameter 
function RestOperator(...num){
    console.log(num);
}
RestOperator(5);
