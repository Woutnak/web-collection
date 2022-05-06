//variable
const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const salmon = document.querySelector('.salmon');
const yellow = document.querySelector('.yellow');
// NB: *querySelectorAll *forEach *switch
//  querySelectorAll selectionne tous les elements qui ont comme classe="theme"
// forEach nous invite de parcourir 1 a 1 les 3 different theme 
//Switch analyse chaque id selectionnE
theme.forEach((item) =>{
    item.addEventListener('click',(e) =>{
        console.log(e.target.id);
        document.body.classList.remove("dark-theme","salmon-theme","yellow-theme");

    switch(e.target.id){
        case "dark":
            document.body.classList.add("dark-theme");
        break;
        case "salmon":
            document.body.classList.add("salmon-theme");
        break;
        case "yellow":
            document.body.classList.add("yellow-theme");
        break;
        default:
            null;
    }
    } )
})
 