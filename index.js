

import searchFilters from "./Js/filtro_busqueda.js";
import hamburgerMenu from "./Js/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    
    searchFilters(".search", ".card");
     
    hamburgerMenu(".panel-btn", ".panel", ".menu ul a");


});

    // Darck Mode

const themeActual = localStorage.getItem(`theme`)
const toggle = d.querySelector(`#toggle`);

function darckMode(){
    
    if (themeActual) {
        document.documentElement.setAttribute(`data-theme`, themeActual);
    }
    
    if (themeActual === `oscuro`) {
        toggle.checked = true;
    }
    
    const cambiarTheme = (e) =>{
        if (e.target.checked) {
            document.documentElement.setAttribute(`data-theme`, `oscuro`);
            localStorage.setItem(`theme`, `oscuro`);
        } else{
            document.documentElement.setAttribute(`data-theme`, null);
            localStorage.setItem(`theme`, null);
        }
    };

    toggle.addEventListener(`click`, cambiarTheme);
}
darckMode();

    // render de productos



