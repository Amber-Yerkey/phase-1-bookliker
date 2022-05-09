document.addEventListener("DOMContentLoaded", function() {
    function getTitles(){
        fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(newTitles => newTitles.forEach(bookTitle => createBook(bookTitle)))
    }

    function createBook(bookTitle){
        //listing the book titles and showing on the page
        let newList = document.createElement('li')
        newList.className = bookTitle.id
        newList.textContent = bookTitle.title
        document.getElementById("list").appendChild(newList)

        //display information and like button on click
        newList.addEventListener('click', (e) => {
            const showLocation = document.getElementById("show-panel")
            showLocation.innerHTML = `
            <img src="${bookTitle.img_url}">
            <h2>${bookTitle.title}</h2>
            <h3>${bookTitle.subtitle}</h3>
            <h4>Author: ${bookTitle.author}</h4>
            <p>${bookTitle.description}</p>
            <ul id="userList">
            </ul>
            <button id ='likeButton'>LIKE</button>
            `
            //all of the liked users
            bookTitle.users.forEach(user => userList(user))

        })

        function userList(user){
            let ul = document.querySelector('#userList')
            let likeUsers = document.createElement('li')
            likeUsers.textContent = user.username
            ul.appendChild(likeUsers)
        }

    }

getTitles()

});
