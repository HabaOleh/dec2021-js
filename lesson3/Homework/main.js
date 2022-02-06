// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let arr1 = [5,7,55,-3.14,299];
// console.log(arr1)
// let arr2 = ["Hello", "Word","JavaScript","Test","Okten"];
// console.log(arr2)
// let arr3 = [255,"Oleh", true,-9.99,"array"];
// console.log(arr3);
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let mas=[];
// mas[0]=5;
// mas[1]=true;
// mas[2]="Test";
// mas[3]=5.55;
// mas[4]=false;
// console.log(mas);
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello word</div>`)
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello word ${i}</div>`)
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i =0;
// while (i<20){
//     document.write(`<h1>OKten</h1>`)
//     i++;
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let j =0;
// while (j<20){
//     document.write(`<h1>OKten ${j}</h1>`)
//     j++;
// }
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr = [5,7,55,36,-999,256,-3.888,56,333,0];
for (let elem of arr) {
    console.log(elem);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = ["fkj","dfdf","fhdjk","ted","one","nine","dms","dsl","9","true"];
for (let elem of arr1) {
    console.log(elem);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr2 = [589,true,"help","text",-9.99,false,888,506,"ok",0];
for (let elem of arr2) {
    console.log(elem);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let arr3 = [589,true,"help","text",-9.99,false,888,506,"ok",0];
for (let arr3Element of arr3) {
    if(typeof arr3Element==="number"){
        console.log(arr3Element);
    }
}
for (let arr3Element of arr3) {
    if(typeof arr3Element==="boolean"){
        console.log(arr3Element);
    }
}
for (let arr3Element of arr3) {
    if(typeof arr3Element==="string"){
        console.log(arr3Element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr4=[];
arr4[0]="abracadabra";
arr4[1]=555;
arr4[2]="cat";
arr4[3]=false;
arr4[4]=-985;
arr4[5]="arca";
arr4[6]=6.523;
arr4[7]="car";
arr4[8]=true;
arr4[9]=false;
for (let arr4Element of arr4) {
    console.log(arr4Element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i}</br>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} `);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`${i} `);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i%2===0) {
        console.log(i);
        document.write(`${i} `);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i%2!==0) {
        console.log(i);
        document.write(`${i} `);
    }
}
