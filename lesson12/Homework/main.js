// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
       let mainDiv = document.createElement("div");
       mainDiv.classList.add("posts");
        for (let post of posts) {
            let postDiv = document.createElement("div");
            postDiv.classList.add("post")
            let id = document.createElement("h3");
            id.innerText = post.id;
            let title = document.createElement("h3");
            title.innerText = post.title;
            let body = document.createElement("p");
            body.innerText=post.body;
            postDiv.append(id,title,body);
            mainDiv.appendChild(postDiv);
        }
        document.body.appendChild(mainDiv)
    })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("comments");
        for (let comment of comments) {
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("comment")
            let id = document.createElement("h3");
            id.innerText = comment.id;
            let name = document.createElement("h3");
            name.innerText = comment.name;
            let email = document.createElement("h5");
            email.innerText=comment.email;
            let body = document.createElement("p");
            body.innerText=comment.body;
            commentDiv.append(id,name,email,body);
            mainDiv.appendChild(commentDiv);
        }
        document.body.appendChild(mainDiv)
    })
