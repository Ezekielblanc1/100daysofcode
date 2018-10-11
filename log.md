# #100daysofcode

### Day0 August 13, Monday

**Today's work**: Working on understanding Javascript Variables

**Thoughts** Have been declaring variables but working on understanding All about javascript variable declaration using the ES6 let and const


**Link to work**: [Andrew Mead Modern Js Bootcamp](https://www.udemy.com/modern-javascript/?couponCode=LEARNING)

##Day 1 August 14 ,Tuesday

**Today's work**: Continued with variable scope

**Thoughts** The scope of a variable is where a variable can be acessed,so you can't declare a variable anywhere and expect to access it if it is not in scope or within the parent scope

## Day 2 August 15, Wednesday

**Today's work**: Started working with functions

**Thoughts** Functions are actually subprograms that can be used and called in another program reducing code duplication

## Day 3 August 16, Thursday 

**Today's work**: Worked on Multiple and default arguments in functions and Template strings
 **Thoughts** Learnt how to work with multiple arguments and how to pass default arguments and how to use template strings to join strings together for netter formatting creating neater codes

 ## Day 4 August 17, Friday

 **Today's work** Started working with objects

 **Thoughts** Objects allows us to store related piece of information in a single central location which makes use of key value pairs

 ##Days 5 August 18, Saturday
 **Today's work** Continued with Javascript object methods
 **Thoughts** Methods in objects are object properties whose value is a function, inside the method we have access to "this" references the object the method is defined on, it also helps to access properties inside an object, also working with const which means constant it says that you can't reassign a constant variable after it has been created, when working with object you can manipulate the object but not reassign the object 
 Also going back to var based variables which are function scope and not block scoped,when you create a variable with var,its declaration gets hoisted to the top

 ##Day 6 August 19, Sunday
 **Todays work** Started learning how to work with arrays
 **Thoughts**Arrays allows us to store list of information, the index of an array is the position of the array we want to access which is zero based, the shift and unshift manipulates the array from the start, while shift and unshift starts from the first

 ##Day 7 August 27, Monday
 **Todays work** Looping over an array
 **Thoughts** There are array methods that allow you to loop through an array without using the normal for loop such as The for each method a function which is called for every item in the array

 ##Day 8 August 28 ,Tuesday -Day 14 September 3

 **work** Searching An array[Array Methods]
 **Thoughts** The Array.indexof Is a useful array method to locate an item in an array, it returns the index of the array if it exists but returns negative one if it does not exist, i also learnt that when comparing two objects, it does not matter if they have the same object, What makes two object equal is if they are the same object in memory, FindIndex if it finds a match it stops running and returns a match, I also looked into the Array find method that finds the search element instead of the index as to that of the findIndex that meets the search criteria but it returns the first value if there are alot of options that meet the criteria.
 Also saw how to sort an array using the array.sort method,in comparing two alphabets the capitalization is important eg "A" will come before "a"("A" < "a");

 ##Day 15 September 4
 **Todays Work** DOM 
 **Thoughts** DOM which stands for document object model is a object in javascript that models the html document, the object in the dom is the document object it is not self created but it is provided by the browser, we also get elements in the DOM by quering it eg by using document.querySelector which matches the first match it finds. I also looked at textContent which is a property used  to read value the dom element
 Also looked at how to add elements to the DOM using the document.createElement and appendChild and how to handle user interactions via event handlers,events which is basically what the user does. The event is called with an argument which is useful when you want to do something with the element that the event is fired on 

##Day 16 September 5
**Todays work** DOM Contd
**Thoughts**I dived into advanced DOM quering which comprises of targeting elements using their id's and classes. ID's are unique identifier that you give to your elements, they are unique at least one element in your page,multiple elements can have the same class

##Day17 September 6
**Todays work**DOM Contd
**Thoughts** I started rendering my filtered data for both my journal app and todo app by saving it in an object and setting up the function to re-render when there is a change. 

##Day 18 September 7
**Todays work** Set up the search filter for the todo app and added forms to both apps
**Thoughts** Wired up the filter search text for the todo app, same set up for the journal app. Learnt about forms and how to us it to structure our input tags. Looked at the name attribute which is something you put on your fields when they are inside a form which makes it easy to access the data in the field when the form gets submitted. I also looked at a special property on the dom element which is elements which is going to allow us to access the fields we have set up


##Day 19 September 8 , Saturday

**Today's work**: Continued with the todo app

**Thoughts** Added the label to the checkbox which helped for accessibility and also the propert on e for checked that we use to get the value is the checked prop which is a boolean also set up the select drop down for the journal app much like the text based input to read data off the select we use the value prop on the e.target

##Day 20 September 9, Sunday 

**Today's work**: Working with local storage

**Thoughts** Got to understand how to use the CRUD operations to save data in the local storage, you stringify before you write the data and parse just after you read the data

 ##Day 21 September 10
 **Todays's work** : Code refactoring

 **Thoughts** Seperated the code into function calls in a seperate file for code readability and clean code. It is important to know that when you split your files they share a single global namespace

 ##Day 22 September 11
 **Today's work** : Debugging my application

 **Thoughts**Console.log's are good in knowing where your program went wrong but it is more ideal to use debugger 

 ##Day 23 September 12
 **Today's work** : Complex DOM rendering and setting up a third party library which is basically a javascript code that somebody else wrote.Eg UUID which means universally unique identifier


##Day 24 September 13
**Todays work** : Modified the todo checkbox to work with the data saved in local storage

##Day 25 September 14
**Todays work**: Edited the note and todo app
**Thoughts** I realized that you can add hyper links in js with the setAttribute property where you specify the href and the page you want to visit once you click the link

##Day 26 September 15
**Todays work**: Worked on switching between pages based on user interactions on the journal app
**Thoughts**: The location object which is provided by the browser just like document object.The location object provides us with the assign method which takes a string value which is the sam you would put in a href value. The location.assign() is a function that takes a single argument the url you are trying to go to

##Day 27 September 16
**Todays work**: Listening to changes in local storage which will allow me to keep my tabs in sync and working with javascript dates
**Thoughts**: Worked with another global variable provided by the browser which contains all sorts of things related to the browser window and all most of the browser variables i have used so far. In fact all of the global variables live on windows.While working with dates the getFullMonth is zero indexed

##Day 28 September 18
**Today's work**: Continue with javascript dates and Moments
**Thoughts** Working with dates can be awkward and clunky and can most times not be user friendly

##Day 29 September 19
**Today's work**: Integrating Moment into the journal app
**Thoughts** The moment library is such a useful one because it makes working with native date object easy to understand

##Day 30 September 20
**Today's work**: Adding some finishing touches to the journal app
**Thoughts** Being able to sort based on when the journal was last edited was what got me in love with working with moments


##Day 31 September 21
**Today's work**: Review the journal app for any bugs found out that the uuid stopped generating id's due to the way i loaded in the script in my function file

##Day 32 September 22
**Today's work**: Arrow Function
**Thoughts**: One of the great diffrence with the arrow function is the short hand syntax

##Day 33 September 23
**Today's work**: Using the ternary operator to structure simple conditionals
**Thoughts** The ternary or conditional operator is a clean way of writing most simple conditional statements not entirely an alternative to the if else statements tho

##Day 34 September 24
**Today's work**: Truthy and falsy values in javascript
**Thoughts** The thing that goes into  the if statement is a boolean, when checking for the presence or absence of something that should be considered a truthy or falsy value

#Day 36 September 25
**Todays's work**: Type coercion
**Thoughts**: Because Javascript is a loosely typed language therefore most times it tries to convert data types into what it assumes you want

##Day 37 September 26
**Today's work**: Handling errors with Try catch and a quick dive into OOP(object oriented programming)
**Thoughts**: Most at times we run into errors that break our program or cause it to behave inappropraitely but with tracking errors with the try catch we can be able to spot the error while not entirely affecting the application

##Day 38 September 27
**Todays work**: OOP
**Thoughts** Object oriented programming, which is basically a programming concept that is based on a particular concept the importance of this concept cannot be overemphasized

##Day 39 September 28
**Todays work**: Constructor function, Prototypal inheritance
**Thoughts**: Basically function used with the new keyword can be referred to as constructor functions,the new keyword generates a new object for the new instance, Which gives us access to that object in the constructor function via the this value which we use to customize the constructor function

##Day 40 September 29
**Today's work**: Working on the Hangman game
**Thoughts**: Started the functionalities the hangman game exposed me to the power of constructor function and Prototype

##Day 41 September 30
**Today's work**: Continued on the game, the ability to make a guess

##Day 42 October 1
**Today's work**: Removed the dummy guess array to allow guesses from the user to come from clicking any key on the keyboard, using the window object

##Day 43 October 2
**Today's work**: Tracking the status of the player, which is either playing, failed or finished, set up the methods to execute that

##Day 44 October 3
**Today's work**: To render the status message on the browser based on user interaction

##Day 45 October 4
**Today's work**: Working with the class Syntax and restructuring the hangman constructor function to using classes
**Thoughts** Class is the alternative way of writing our constructor function, more like a more better way of structuring the constructor function

##Day 46 October 5
**Today's work**: Working with sub classes
**Thoughts**: In classes we can create multiple subclasses with the extend reserved word which let's us borrow the functionalities of the Parent class with the super function which gives us access to the Properties or arguments of the parent class,we can overide methods too