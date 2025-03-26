
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

    inicio.classList.toggle("novacor", window.scrollY < 860);
    sobre.classList.toggle("novacor", window.scrollY > 860 && window.scrollY < 1895);
    projeto.classList.toggle("novacor", window.scrollY > 1895 && window.scrollY < 2520);
    contato.classList.toggle("novacor", window.scrollY > 2520);
});
 