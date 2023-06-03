// method -> object
// function -> global (window, global)

const book = {
  title: 'Typescript in 23 seconds',
  authors: ['George Orwell', 'Someone else', 'Another person'],
  read() {
    console.log(this);
    },
  printAuthors() {
    this.authors.forEach(author => {
      console.log(this.title + ' was written by ' + author);
    });
  }
}


book.stopReading = function() {
    console.log(this);
    }

book.stopReading();

book.printAuthors();


// 2. this in a function
function watchMovie() {
  console.log(this);
}

// watchMovie();
