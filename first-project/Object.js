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

const salesStore = {
  owner: "Ezekiel blanc",
  expenses: [],
  income: [],
  addExpense: function(desc, amount){
    this.expenses.push({
      desc: desc,
      amount: amount
    })
  },
  addIncome: function(desc, amount){
    this.income.push({
      desc: desc,
      amount: amount
    })
  },
  getAccountSummary: function(){
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0


    this.expenses.forEach(function(expense){
      totalExpenses = totalExpenses + expense.amount
    })
    this.income.forEach(function(income){
      totalIncome = totalIncome + income.amount
    })

    accountBalance = totalIncome - totalExpenses
    return `${this.owner} has a balance of ${accountBalance}. ${totalIncome} in income ${totalExpenses} in expenses`
  }
}

salesStore.addExpense("Weavon", 1200);
salesStore.addExpense("Bags", 100);
salesStore.addExpense("RechargeCard", 200);
salesStore.addIncome("Contract", 3400)
console.log(salesStore.getAccountSummary())