// 1. Створити пустий масив та :
let arr=[];
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 100; i+=2) {
//         arr[i]=i;
//     console.log(arr[i]);
// }
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1; i <= 100; i+=2) {
//         arr[i]=i;
//     console.log(arr[i]);
// }
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr[i]=Math.round(Math.random()*100)
//     console.log(arr[i]);
// }
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//(max - min + 1)) + min
// for (let i = 0; i < 20; i++) {
//     arr[i]=Math.round(Math.random()*(732-8+1)+8)
//     console.log(arr[i]);
// }
console.log("-----------------------")
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr.length; i+=3) {
//         console.log(arr[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < arr.length; i+=3) {
//         if(arr[i]%2===0){
//             console.log(arr[i]);
//         }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr=[];
// for (let i = 0; i < arr.length; i+=3) {
//         if(arr[i]%2===0){
//             console.log(arr[i]);
//             newArr.push(arr[i]);
//         }
// }
// console.log(newArr)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i+1]%2===0){
//         console.log(arr[i])
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let mas=[100,250,50,168,120,345,188];
// let average=0;
// for (let el of mas) {
//     average+=el;
// }
// console.log(average/mas.length);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// let newArray=[];
// for (let i = 0; i < 10; i++) {
//      array[i]=Math.round(Math.random()*50);
//      newArray.push(array[i]*5);
//     console.log(array[i]);
// }
// console.log(newArray);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let mas=['html', 50, 'js', -999, 35.5, 'react', 'angular', 0, 'docker', -783, 'QA/QC'];
// let newMas=[];
// for (let elem of mas) {
//     if(typeof elem==="number"){
//         newMas.push(elem);
//     }
// }
// console.log(newMas);
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// for (let usersWithIdElement of usersWithId) {
//     for (let citiesWithIdElement of citiesWithId) {
//         if(usersWithIdElement.id===citiesWithIdElement.user_id){
//             usersWithIdElement.adress = citiesWithIdElement;
//         }
//     }
//     console.log(usersWithIdElement);
// }

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// for (let i = 0; i <10; i++) {
//     arr[i]=Math.round(Math.random()*50);
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let mas=[];
// for (let i = 0; i <10; i++) {
//     arr[i]=Math.round(Math.random()*50);
//     mas.push(arr[i]);
// }
// console.log(arr);
// console.log(mas);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let strs= [ 'a', 'b', 'c'];
let word='';
for (let i = 0; i < strs.length; i++) {
   word+=strs[i];
}
console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i=0;
// while (i<strs.length){
//    word+=strs[i];
//     i++;
// }
//  console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (let str of strs) {
//     word+=str
// }
// console.log(word);
