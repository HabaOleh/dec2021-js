let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
// їх в інший порожній масив.
let addressArray = [];
for (let user of users) {
    addressArray.push(JSON.parse(JSON.stringify(user.address)));
}
console.log(addressArray);
// addressArray[0].city="fdvdf";
// console.log(addressArray);
// console.log(users);
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.
for (let user of users) {
    let div = document.createElement("div");
    div.innerText = `${user.name} ${user.age} ${user.status}
    ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    document.body.appendChild(div);
}
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let user of users) {
    let div = document.createElement("div");
    let divName = document.createElement("div");
    let divAge = document.createElement("div");
    let divStatus = document.createElement("div");
    let divAddress = document.createElement("div");
    divName.innerText = user.name;
    divAge.innerText = user.age;
    divStatus.innerText = user.status;
    divAddress.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    div.append(divName, divAge, divStatus, divAddress);
    document.body.appendChild(div);
}
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості;
for (let user of users) {
    let div = document.createElement("div");
    let divName = document.createElement("div");
    let divAge = document.createElement("div");
    let divStatus = document.createElement("div");
    let divAddress = document.createElement("div");
    let divCity = document.createElement("div");
    let divStreet = document.createElement("div");
    let divCountry = document.createElement("div");
    let divHouse = document.createElement("div");
    divName.innerText = user.name;
    divAge.innerText = user.age;
    divStatus.innerText = user.status;
    divCity.innerText = user.address.city;
    divCountry.innerText = user.address.country;
    divStreet.innerText = user.address.street;
    divHouse.innerText = user.address.houseNumber;
    divAddress.append(divCity, divCountry, divStreet, divHouse);
    div.append(divName, divAge, divStatus, divAddress);
    document.body.appendChild(div);
}

//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
// тему контенту яка вказана в параграфі.
//   створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//   який буде змістом того, що знаходиться на сторінці.
//   Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2Items = document.getElementsByTagName("h2");
let divContent = document.getElementById("content");
let ul = document.createElement("ul");
for (let h2 of h2Items) {
    let li =document.createElement("li");
    li.innerText = h2.innerText;
    ul.appendChild(li);
}
divContent.appendChild(ul);

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в
// окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let mainDiv = document.createElement("div");
for (let rule of rules) {
    let ruleDiv = document.createElement("div");
    let title = document.createElement("h2");
    let body = document.createElement("p");
    title.innerText = rule.title;
    body.innerText = rule.body;
    ruleDiv.append(title,body);
    mainDiv.appendChild(ruleDiv);
}
document.body.appendChild(mainDiv);
