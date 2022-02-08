// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square (a,b){
    return a*b;
}
console.log(square(4,9));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareOfCircle(r){
    return Math.PI*Math.pow(r,2);
}
console.log(squareOfCircle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(h,r){
    return 2* Math.PI*r*h;
}
console.log(cylinderSquare(10,3));
// - створити функцію яка приймає масив та виводить кожен його елемент
function showArray(arr){
    for (let item of arr) {
        console.log(item);
    }
}
showArray([2,"fdfg",-3.14,true]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text){
    document.write(`<p>${text}</p>`);
}
createParagraph("This is text")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text){
    document.write('<ul>');
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>');
}
createList("item")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createNewList(text,number){
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createNewList("text",10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listCreator(arr){
    document.write('<ul>');
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
listCreator([10,-369,5.855,false,true,"test","ok"]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function objectCreator(arrOfObj){
    for (let obj of arrOfObj) {
        document.write(`<div>${obj.id}. ${obj.name} age: ${obj.age}</div>`)
    }
}
let arr = [{id: 1, name: 'Vasya', age: 23}, {id: 2, name: 'Oleg', age: 22}, {id: 3, name: 'Ivan', age: 5}];
objectCreator(arr)
