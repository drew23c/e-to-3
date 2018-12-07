module.exports = (str) => {
    let newStr = str.split('');
    let newArr = []
    for(let i = 0; i < newStr.length; i++){
      if(newStr[i] === 'e' || newStr[i] === 'E'){
        newArr.push('3')
      }else{
        newArr.push(newStr[i])
      }
    }
    return newArr.join('');
  }