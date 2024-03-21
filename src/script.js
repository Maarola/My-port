
// function scroll down
window.addEventListener("scroll", function(){

    var scrolldown = document.querySelector('.div-scroll-down');

    scrolldown.classList.toggle("end", window.scrollY > 20 );
});