language=["C","CPP","javaScript","Java","Python","Swift"];

language.forEach(function(item){
    // console.log(item);
})

language.forEach((item)=>{
    //   console.log(item);
})

language.forEach(printMe)

function printMe(item) {
    // console.log(item);
}

language.forEach(function(item,index,arr){
    console.log(item,index,arr);
})