const paragraph = document.querySelectorAll('p');
paragraph.forEach(function(para){
  para.textContent = '********'
  console.log(para.textContent)
})

