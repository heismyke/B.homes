const menu = document.querySelector('.fa-solid');
const navLinks = document.querySelector('ul');

menu.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    if(menu.classList.contains('fa-bars')){
        menu.classList.replace('fa-bars', 'fa-xmark')
    }else{
        menu.classList.replace('fa-xmark', 'fa-bars')
    }
});



