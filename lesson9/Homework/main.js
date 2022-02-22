// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divElement = document.createElement("div");
divElement.classList.add("wrap");
divElement.classList.add("collapse");
divElement.classList.add("alfa");
divElement.classList.add("beta");
divElement.style.background="red";
divElement.style.color="green";
divElement.style.fontSize="20px";
divElement.innerText="Text";
document.body.appendChild(divElement);
let cloneDiv = divElement.cloneNode(true);
document.body.appendChild(cloneDiv);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає
// його до блоку .menu Завдання робити через цикли.
let menuItem = ['Main','Products','About us','Contacts'];
let menuDiv = document.createElement("div");
menuDiv.classList.add("menu");
let ulItem = document.createElement("ul");
for (let item of menuItem) {
    let liItem = document.createElement("li");
    liItem.innerText = item;
    ulItem.appendChild(liItem);
}
menuDiv.appendChild(ulItem);
document.body.appendChild(menuDiv);
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let item of coursesAndDurationArray) {
    let div = document.createElement("div");
    div.innerHTML=`${item.title} duration ${item.monthDuration} month`
    document.body.appendChild(div);
}
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
for (let item of coursesAndDurationArray) {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    let h1 = document.createElement("h1");
    h1.classList.add("heading");
    h1.innerText = item.title;
    let p = document.createElement("p");
    p.classList.add("description");
    p.innerText = `duration ${item.monthDuration} month`;
    itemDiv.append(h1,p);
    document.body.appendChild(itemDiv);
}

