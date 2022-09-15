export default function darkMode(toggle){

    const d = document;
    const themeActual = localStorage.getItem(`theme`)
    const toggle = d.querySelector(`#toggle`);

    if (themeActual) {
        d.documentElement.setAttribute(`data-theme`, themeActual);
    }

    if (themeActual === `oscuro`) {
        toggle.checked = true;
    }

    const cambiarTheme = (e) =>{
        if (e.target.checked) {
            d.documentElement.setAttribute(`data-theme`, `oscuro`);
            localStorage.setItem(`theme`, `oscuro`);
        } else{
            d.documentElement.setAttribute(`data-theme`, null);
            localStorage.setItem(`theme`, null);
        }
    };

    toggle.addEventListener(`click`, cambiarTheme);
}
