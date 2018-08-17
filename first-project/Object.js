//Object key value pairs
let userDetails = {
  name: "Ezekiel",
  age: 34,
  isMarried: false,
  Job: "Developer"
}

console.log(`My name is ${userDetails.name} and I'm ${userDetails.age}`);

//Using functions 

let myBook = {
  name: 'Animal Farm',
  Author: 'Howard Zinn',
  PageCount: 210
}
let otherBook = {
  name: 'Good Girl Gone Bad',
  Author: 'Mike Hagger',
  PageCount: 300
}

let bookData = function(book){
  return{
    summary: `The book ${book.name} was written by ${book.Author} and it is ${book.PageCount} pages long`
  }
}

let bookSummary = bookData(myBook);
let otherBookSummary = bookData(otherBook);
console.log(bookSummary.summary);
console.log(otherBookSummary.summary);

//Object References

