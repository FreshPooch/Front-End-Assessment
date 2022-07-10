const recBtn = document.querySelector('#recommend-btn'); 
const restaurantArray = ['Pho Hong', 'Folinos', 'Honey Road', 'Sherpa Kitchen', 'Taco Gordo']; 


function pickRestaurant() {
  alert( restaurantArray[Math.floor(Math.random() * restaurantArray.length)]); 
}

recBtn.addEventListener('click', pickRestaurant); 