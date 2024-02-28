
const form = document.querySelector('form');
const parse = (data) => JSON.parse(data);

class Post{
    constructor(post) {
        this.post = post;
    }

    render() {
        const{userId, id, title, body} = this.post;

        const post = document.createElement('div');
        post.classList.add('post');

        const infoId = document.createElement("div");
        infoId.classList.add('info_block');
        infoId.innerHTML = `
        <div>user ID: <b>${userId}</b></div>
		<div>post ID: <b>${id}</b></div>`;

        const postTitle = document.createElement("h2");
        postTitle.classList.add('title_post');
        postTitle.innerText = `${title}`;

        const postBody = document.createElement("p");
        postBody.classList.add('title_post');
        postBody.innerText = `${body}`;

        const button = document.createElement('button');
        button.classList.add('comment_button');
        button.innerText = "Показати коментарі";

        post.append(infoId, postTitle, postBody, button); 
        
        return post;
    }
}

class Comment{
    constructor(comment) {
        this.comment = comment;
    }

    render() {
        const{name, email, body} = this.comment;

        const comment = document.createElement('div');
        comment.classList.add('comment');
        
        const emailComment = document.createElement('div');
        emailComment.classList.add('comment_mail');
        emailComment.innerText = `Author: ${email}`;

        const nameComment = document.createElement("h2");
        nameComment.classList.add('text_comment');
        nameComment.innerText = `${name}`;

        const commentBody = document.createElement("p");
        commentBody.classList.add('text_comment');        
        const bodyText = body.replace(/\n/g, '');
        commentBody.innerText = `${bodyText}`;   

        comment.append(emailComment, nameComment, commentBody); 
        
        return comment;
    }
}

const wrapPost = document.querySelector('.wrap_post');
const wrapComment = document.querySelector('.wrap_comments');

function renderPost(PostData) {    
    const postInfo = new Post(PostData);
    const post = postInfo.render();
    wrapComment.innerHTML = '';

    wrapPost.hasChildNodes() ? wrapPost.replaceChild(post, wrapPost.firstChild) : wrapPost.append(post);
}

function renderComment(CommentData) {    
    const comments = CommentData;
    
    wrapComment.innerHTML = '';

    for (let index of comments) {
        let commentItem = new Comment(index);
        const  commentBlock = commentItem.render();
        
        wrapComment.append(commentBlock);
    };
    
}

function getPost(method, action) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, action);
    xhr.send();

    return new Promise((resolve, reject) => {
        xhr.addEventListener('readystatechange', () => {
            
            if(xhr.readyState === 4 && xhr.status === 200 ){                               
                resolve(xhr.response);                       
            } else if(xhr.status >= 400){                
                reject();
            }        
        }); 
    });
}


form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const idPost = document.querySelector('input').value;

    getPost('GET', `https://jsonplaceholder.typicode.com/posts/${idPost}`).
    then(
        (data) => {
            const parsePost = parse(data);
            
            return parsePost;
        },
        () => {
            const message = alert("Пост не знайдено! Cпробуйте ввести інше значення id від 1 до 100");

            return Promise.reject(message);
        }
    ).
    then(
        (parsePost) => {
            renderPost(parsePost);
            
            const commentButton = document.querySelector('.comment_button');
            
            commentButton.addEventListener('click', () =>{
                getPost('GET', `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`).
                    then(
                        (data) => {
                            const parseComment = parse(data);
                            
                            return parseComment;
                        },
                        () => {
                            const message2 = alert("Коментарі відсутні");
                
                            return Promise.reject(message2);
                        }
                    ).
                    then(
                        (parseComment) => {
                        renderComment(parseComment); 
                        },
                        (message2) => {
                            message2;
                        } 
                    );
            });    
        },
        (message) => {
            message;
        } 
    );
});






