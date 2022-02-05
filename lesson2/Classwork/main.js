// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a = +prompt("First number:")
// let b = +prompt("Second number:")
//
// if(a>b){
//     alert("Max is a:"+a);
// }else if(b>a){
//     alert("Max is b"+b)
// }else if(a===b){
//     alert("The numbers is equal")
// }
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let roomNumber = +prompt("Enter the room number")
// if(roomNumber>1 && roomNumber<=20){
//     console.log("Квартира з 1 під'їзду")
// }else if(roomNumber>21 && roomNumber<=48){
//     console.log("Квартира з 2 під'їзду")
// }else if(roomNumber>49&&roomNumber<=90){
//     console.log("Квартира з 3 під'їзду")
// }else{
//     console.log("невідома квартира")
// }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt("enter number");
// number===10?console.log("Correct"):console.log("Incorrect")
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// // let x = undefined;
// // let x = 555;
// // let x = "555";
// // let x = [5,8,9];
// let x = {name:"Van"};
//
// if(typeof(x) ==="number"){
//     console.log(1);
// }else if(typeof(x) ==="string"){
//     console.log(2);
// }else if(typeof(x)==="boolean"){
//     console.log(3);
// }else if(typeof x === "object"){
//     console.log(4);
// }else{
//     console.log("Невідомо")
// }
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp=+prompt("What is the temperature?")
temp>=10&&temp<=22?console.log("йдемо ВЧИТИСЯ"):console.log("вчимося ОНЛАЙН");
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .
let key = +prompt("Enter the number:");
switch (key){
    case 1:{
        console.log("You win car");
        break;
    }
    case  2 :{
        console.log("You win motobike");
        break;
    }
    case  3 :{
        console.log("You win bike");
        break;
    }
    case  4 :{
        console.log("You win mobile");
        break;
    }
    case  5 :{
        console.log("You win house");
        break;
    }
    default:
        console.log("Incorrect number");
}
