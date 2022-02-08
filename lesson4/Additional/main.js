// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає
// або конкатенує їх між собою.
function args(...arg){
    if(arg.length===1){
        console.log(arg[0]);
    }else if(arg.length===2){
        console.log(arg[0]+arg[1]);
    }else{
        console.log("Error arguments")
    }
}
args(5,"test");

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає
// новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function addArrays(arr1,arr2){
    let resultArray=[];
    if(arr1.length===arr2.length){
        for (let i = 0; i < arr2.length; i++) {
            resultArray[i]=arr1[i]+arr2[i];
        }
    }else{
        console.log("Wrong array")
    }
    return resultArray;
}
console.log(addArrays([2, 5, 11, 5], [2, 3, 4, 5]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function keysArray(arr){
    let key=[];
    for (let arrElement of arr) {
        for (let arrKey in arrElement) {
            key.push(arrKey);
        }
    }
    return key;
}
console.log(keysArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function valueArray(arr){
    let value=[];
    for (let arrElement of arr) {
        for (let arrValue in arrElement) {
            value.push(arrElement[arrValue]);
        }
    }
    return value;
}
console.log(valueArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));
