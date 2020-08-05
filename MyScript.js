const screen = document.getElementsByClassName('calculator__display');
const keys = document.querySelectorAll('#funcKey');
let onScreen = '';
let whatToProcess = [];
let userCurrentInput = 0;
let operator;
let result;

// This chunk of code is listening to numeric keys

keys.forEach(item => {
  item.addEventListener('mouseup', () => {
    onScreen += parseInt(item.innerHTML);
    screen[0].innerHTML = onScreen;
    userCurrentInput += item.innerHTML;
    // console.log(userCurrentInput)
  })
})

// This blocks of code listens to operator keys and stores user inputs in whatToProcess

document.querySelectorAll('#KeyOperator').forEach(item => {
  item.addEventListener('mouseup', () => {
    operator = item.innerHTML
    onScreen += item.innerHTML
    whatToProcess.push(userCurrentInput)
    userCurrentInput = 0
    console.log(operator)

  })
})

// This chunk of code is listening to AC key and clears the screen when triggered

document.querySelector('.clear').addEventListener('mouseup', () => {
  screen[0].innerHTML = 0;
  onScreen = '';
  whatToProcess = [];
  operator = 0;
  result = 0;
  userCurrentInput = 0;
})

// This chunk of code is listens to Equals to key and calculates when triggered

document.querySelector('.KeyEqual').addEventListener('mouseup', () => {
  whatToProcess.push(userCurrentInput)
  // for(let i = 0; i < whatToProcess.length; i++){
  //   parseInt(whatToProcess[i])
  //   console.log(whatToProcess[i])
  //   console.log(typeof(parseInt(whatToProcess[i])))
  // }


  if (operator == '+') {
    result = parseInt(whatToProcess[0]) + parseInt(whatToProcess[1])
  } else if (operator == '-') {
    result = parseInt(whatToProcess[0]) - parseInt(whatToProcess[1])
  } else if (operator == '×') {
    result = parseInt(whatToProcess[0]) * parseInt(whatToProcess[1])
  } else if (operator == '÷') {
    result = parseInt(whatToProcess[0]) / parseInt(whatToProcess[1])
  }
  console.log(result)
  screen[0].innerHTML = result;
})