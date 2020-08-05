const screen = document.getElementsByClassName('calculator__display');
const keys = document.querySelectorAll('#funcKey');
let onScreen = '';
let operator;

// This chunk of code is listening to numeric keys

keys.forEach(item => {
  item.addEventListener('mouseup', () => {
    onScreen += parseInt(item.innerHTML);
    screen[0].innerHTML = onScreen;
    // console.log(`The user clicked ${item.innerHTML}, onScreen now contains ${onScreen.length} items`)
    // console.log(onScreen)
  })
})

// This chunk of code is listening to AC key and clears the screen when triggered

document.querySelector('.clear').addEventListener('mouseup', () => {
  screen[0].innerHTML = 0;
  onScreen = '';
  // console.log(`The user cleared input, onScreen now contains ${onScreen.length} items`)
})

// This blocks of code listens to operator keys

document.querySelectorAll('#KeyOperator').forEach(item => {
  item.addEventListener('mouseup', () => {
    console.log(item.innerHTML)
    onScreen += item.innerHTML

    // if(item.innerHTML == '+'){
    //   operator = +;
    // }else if(item.innerHTML == '-'){
    //   operator = -
    // }else if(item.innerHTML == '*'){
    //   operator = *
    // }else if(item.innerHTML == '÷'){
    //   operator = ÷
    // }

  })
})

// const calculate = () => {

// }




// This chunk of code is listens to Equals to key and calculates when triggered

document.querySelector('.KeyEqual').addEventListener('mouseup', () => {
  
})