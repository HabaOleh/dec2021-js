// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
let txt = document.getElementById("text");
let btn = document.getElementById("btn");
btn.onclick=()=>{
    txt.hidden = true;
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.getElementById("btn1").onclick=function (){
    this.hidden = true;
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById("btn2").onclick=()=>{
    let age = document.getElementById("age").value;
    if(+age>=18){
        alert("Welcome");
    }else if(+age<18){
        alert("You must leave this page");
    }else if(!age){
        alert("enter your age");
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName("menu")[0];
let title = document.getElementsByClassName("title")[0];
let ul = document.getElementById("items");
ul.style.display="block";
title.onclick=()=>{
    if(ul.style.display==="block"){
        ul.style.display="none";
    }else {
        ul.style.display="block";
    }

}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
        {
            title: "id labore ex et quam laborum",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos ntempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
        {

            title: "quo vero reiciendis velit similique earum",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam net omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
        },
        {

            title: "odio adipisci rerum aut animi",
            body: "quia molestiae reprehenderit quasi aspernaturnaut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {

            title: "alias odio sit",
            body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor net qui rerum deleniti ut occaecati"
        },
        {

            title: "vero eaque aliquid doloribus et culpa",
            body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et"
        }
]
let mainDiv = document.createElement("div");
mainDiv.classList.add("main");
for (let comment of comments) {
    let div = document.createElement("div");
    div.classList.add("comment");
    let title = document.createElement("h3");
    let body = document.createElement("p");
    let btn = document.createElement("button");
    title.innerText = comment.title;
    body.innerText=comment.body;
    body.style.display="block";
    btn.innerText="Hide";
    btn.onclick=()=>{
        if(body.style.display==="block"){
            body.style.display="none";
        }else {
            body.style.display="block";
        }
    }
    div.append(title,body,btn);
    mainDiv.appendChild(div);
}
document.body.appendChild(mainDiv);

