// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr=[2,17,13,6,22,31,45,66,100,-18];
// // 1. перебрати його циклом while
// let i =0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
// // 2. перебрати його циклом for
// for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
//
// }
// // 3. перебрати циклом while та вивести числа тільки з непарним індексом
// let i =0;
// while (i<arr.length){
//     if(i%2!==0) {
//         console.log(arr[i]);
//     }
//     i++;
// }
// // 4. перебрати циклом for та вивести числа тільки з непарним індексом
// for (let j = 0; j < arr.length; j++) {
//     if(j%2!==0) {
//         console.log(arr[j]);
//     }
// }
//// 5. перебрати циклом while та вивести числа тільки парні значення
// let i = 0;
// while (i<arr.length){
//     if(arr[i]%2===0) {
//         console.log(arr[i]);
//     }
//     i++;
// }
// // 6. перебрати циклом for та вивести числа тільки парні значення
// for (let j = 0; j < arr.length; j++) {
//     if(arr[j]%2===0) {
//         console.log(arr[j]);
//     }
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let number of arr) {
//     if(number%3===0){
//         number="okten";
//     }
//     console.log(number);
// }
// // 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i =arr.length-1;
// while (i>=0){
//     console.log(arr[i]);
//     i--;
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let i =arr.length-1;
// while (i>=0){
//     if(i%2!==0) {
//         console.log(arr[i]);
//     }
//     i--;
// }

// for (let j = arr.length - 1; j >= 0; j--) {
//     if(j%2!==0) {
//         console.log(arr[j]);
//     }
// }

// let i = arr.length-1;
// while (i>=0){
//     if(arr[i]%2===0) {
//         console.log(arr[i]);
//     }
//     i--;
// }

// for (let j = arr.length - 1; j >= 0; j--) {
//     if(arr[j]%2===0) {
//         console.log(arr[j]);
//     }
// }

for (let j = arr.length - 1; j >= 0; j--) {
    if(arr[j]%3===0){
        arr[j]="okten";
    }
    console.log(arr[j]);
}
