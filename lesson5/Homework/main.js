// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let Square = (a,b)=>a*b;
console.log(Square(10, 3));
// - створити функцію яка обчислює та повертає площу кола
let circleSquare = (r)=>Math.PI*Math.pow(r,2);
console.log(circleSquare(10));
// - створити функцію яка обчислює та повертає площу циліндру
let cylinderSquare = (r,h)=>2* Math.PI*r*h;
console.log(cylinderSquare(10, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let showArray = (arr)=>{
    for (let item of arr) {
        console.log(item)
    }
}
showArray([2,6,-99,5.555])
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text)=>{
    document.write(`<p>${text}</p>`)
}
createParagraph("Text")
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList= (text)=>{
    document.write("<ul>");
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write("</ul>");
}
createList("item")
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createNewList=(txt,count)=>{
    document.write("<ul>");
    for (let i = 0; i <count; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write("</ul>");
}
createNewList("ok10",5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createArrayList= (arr)=>{
    document.write("<ul>");
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write("</ul>");
}
createArrayList(["text",522,-963, -3.85,true, "test",false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let createArrayObj=(arrOfObj)=>{
    for (let obj of arrOfObj) {
        document.write(`<div>${obj.id}. ${obj.name} age: ${obj.age}</div>`)
    }
}
createArrayObj([{id: 1, name: 'Vasya', age: 23}, {id: 2, name: 'Oleg', age: 22}, {id: 3, name: 'Ivan', age: 5}])
