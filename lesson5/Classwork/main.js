// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let printMin=(a,b,c)=>{
    if(a<b&&a<c){
        console.log("Min is a "+a);
    }else if(b<a&&b<c){
        console.log("Min is b "+b);
    }else if(c<a&&c<b){
        console.log("Min is c "+c);
    }
}
printMin(15,9,10);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let printMax=(a,b,c)=>{
    if(a>b&&a>c){
        console.log("Max is a "+a);
    }else if(b>a&&b>c){
        console.log("Max is b "+b);
    }else if(c>a&&c>b){
        console.log("Max is c "+c);
    }
}
printMax(5,1,3);
// - створити функцію яка повертає найбільше число з масиву
let maxOfArr=(arr)=>{
    let max=arr[0];
    for (let item of arr) {
       if(item>max){
           max=item;
       }
    }
    return max;
}
console.log("Max is"+maxOfArr([3, 8, 55, -963, 5]));
// - створити функцію яка повертає найменьше число з масиву
let minOfArr=(arr)=>{
    let min=arr[0];
    for (let item of arr) {
        if(item<min){
            min=item;
        }
    }
    return min;
}
console.log("Min is "+minOfArr([3, 8, 55, -963, 5]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfArr=(arr)=>{
    let sum=0;
    for (let item of arr) {
        sum+=item;
    }
    return sum;
}
console.log("Sum is "+sumOfArr([1, 2, 10]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let avgOfArr=(arr)=>{
    let sum=0;
    for (let item of arr) {
        sum+=item;
    }
    return sum/arr.length;
}
console.log("Avg is "+avgOfArr([8, 4, 10,32,-63,45]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let minMax=(...arg)=>{
    let min=arg[0];
    let max=arg[0];
    for (let item of arg) {
        if(item>max){
            max=item;
        }
        if(item<min){
            min=item;
        }
    }
    console.log("Max is "+max);
    return min;
}
console.log("Min is "+minMax(5, 6, 8, 1, -36, 3, -1));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.\
let randomArr=(length)=>{
    let arr=[];
    for (let i = 0; i < length; i++) {
        arr[i]=Math.round(Math.random()*100);
        console.log(arr[i]);

    }
}
randomArr(10);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let randomLimitArr=(size,limit)=>{
    let arr=[];
    for (let i = 0; i <size; i++) {
        arr[i]=Math.round(Math.random()*limit);
        console.log(arr[i]);
    }
}
randomLimitArr(10,20)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reversArray=(arr)=>{
    let reversArr=[];
    let index=0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reversArr[index]=arr[i];
        index++;
    }
    return reversArr;
}
console.log(reversArray([1, 2, 3,4,5]));

