//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
function getAllClasses(start) {
    let children = start.children;
        for (let child of children) {
            if (child.classList.value) {
                console.log(child.classList.value);
            }
            getAllClasses(child);
    }
}
getAllClasses(document.body);

