// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let normalize=(str,symbol)=>{
//     let newStr=[];
//     if(str.includes(symbol)){
//       let a = str.split(symbol);
//       a.forEach(item=>{
//           if(item){
//               newStr.push(item);
//           }
//       });
//         console.log(newStr.join(' '))
//     }
// }
// normalize(n1,".");
// normalize(n2,"-");
// normalize(n3,"_");
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random =(size,value)=>{
    let arr=[];
    for (let i = 0; i < size; i++) {
       arr.push(Math.round(Math.random()*value));
    }
    return arr;
}
let result =random(10,100);
console.log(result);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// result.sort((a, b) => a - b);
// console.log(result);
// result.sort((a, b) => b - a);
// console.log(result);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(result.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(result.map(value => value.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let sortNums = (arr,direction)=>{
    if(direction==='ascending'){
        return arr.sort((a,b)=> a-b);
    }
    if(direction === 'descending'){
        return arr.sort((a,b)=> b-a);
    }
}
let num = [11,21,3,1,9,25];
console.log(sortNums(num, 'ascending')); // [3,11,21]
console.log(sortNums(num, 'descending')); // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArr =coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortArr);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filterArr);
