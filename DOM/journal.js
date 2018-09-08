const paragraph = document.querySelectorAll('p');
paragraph.forEach(function(para){
  // para.textContent = '********'
  console.log(para.textContent)
})
//Add elements via the DOM

const heading = document.createElement('h2');
heading.textContent = "Second heading"
document.querySelector('body').appendChild(heading)


document.querySelector('#first-btn').addEventListener('click', function(e){
  console.log('You clicked me')
})

document.querySelector('#second-btn').addEventListener('click', function(e){
  document.querySelectorAll('.journal').forEach(function(journal){
    journal.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function(e){
  console.log(e.target.value)
})