// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function findMin(a,b,c){
    if(a<b&&a<c){
        console.log("Min is a: "+a);
    }else if(b<a&&b<c){
        console.log("Min is b: "+b);
    }else {
        console.log("Min is c: "+c);
    }
}
findMin(10,7,50);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function findMax(a,b,c){
    if(a>b&&a>c){
        console.log("Max is a: "+a);
    }else if(b>a&&b>c){
        console.log("Max is b: "+b);
    }else {
        console.log("Max is c: "+c);
    }
}
findMax(10,7,50);
// - створити функцію яка повертає найбільше число з масиву
function maxInArray(arr){
    let max=arr[0];
    for (let item of arr) {
        if(item>max){
            max=item
        }
    }
    return max;
}

console.log("Max elem in arr is: "+maxInArray([15,-5,4,29,0]));
// - створити функцію яка повертає найменьше число з масиву
function minInArray(arr){
    let min=arr[0];
    for (let item of arr) {
        if(item<min){
            min=item
        }
    }
    return min;
}

console.log("Min elem in arr is: "+minInArray([15,-5,4,29,0]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArray(arr){
    let sum = 0;
    for (let item of arr) {
        sum+=item;
    }
    return sum;
}

console.log("Sum elem of arr is: "+sumArray([15,-5,4,29,0]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function avgArray(arr){
    let sum = 0;
    for (let item of arr) {
        sum+=item;
    }
    return sum/arr.length;
}
console.log("Average elem of arr is: "+avgArray([15,-5,4,29,0]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
function maiMax(...elem){
    let min=elem[0];
    let max = elem[0];
    for (let item of elem) {
        if(item<min){
            min=item;
        }
        if(item>max){
            max=item;
        }
    }
    console.log("Max is:"+max)
    return min;
}
console.log("Min is: "+maiMax(15,-5,4,29,0));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomArr(size){
    let arr=[];
    for (let i = 0; i <size; i++) {
       arr[i]=Math.round(Math.random()*100);
       console.log(arr[i]);
    }
}
randomArr(10)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function randomArr1(size,limit){
    let arr=[];
    for (let i = 0; i <size; i++) {
        arr[i]=Math.round(Math.random()*limit);
        console.log(arr[i]);
    }
}
randomArr1(10,50)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reversArray(arr){
    let revers=[];
    let index=0;
    for (let i = arr.length - 1; i >= 0; i--) {
        revers[index]=arr[i];
        index++;
    }
    return revers;
}
console.log(reversArray([1, 2, 3,4,5]));
