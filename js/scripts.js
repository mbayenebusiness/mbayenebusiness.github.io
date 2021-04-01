const menuToggle = document.querySelector('#navToggle');
const navLinks = document.querySelector('.menuNav');
const header = document.querySelector('header')

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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