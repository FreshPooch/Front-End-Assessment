const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place'); 
const ritualBtn = document.querySelector('#ritual'); 

function favColor() {
  alert('My favorite color is blue!')
}

function favPlace() {
  alert('My favorite place is the beach!')
}

function favRitual() {
  alert('My favorite ritual is going to practice')
}

colorBtn.addEventListener('click', favColor); 
placeBtn.addEventListener('click', favPlace); 
ritualBtn.addEventListener('click', favRitual);