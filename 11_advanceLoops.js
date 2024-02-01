arr=[1,2,3,4,5,6];
for (const val of arr) {
    // console.log(val);
}

// for of loop doesn't work with object

const map=new Map();
map.set('IN','India')
map.set('USA','America')
map.set('Fr','France')
map.set('WI','WestIndies')
for( const [key,val] of map){
    // console.log(key,':- ',val);
}

const language=["cpp","c","Js","Py","Java","#c"]
for(const val in language){
    console.log(language[val]);
}



