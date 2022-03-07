// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// onclick=(e)=>{
//     console.log("tag name: "+e.target.tagName);
//     console.log("Class list: "+e.target.classList);
//     console.log("id: "+e.target.id);
//     console.log("Width x Height: "+e.target.scrollWidth+" x "+e.target.scrollHeight);
// }
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let popup = document.createElement("div");
//
// onclick=(e)=>{
//     popup.innerHTML=`tag name: ${e.target.tagName}</br>
//     Class list: ${e.target.classList}</br>
//     id: ${e.target.id}</br>
//     Width x Height: ${e.target.scrollWidth+" x "+e.target.scrollHeight}</br>`;
//     document.body.append(popup);
// }

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let chbx1 = document.createElement("input");
let label1 = document.createElement("label");
chbx1.type = "checkbox";
chbx1.id="status";
label1.innerText="status";
let chbx2 = document.createElement("input");
let label2 = document.createElement("label");
chbx2.type = "checkbox";
chbx2.name="age"
label2.innerText="age";
let chbx3 = document.createElement("input");
let label3 = document.createElement("label");
chbx3.type = "checkbox";
chbx3.name="city";
label3.innerText="city";
let btn = document.createElement("button");
btn.innerText="filter";
document.body.append(chbx1,label1,chbx2,label2,chbx3,label3,btn);


let print=(arr)=>{
    let div = document.createElement("div");
    div.id="print";
    for (let i of arr) {
        div.innerHTML += (`id:${i.id} ,name: ${i.name}, age: ${i.age}, status: ${i.status}, address: city: ${i.address.city}, street: ${i.address.street}, number: ${i.address.number}<br>`);
    }
    div.innerHTML+="<hr>"
    document.body.appendChild(div);
}

btn.onclick=()=>{
    if(chbx1.checked && !chbx2.checked && !chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status));
    }else if(!chbx1.checked && chbx2.checked && !chbx3.checked){
        print(usersWithAddress.filter(user=>user.age>=29));
    }else if(!chbx1.checked && !chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>user.address.city==="Kyiv"));
    }else if(chbx1.checked && chbx2.checked && !chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status&&user.age>=29));
    }else if(chbx1.checked && !chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status&&user.address.city==="Kyiv"));
    }else if(!chbx1.checked && chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>user.age>=29&&user.address.city==="Kyiv"));
    }else if(chbx1.checked && chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status&&user.age>=29&&user.address.city==="Kyiv"));
    }

}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images=[
    {id:1,imgName:"img/autmn.jpg"},
    {id:2,imgName:"img/bamboo.jpg"},
    {id:3,imgName:"img/men.jpg"},
    {id:4,imgName:"img/road.jpg"},
    {id:5,imgName:"img/tree.jpg"},
];
let div = document.createElement("div");
let img = document.createElement("img");
let right_btn = document.createElement("button");
let left_btn = document.createElement("button");
right_btn.innerText="Right";
left_btn.innerText="Left";
let index = 0;
img.src=images[index].imgName;
img.style.width="400px";
img.style.height="200px";
div.append(left_btn,img,right_btn);
document.body.appendChild(div);
right_btn.onclick=()=>{
    if(index-1<0){
        index= images.length-1;
    }
    else {
        index--;
    }
    img.src=images[index].imgName;
}
left_btn.onclick=()=>{
    if(index+1>images.length-1){
        index= 0;
    }
    else {
        index++;
    }
    img.src=images[index].imgName;
}
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

