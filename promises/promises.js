const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise is consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 is resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "chai", email: "cha@example.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ username: "shubham", password: "hello" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolve or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "javascript", password: "hello" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromisFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromisFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
       return response.json();
}).then((data)=>{
       console.log(data);
}).catch((error)=> console.log("E: ",error))