const user={
    email:"fdkfd@gnmail",
    name:{
        firstname:"Shubham",
        lastnmae:"Yadav"
    }
}
console.log(user.name.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
// combine multiple object in single object
// const obj4=Object.assign({},obj1,obj2,obj3);
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);
console.log(Object.keys(user))
console.log(Object.values(user))

// object destructuring
 const {email}=user;
 console.log(email);
