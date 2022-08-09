let menu = document.querySelector('.menu');
document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
    searchform.classList.remove('active');
}


let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    menu.classList.remove('active')
    
}


window.onscroll = () =>{
    menu.classList.remove('active');
    searchform.classList.remove('active');
}