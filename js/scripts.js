const menuToggle = document.querySelector('#navToggle');
const navbar = document.querySelector('.menuNav');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.menuNav li');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    //banner.classList.toggle('sticky', window.scrollY > 0);
    if(this.scrollY >= 560){
        scrollTop.classList.add('showScroll'); 
    }else{
        scrollTop.classList.remove('showScroll');
    } 
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active');
    })
});