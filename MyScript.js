 const screen = document.getElementsByClassName('calculator__display');
 const keys = document.querySelectorAll('#funcKey');
 let onScreen = '';

// This chunk of code is listening to keys

keys.forEach(item => {
  item.addEventListener('mouseup', () => {
    onScreen += item.innerHTML;
    screen[0].innerHTML = onScreen;
  })
})

// This chunk of code is listening to AC key and clears the screen when triggered

document.querySelector('.clear').addEventListener('mouseup', () => {
  screen[0].innerHTML = 0;
  onScreen = '';
})

