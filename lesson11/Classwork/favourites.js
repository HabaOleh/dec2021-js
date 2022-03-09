let key = "favorites";
let users = JSON.parse(localStorage.getItem(key));
console.log(users);
let mainDiv = document.createElement("div");
users.forEach(user=>{
    let userDiv = document.createElement("div");
    userDiv.innerText = user.name + " - " + user.age + " - " + user.status;
    mainDiv.append(userDiv);
})
document.body.appendChild(mainDiv);
