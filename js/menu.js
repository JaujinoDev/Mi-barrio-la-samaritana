const MenuSamaritana = document.querySelector('.MenuSamaritana');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(MenuSamaritana);

MenuSamaritana.addEventListener('click',()=>{
    menu.classList.toggle('spread')
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target!= MenuSamaritana){
    menu.classList.toggle('spread')
   }
})

