// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name=name;
    this.surname=surname;
    this.email = email;
    this.phone = phone;

}
let userArray=[
    new User(1,"Oleh","Haba","o.haba@gmail.com","0686294900"),
    new User(2,"Olga","Tereh","OT@gmail.com","06545622550"),
    new User(3,"Nazar","Pan","NP@gmail.com","0686454500"),
    new User(4,"Vasya","Sydor","VS@gmail.com","0684545900"),
    new User(5,"Kolya","Falyk","a@gmail.com","0686121200"),
    new User(6,"Max","Koron","max89@gmail.com","0682121200"),
    new User(7,"Dima","Dish","dima25a@gmail.com","06862915100"),
    new User(8,"Olena","Kley","kley@gmail.com","0685454900"),
    new User(9,"Sasha","List","568a@gmail.com","06862954540"),
    new User(10,"Lina","Sydor","123@gmail.com","06864564900")
];
console.log(userArray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(userArray.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по спаданню (sort)
console.log(userArray.sort((a, b) => b.id - a.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray=[
    new Client(1,"Oleh","Haba","o.haba@gmail.com","0686294900",["phone","laptop","bag"]),
    new Client(2,"Olga","Tereh","OT@gmail.com","06545622550",["book","magazine"]),
    new Client(3,"Nazar","Pan","NP@gmail.com","0686454500",["food"]),
    new Client(4,"Vasya","Sydor","VS@gmail.com","0684545900",["bag","umbrella"]),
    new Client(5,"Kolya","Falyk","a@gmail.com","0686121200",["phone"]),
    new Client(6,"Max","Koron","max89@gmail.com","0682121200",["sofa","armchair"]),
    new Client(7,"Dima","Dish","dima25a@gmail.com","06862915100",["book"]),
    new Client(8,"Olena","Kley","kley@gmail.com","0685454900",["laptop"]),
    new Client(9,"Sasha","List","568a@gmail.com","06862954540",["pen","pencil","map","stikers"]),
    new Client(10,"Lina","Sydor","123@gmail.com","06864564900",["food","drinks"])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArray.sort((a, b) => a.order.length - b.order.length));
