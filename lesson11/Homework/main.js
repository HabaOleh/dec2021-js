// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name = document.forms.User.name;
let age = document.forms.User.age;
let send = document.getElementById("btn");
let id =0;
send.onclick=(e)=>{
    e.preventDefault();
    console.log(id);
    localStorage.setItem(id.toString(),JSON.stringify({name:name.value,age:age.value}));
    id+=1;
    name.value="";
    age.value="";
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.forms.Car.model;
let type = document.forms.Car.type;
let volume = document.forms.Car.volume;
let btn = document.getElementById("send");
let key = "cars";
let createCar=(modelCar,typeCar,volumeCar)=>{
    let carArr=JSON.parse(localStorage.getItem(key))||[];
    carArr.push({modelCar, typeCar, volumeCar});
    localStorage.setItem(key,JSON.stringify(carArr));
}
btn.onclick=()=>{
    createCar(model.value,type.value,volume.value);
}
