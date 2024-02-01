const numbers=[23,45,32,56,99,54,67,43];

const total=numbers.reduce((acc,currEle)=> {
    return acc+currEle
},0);
console.log(total);