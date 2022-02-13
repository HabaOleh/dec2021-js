// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
// console.log("Length str1 is "+str1.length);
// console.log("Length str2 is "+str2.length);
// console.log("Length str3 is "+str3.length);
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let stringToArray = (str)=> str.split(" ");
// let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let  delete_characters=(str, length)=>str.substring(0,length);
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let insert_dash=(str)=>str.replaceAll(" ","-").toUpperCase();
let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let lowerToUpper = (str)=>str.replace(str[0],str[0].toUpperCase());
console.log(lowerToUpper("okten"));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize= (str)=>{
    return str.split(" ").map(word=>word.replace(word[0],word[0].toUpperCase())).join(' ');
}
console.log(capitalize("hello word everyone"));
document.write(capitalize("hello word everyone"));
