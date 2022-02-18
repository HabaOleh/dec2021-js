// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// class GEO{
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class Address{
//
//     constructor(street, suite, city, zipcode,lat,lng) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = new GEO(lat,lng)
//     }
//
// }
// class Company{
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
// class User{
//     constructor(id, name, username,email, street,suite,city,zipcode,lat,lng,phone,website,companyNane,catchPhrase,bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.address = new Address(street,suite,city,zipcode,lat,lng);
//         this.phone=phone;
//         this.website=website;
//         this.company = new Company(companyNane,catchPhrase,bs);
//     }
// }

class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyNane, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.adress = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyNane,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');
console.log(user);

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//              }
//      },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//              name: 'Romaguera-Crona',
//              catchPhrase: 'Multi-layered client-server neural-net',
//              bs: 'harness real-time e-markets'
//              }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


class Tag {
    constructor(titleOfTag, action, attr) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attr = attr;

    }
}

let tag_a = new Tag("a", "Тег a является одним из важных элементов HTML и предназначен для создания ссылок",
    [
        {titleOfAttr: "href", actionOfAttr: "Задает адрес документа, на который следует перейти."},
        {titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к тексту ссылки."},
        {titleOfAttr: "type", actionOfAttr: "Указывает MIME-тип документа, на который ведёт ссылка."}
    ]);
console.log(tag_a);
let tag_div = new Tag("div", "Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
    [
        {titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега div."},
        {titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."},
    ]);
console.log(tag_div);

let tag_h1 = new Tag("h1","HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.",
    [
        {titleOfAttr:"align",actionOfAttr:"Определяет выравнивание заголовка."},
    ]);
console.log(tag_h1);
