const iconMenu = document.querySelector('#iconMenu');
const sidebar = document.querySelector('#sidebar');

let iconClick = document.querySelector(".fa-bars")

iconMenu.addEventListener('click', () => {
    
    if(iconClick.classList.contains("fa-bars")){
        iconClick.classList.replace("fa-bars", "fa-x");
    } else {
        iconClick.classList.replace("fa-x", "fa-bars");
    }
    
    sidebar.classList.toggle('expand');
});