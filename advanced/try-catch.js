const getTip = (amount) => {
  if (typeof amount === 'number'){
    return amount * .25
  } else{
    throw Error ('Argument must be number')
  }
}

try{
  const result = getTip(20);
  console.log(result)
}catch(e){
  console.log('Catch block is running')
}


