// - Дано натуральное число n. Выведите все числа от 1 до n.
let naturalNumber =(n)=>{
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
//naturalNumber(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
let printNumbers=(A,B)=>{
    if(A<B){
        for (let i = A; i <= B; i++) {
            console.log(i);
        }
    }else{
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }
}
printNumbers(15,10);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let swipeElem=(arr,index)=>{
        let temp = arr[index];
        arr[index]=arr[index+1];
        arr[index+1]=temp
        return arr;
}
console.log(swipeElem([9, 8, 0, 4], 2));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let pushZeroInEnd = (arr)=>{
    if(arr.length>2&&arr.length<=100) {
        let temp = [];
        for (let item of arr) {
            if (item !== 0) {
                temp.push(item);
            }

        }
        for (let item of arr) {
            if (item === 0) {
                temp.push(item);
            }
        }
        console.log(temp);
    }else {
        console.log("Wrong count of array")
    }
}
pushZeroInEnd([0,0,0,1,0]);
