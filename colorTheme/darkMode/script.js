//VARIABLE
const content = document.getElementsByTagName('body')[0];
const darkMode = document.getElementById('dark-change');
//EVENT LISTENER
darkMode.addEventListener('click',()=>{
 darkMode.classList.toggle('active');
 content.classList.toggle('night');
})
