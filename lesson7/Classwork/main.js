// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model,manufacturer,year,maxSpeed,volume){
//     this.model=model;
//     this.manufacturer= manufacturer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.volume=volume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km/h на годину`)
//     }
//     this.info = function (){
//         for (let carElement in this) {
//             if(typeof this[carElement]!=="function"){
//                 console.log(`${carElement} - ${this[carElement]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed =function (newSpeed){
//         this.maxSpeed+=newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// let car1=new Car("Kaine","Porshe",2012,280,3.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(30);
// car1.changeYear(2015);
// car1.info();
// car1.addDriver({
//     name: "Max",
//     age:25
// })
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car{
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km/h на годину`)
    }
    info(){
        for (let carElement in this) {
            if(typeof this[carElement]!=="function"){
                console.log(`${carElement} - ${this[carElement]}`);
            }
        }
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed+=newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }
}
let car2=new Car("Kaine","Porshe",2012,280,3.0);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.changeYear(2015);
car2.info();
car2.addDriver({
    name: "Max",
    age:25
})
console.log(car2);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellasArray=[
    new Cinderella("name1",22,36.5),
    new Cinderella("name2",24,37.5),
    new Cinderella("name3",18,37),
    new Cinderella("name4",19,39.5),
    new Cinderella("name5",21,38.5),
    new Cinderella("name6",25,38),
    new Cinderella("name7",22,35.5),
    new Cinderella("name8",29,34.5),
    new Cinderella("name9",28,36),
    new Cinderella("name10",23,35),
]
class Prince{

    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }

}
let prince = new Prince("name",22,36.5);
for (let cinderella of cinderellasArray) {
    if(cinderella.footSize===prince.findShoes){
        console.log(`Prince with shoes size ${prince.findShoes} find Cinderella ${cinderella.name}  age: ${cinderella.age} foot size: ${cinderella.footSize}`)
    }
}
console.log(cinderellasArray.find(value => value.footSize === prince.findShoes));
