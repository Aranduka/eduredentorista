const buttonToggle = document.querySelector('.toggle-button');
const navsContainer = document.querySelector('.lista-container') ;
const navsLinks = document.querySelectorAll('.item-lista-navegador');

navsLinks.forEach(elemento => {
    elemento.addEventListener('click', function(){
        navsContainer.classList.toggle('active')
    });
});

buttonToggle.addEventListener('click', function(){
    navsContainer.classList.toggle('active');
});

