const myNum=[1,3,6,4,7,8,6,10,3];

const newArr=myNum.map((item)=>{
    return item+10;
})

console.log(newArr);

const arr=myNum.map((item)=>{
    return item*10;
}).filter((num)=> num>40 )
console.log(arr);
