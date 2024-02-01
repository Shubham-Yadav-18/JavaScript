const user={
    username:"Shubham",
    age:20,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }

}
user.welcomeMessage();
user.username="AbhiNew"
user.welcomeMessage();