let cities = ['Lagos', 'Aba'];
console.log(cities.length);


//Adding and items to an array

let data = ['Ada', 'Mary', 'Jen'];
console.log(data.push('Ngozi'));
console.log(data.pop('Amaka'));


let numbers = [1,2,3,45];
console.log(numbers.shift());
console.log(numbers.unshift(1));

//Using the splice

let aplha = ['John', 'Mark', 'Eazi'];
console.log(aplha.splice(1,1));

//Using the for Each method;

let languages = ['JavaScript', 'PHP', 'Java', 'Ruby', 'C#'];
console.log(`I have ${languages.length} languages in the array`)
languages.forEach(function(language, index){
  const num = index  + 1;
  console.log(`${num}. ${language} `)
})

//Using the for loop to iterate

for(let count = 0; count < languages.length; count++){
  console.log(languages[count])
}
//Counting downwards 
for (let count = languages.length - 1; count >=0; count--){
  console.log(languages[count])
}

//Array IndexOf 
let currency = ["Dollar", "Naira", "Yen", "Pounds"];
console.log(currency.indexOf("Dollar"));

const movies = [
  {
    name: "Things fall apart",
    producer: "John Doe"
  },
  {
    name: "Many years Ago",
    producer: "Mark ken"
  },
  {
    name: "Gods not Dead",
    producer: "Resy Duke"
  }
]

const index = movies.findIndex(function(movie){
  //console.log(movie);
  return movie.name === "Many years Ago"
});
console.log(index);

const searchMovie = function(movieFunc, movieName){
  const index = movies.findIndex(function(movie){
    return movie.name.toLowerCase() === movieName.toLowerCase()
  })
  return movies[index]
}
const searchResult = searchMovie(movies, "Things fall apart");
console.log(searchResult);

const myTodos = [
  {
    text: 'Write some code',
    completed: true
  },
  {
    text: "Visit udacity to complete Js tutorial",
    completed: false
  },
  {
    text: "Read Kyle Simpson's You don't know javascript",
    completed: true
  }
]

const todosFunc = function(todos, todoText){
  const todosIndex = myTodos.findIndex(function(todo){
    return todo.text.toLowerCase() === todoText.toLowerCase()
    // console.log(todosIndex)
  })
  if(todosIndex > -1){
    myTodos.splice(todosIndex, 1)
  }
}

//  todosFunc(myTodos, "Write some code");
// console.log(myTodos);

//Using the filter method

const filteredMovie = movies.filter(function(movie){
  const isNameMatch = movie.name.toLowerCase().includes('th');
  const producerMatch = movie.producer.toLowerCase().includes('th')
  return isNameMatch || producerMatch
})

console.log(filteredMovie);

//Sorting Arrays
 
const sortMovies = function(moviesfunc){
  movies.sort(function(a, b){
    if(a.name.toLowerCase() < b.name.toLowerCase()){
      return -1
    } else if(b.name.toLowerCase() < a.name.toLowerCase()){
      return 1
    }else{
      return 0
    }
  })
}
sortMovies(movies);
console.log(movies);

//Sorting My todos Array

const sortTodos = function(todos){
  myTodos.sort(function(a,b){
    if(!a.completed && b.completed){
      return -1
    } else if(!b.completed && a.completed){
      return 1
    }else{
      return 0
    }
  })
}
sortTodos(myTodos);
console.log(myTodos);






