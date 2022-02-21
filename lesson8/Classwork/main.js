// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainHeader = document.getElementById("main_header");
mainHeader.classList.add("dec_21")
// b) робить шириниу елементу ul 400px
let ulElement= document.getElementsByTagName("ul");
ulElement[0].style.width="400px";
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName("linkList");
for (let linkListElement of linkList) {
    linkListElement.style.width="50%"
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElem2 = document.getElementsByClassName("listElement2");
console.log(listElem2[0].innerText);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let listItems = document.getElementsByTagName("li");
for (let listItem of listItems) {
    listItem.style.background = "grey";
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName("a");
for (let aElement of a) {
    aElement.classList.add("anchor");
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (let aElement of a) {
    if(aElement.innerText==="link3"){
        aElement.style.fontSize="40px";
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aElement of a) {
    aElement.classList.add(`element_${aElement.innerText}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaders = document.getElementsByClassName("sub-header");
for (let subHeader of subHeaders) {
    subHeader.style.background = prompt("Enter the color");
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
for (let subHeader of subHeaders) {
    if(subHeader.innerText==="content 2 segment"){
        subHeader.style.background = prompt("Enter the color");
    }

}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let classElements = document.getElementsByClassName("content_1");
    classElements[0].innerText = `${prompt("Enter text")}`

// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName("p");
for (let pElement of pElements) {
    pElement.style.padding="20px";
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let txts = document.getElementsByClassName("text2");
for (let txt of txts) {
    txt.innerText = "dec-21"
}
