// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let form1 = document.createElement("form");
form1.name = "form1";
//form1.setAttribute('name', 'formOne');

let input11 = document.createElement("input");
input11.name = "input1";
//input11.setAttribute('name', 'inputOne');
let input12 = document.createElement("input");
input12.name = "input2";
form1.append(input11,input12);

let div1 = document.createElement("div");
div1.innerText="Form1";
div1.append(form1);
document.body.appendChild(div1);

let form2 = document.createElement("form");
form2.name = "form2";

let input21 = document.createElement("input");
input21.name = "input3";
let input22 = document.createElement("input");
input22.name = "input4";
form2.append(input21,input22);

let div2 = document.createElement("div");
div2.innerText="Form2";
div2.append(form2);
document.body.appendChild(div2);
let btn = document.createElement("button");
btn.innerText="send"
document.body.appendChild(btn);
btn.onclick= ()=>{
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inputTr = document.createElement("input");
inputTr.name="tr";
let inputTd = document.createElement("input");
inputTd.name = "td";
let content = document.createElement("input");
content.name = "content";
let btn1 = document.createElement("button");
btn1.innerText = "create table";
document.body.append(inputTr,inputTd,content,btn1);
btn1.onclick=()=> {

    let table = document.createElement("table");
    table.style.border = "2px solid black";
    for (let i = 0; i < +inputTr.value; i++) {
        let tr = document.createElement("tr");
        tr.style.border = "1px solid black";
        for (let j = 0; j < +inputTd.value; j++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerText = content.value;
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    document.body.appendChild(table);
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arr = ["fuck","dick","shit","bastard"];
let divTask = document.createElement("div");
let inputCheck = document.createElement("input");
let check = document.createElement("button");
divTask.append(inputCheck,check);
document.body.appendChild(divTask);
check.innerText="check";
// check.onclick=()=>{
//     for (let item of arr) {
//         if(inputCheck.value === item){
//             alert("this is bad word");
//         }
//     }
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
check.onclick=()=>{
    for (let item of arr) {
        if(inputCheck.value.includes(item)){
            alert("this is bad word in sentence");
        }
    }
}
