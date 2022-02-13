// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// let  cutString= (str, n)=>{
//     let result=[];
//     while (str.length) {
//        result.push(str.substring(0, n));
//        str = str.slice(n)
//     }
//     console.log(result);
//     return result;
//
// }
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
let validateEmail = (email)=>{
    if(email.indexOf("@")>=1
        &&email.includes("@")
        &&email.lastIndexOf(".")>(email.indexOf("@")+1)){
        console.log("TRUE");
    }else{
        console.log("False");
    }
}
validateEmail("someemail@gmail.com");
validateEmail("someeMAIL@gmail.com");
validateEmail("someeMAIL@i.ua");
validateEmail("some.email@gmail.com");
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let countSymbol= (str, stringSearch)=>{
    let count = 0;
    for (let symbol of str) {
        if(symbol.includes(stringSearch)){
            count++;
        }
    }
    return count;
}
let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(countSymbol(str, symb).toString()) // 5
console.log(countSymbol(str,symb));
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let cutString=(str, n)=>str.split(" ").filter((value,index)=>index<n).join(' ');
let str1 = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str1, 5)) // 'Сила тяжести приложена к центру'
