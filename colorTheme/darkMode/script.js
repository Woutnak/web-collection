//variable
const darkMode = document.getElementById('darkMode');
//event listener
darkMode.addEventListener('change', () =>{
    //change the theme of website
    document.body.classList.toggle('dark');
});