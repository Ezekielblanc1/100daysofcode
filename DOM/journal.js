const paragraph = document.querySelectorAll('p');
paragraph.forEach(function(para){
  para.textContent = '********'
  console.log(para.textContent)
})
//Add elements via the DOM

const heading = document.createElement('h2');
heading.textContent = "Second heading"
document.querySelector('body').appendChild(heading)


document.querySelector('button').addEventListener('click', function(e){
  console.log('You clicked me')
})