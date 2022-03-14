// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersDiv = document.createElement("div");
        usersDiv.classList.add("users");
        for (let user of users) {
            console.log(user);
            let userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.innerHTML=`<h2>${user.id}</h2>
                                <h3>${user.name} - ${user.username}</h3>
                                <h4>${user.email}</h4>`;
            let btnPost = document.createElement("button");
            btnPost.innerText = "Show Post";
            userDiv.appendChild(btnPost);
            btnPost.onclick=()=>{
                fetch('https://jsonplaceholder.typicode.com/posts?userId='+ user.id)
                    .then(response => response.json())
                    .then(posts => {
                        let mainDiv = document.createElement("div");
                        mainDiv.classList.add("posts");
                        for (let post of posts) {
                            let divPost = document.createElement("div");
                            divPost.classList.add("post")
                            let id = document.createElement("h3");
                            id.innerText = post.id;
                            let title = document.createElement("h3");
                            title.innerText = post.title;
                            let body = document.createElement("p");
                            body.innerText = post.body;
                            let btn = document.createElement("button");
                            btn.innerText = "Show comments";
                            btn.onclick = () => {
                                fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
                                    .then(response => response.json())
                                    .then(comments => {
                                        let mainComments = document.createElement("div");
                                        mainComments.classList.add("comments")
                                        for (let comment of comments) {
                                            console.log(comment);
                                            if (post.id === comment.postId) {
                                                let divComments = document.createElement("div");
                                                divComments.classList.add("comment");
                                                let commentId = document.createElement("h3");
                                                commentId.innerText = comment.id;
                                                let commentName = document.createElement("h3");
                                                commentName.innerText = comment.name;
                                                let commentEmail = document.createElement("h5");
                                                commentEmail.innerText = comment.email;
                                                let commentBody = document.createElement("p");
                                                commentBody.innerText = comment.body;
                                                divComments.append(commentId, commentName, commentEmail, commentBody);
                                                mainComments.appendChild(divComments);
                                                divPost.appendChild(mainComments);
                                            }
                                            btn.disabled=true;
                                        }

                                    })
                            }
                            divPost.append(id, title, body, btn);
                            mainDiv.appendChild(divPost);
                        }
                        userDiv.appendChild(mainDiv)
                        btnPost.disabled=true;
                    })
            }
            usersDiv.append(userDiv);
        }
        document.body.appendChild(usersDiv);
    })
