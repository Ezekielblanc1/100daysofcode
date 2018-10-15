const getPuzzle = () => {
  //Making a HTTP request or initializing the request

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e)=>{
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('An error occured')
  }
})
request.open('GET','http://puzzle.mead.io/puzzle')
request.send()
//Request to get the country based on the country code
}