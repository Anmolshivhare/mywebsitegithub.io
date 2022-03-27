
burgar=document.querySelector('.burgar');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.right-nav');

burgar.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})


