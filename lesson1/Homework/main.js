// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// // true, false.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let str1 = "hello";
// let str2 = "owu";
// let str3 = "ua";
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
// let flag1 = true;
// let flag2 = false;
// console.log(str1);
// alert(str1);
// document.write(str1+" ");
//
// console.log(str2);
// alert(str2);
// document.write(str2+" ");
//
// console.log(str3);
// alert(str3);
// document.write(str3+" ");
//
// console.log(num1);
// alert(num1);
// document.write(`<br>${num1}`);
//
// console.log(num2);
// alert(num2);
// document.write(`<br>${num2}`);
//
// console.log(num3);
// alert(num3);
// document.write(`<br>${num3}`);
//
// console.log(num4);
// alert(num4);
// document.write(`<br>${num4}`);
//
// console.log(num5);
// alert(num5);
// document.write(`<br>${num5}`);
//
// console.log(num6);
// alert(num6);
// document.write(`<br>${num6}`);
//
// console.log(num7);
// alert(num7);
// document.write(`<br>${num7}`);
//
// console.log(flag1);
// alert(flag1);
// document.write(`<br>${flag1}`);
//
// console.log(flag2);
// alert(flag2);
// document.write(`<br>${flag2}<br>`);
// // - Переприсвоїти кожній змінній з завдання значення на довільне.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// str1="word";
// str2="javascript";
// str3="java"
// num1=500;
// num2=2;
// num3=256;
// num4=-354;
// num5=11;
// num6=-36.5;
// num7=7.7564;
// flag1=false;
// flag2=true;
// console.log(str1);
// alert(str1);
// document.write(str1+" ");
//
// console.log(str2);
// alert(str2);
// document.write(str2+" ");
//
// console.log(str3);
// alert(str3);
// document.write(str3+" ");
//
// console.log(num1);
// alert(num1);
// document.write(`<br>${num1}`);
//
// console.log(num2);
// alert(num2);
// document.write(`<br>${num2}`);
//
// console.log(num3);
// alert(num3);
// document.write(`<br>${num3}`);
//
// console.log(num4);
// alert(num4);
// document.write(`<br>${num4}`);
//
// console.log(num5);
// alert(num5);
// document.write(`<br>${num5}`);
//
// console.log(num6);
// alert(num6);
// document.write(`<br>${num6}`);
//
// console.log(num7);
// alert(num7);
// document.write(`<br>${num7}`);
//
// console.log(flag1);
// alert(flag1);
// document.write(`<br>${flag1}`);
//
// console.log(flag2);
// alert(flag2);
// document.write(`<br>${flag2}`);
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = "Oleh";
// let middleName = "Orestovych"
// let lastName = "Haba";
// let person = firstName+" "+middleName+" "+lastName;
// console.log(person);
// document.write(person);
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// let firstName = prompt("Enter your first name");
// let middleName = prompt("Enter your middle name?");
// let age = prompt("Enter your age?");
// document.write(`Вітаю ${firstName} ${middleName}. Тобі ${age} років.`);

// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//      let a = 100; let b = '100'; let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
console.log(5<6);
// 5 ? 6 -> false
console.log(5>6);
// 5 ? 6 -> false
console.log(5===6);
// 5 ? 6 -> false
console.log(5>=6);
// 10 ? 10 -> true
console.log(10<=10);
// 10 ? 10 -> true
console.log(10===10);
// 10 ? 10 -> false
console.log(10!==10);
// 10 ? 10 -> false
console.log(10<10);
// 10 ? 10 -> false
console.log(10>10);
// 123 ? '123' -> false
console.log(123 ==='123');

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); //Зробить конкатинацію стрічки
console.log(str+a)//стрічка
document.write(str - a + "<br/>");//Виконає віднімання
console.log(str-a)//число
document.write(str * "2" + "<br/>");//Зробить дію множення
console.log(str*"2")//число
document.write(str / 2 + "<br/>");//Зробить дію ділення
console.log(str/"2")//число
