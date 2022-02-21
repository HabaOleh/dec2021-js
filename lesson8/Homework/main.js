// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById("content");
console.log(content.innerText);
// -- отримує текст з блоку з id "rules"
let rules=document.getElementById("rules");
console.log(rules.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText="abracadabra";
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = "Rules content"
// -- змініть кожному елементу колір фону на червоний
let children =document.body.children;
for (let child of children) {
    child.style.background = "red";
}
// -- змініть кожному елементу колір тексту на синій
for (let child of children) {
    child.style.color = "blue";
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc = document.getElementsByClassName("fc_rules");
for (let element of fc) {
    element.style.color = "red";
}
