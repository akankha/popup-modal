const btn =document.getElementById('btn'); 
const popUpComtainer =document.getElementById('pop-up-comtainer');
const close =document.getElementById('close');



btn.addEventListener('click',() => {
  popUpComtainer.classList.add('active');
})

close.addEventListener('click',() => {
  popUpComtainer.classList.remove('active');
})

