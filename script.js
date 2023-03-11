fetch("https://upadhayay.github.io/db.json").then((response)=> response.json()).
then((response)=>{
        var h1 = document.getElementById("books");
        let books = response.books;
            console.log(books);
            books.forEach((item) => {
                let { id, title, year } = item;
                let book = document.createElement("section");
                book.innerHTML = `
                <div id="${id}" class="title">
                <h1>${title}</h1>
                <h1>Published: ${year}</h1>
                <p>Read more....</p>
                </div>`
                h1.appendChild(book);
            });
    })
