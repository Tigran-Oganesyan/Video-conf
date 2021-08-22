const button = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

button.addEventListener('click', function(){

    menu.classList.toggle('open-menu');
})