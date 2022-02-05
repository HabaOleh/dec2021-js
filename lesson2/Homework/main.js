// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
let time = Math.round(Math.random()*60);
console.log(time);
if(time<=15){
    console.log("Перша четверть")
}else if(time>15 && time<=30){
    console.log("Друга четверть")
}else if(time>30 && time<=45){
    console.log("Третя четверть")
}else if(time>45){
    console.log("Четверта четверть")
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
// let day = +prompt("Enter day from 1 to 31");
// console.log(day);
// if(day<=10){
//     console.log("Перша декада")
// }else if(day>10 && day<=20){
//     console.log("Друга декада")
// }else if(day>20 && day<=31){
//     console.log("Третя декада")
// }
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = true;
if(test){
    console.log("Вірно")
}else{
    console.log("Неправильно")
}
test?console.log("Вірно"): console.log("Неправильно")
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt("enter -3 or 0 or 1")
console.log(a);
if(a!==0){
    console.log("Вірно")
}else{
    console.log("Неправильно")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.
let key = +prompt("Enter the number of day");
console.log(key);
switch (key){
    case 1: {
        console.log("Day 1")
        console.log("Зробити домашку");
        break;
    }
    case 2:{
        console.log("Day 2")
        console.log("Піти на роботу");
        break;
    }
    case 3:{
        console.log("Day 3")
        console.log("Піти на курси");
        break;
    }
    case 4:{
        console.log("Day 4")
        console.log("Сходити в магазин");
        break;
    }
    case 5:{
        console.log("Day 5")
        console.log("Зустрітись з друзями");
        break;
    }
    case 6:{
        console.log("Day 6")
        console.log("Поїсти, поспасти");
        break;
    }
    case 7:{
        console.log("Day 7")
        console.log("Поїсти, поспасти");
        break;
    }
    default:
        console.log("Wrong day!")
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt("Enter year");
console.log(year);
// if(year%4===0){
//     console.log("Високосний рік");
// }else {
//     console.log("Звичайний рік");
// }
year%4===0? console.log("Високосний рік"):console.log("Звичайний рік");
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let str = prompt("Яка «офіційна» назва JavaScript?")
if(str ==="ECMAScript"){
    alert("Правильно!")
}else{
    alert("Не знаєте? ECMAScript!")
}
