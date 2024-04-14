
// function scroll down
window.addEventListener("scroll", function(){

    var scrolldown = document.querySelector('.div-scroll-down');

    scrolldown.classList.toggle("end", window.scrollY > 20 );
});

// function header
window.addEventListener("scroll", function(){
    let inicio = document.querySelector(".inicio");
    let sobre = document.querySelector(".sobre");
    let projeto = document.querySelector(".projeto");
    let contato = document.querySelector(".contato");

    inicio.classList.toggle("novacor", window.scrollY < 960);
    sobre.classList.toggle("novacor", window.scrollY > 960 && window.scrollY < 1850);
    projeto.classList.toggle("novacor", window.scrollY > 1850 && window.scrollY < 2500);
    contato.classList.toggle("novacor", window.scrollY > 2500);
});
