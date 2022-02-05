// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив,
// в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if(friends.length>=3){
    console.log("It is big array");
}else{
    console.log("it is a small array");
}
friends.length>=3?console.log("It is big array"):console.log("it is a small array");
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let a = 1;
// let b = 1;
// let c = 4;
// if(a>b && a<c || a<b && a>c){
//     console.log("a is medium")
// }else if(b>a && b<c || b<a&& b>c){
//     console.log("b is medium")
// }else if(c>a && c<b || c<a && c>b) {
//     console.log("c is medium")
// }else{
//     console.log("No medium number")
// }
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a=2;
let b=1
a+b<4?result = 'Мало':result = 'Багато';
console.log(result);
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let num = +prompt("Enter number");
num>=-100 && num<0?console.log("Negative"):num===0?console.log("Zero"):num>0&&num<=100?console.log("positive"):console.log("error");
