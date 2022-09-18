var menu=document.querySelector('.navbar'),
    nutdn=document.querySelector('.login'),
    nutokdn=document.querySelector('.btn-login'),
    frdn=document.querySelector('.form-login');
    
window.addEventListener('scroll',function(){
    if(window.pageYOffset>80)
    menu.classList.add('doimenu');
    else
    menu.classList.remove('doimenu');

});

nutdn.onclick=function(){
    frdn.classList.toggle('active');
}
nutokdn.onclick=function(){
    frdn.classList.remove('active');
}
