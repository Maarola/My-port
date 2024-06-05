
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

const toggle = document.getElementById("toggle")
toggle.onclick = function(){
    let moon = document.querySelector(".btn__moon");
    let sun = document.querySelector(".btn__sun");
    let header = document.querySelector(".header");
    let logoa = document.querySelector(".logoa");
    let inicio = document.querySelector(".inicio");
    let sobre = document.querySelector(".sobre");
    let projeto = document.querySelector(".projeto");
    let contato = document.querySelector(".contato");
    let hero = document.querySelector(".hero")
    let main_text = document.querySelector(".main__div-text")
    let main_textp = document.querySelector(".main__text-p")
    let border_main__img = document.querySelector(".main__img-my")
    let span = document.querySelector('.iconlikedin')
    let span2 = document.querySelector('.icongithub')
    let btn = document.querySelector(".main__btn-cv")
    let text_skils = document.querySelector(".main__p-text")
    let text_skils2 = document.querySelector(".main__p-hidden")
    let about = document.querySelector(".about")
    let about_text = document.querySelector(".about__texth4-1")
    let about_text2 = document.querySelector(".about__texth4-2")
    let about_text3 = document.querySelector(".about__text-p")  
    let project = document.querySelector(".project")
    let project__txt = document.querySelector(".project__tittle")
    let contact = document.querySelector(".contact")
    let contact_h1 = document.querySelector(".contact__h1")
    let contact__info = document.querySelector(".contact_1")
    let contact__info2 = document.querySelector(".contact_2")
    let email_text = document.querySelector(".contact_email")
    let contact_span = document.querySelector(".contact__span-1")
    let contact_span2 = document.querySelector(".contact__span-2")
    let footer = document.querySelector(".footer")
    let footer_text = document.querySelector(".footer__text")
    let footer_linkedin = document.querySelector(".iconlikedin2")
    let footer_github = document.querySelector(".icongithub2")
    let card_1 = document.querySelector(".card_1")
    let card_2 = document.querySelector(".card_2")
    let card_3 = document.querySelector(".card_3")
    let card_4 = document.querySelector(".card_4")
    let card_5 = document.querySelector(".card_5")
    let card_6 = document.querySelector(".card_6")
    let card_7 = document.querySelector(".card_7")
    let card_8 = document.querySelector(".card_8")


    let white = "colorwrithe"
    let black = "colorblack"
    let bg = "bout__background" 
   

    if (moon.style.display === "none"){
        moon.style.display = "flex"
        sun.style.display = "none"
    }else {
        moon.style.display = "none"
        sun.style.display = "flex"
    }

    if (moon.style.display === "none"){
        

        // header 
        header.style.background = "#212121";
        logoa.classList.toggle(white);
        inicio.classList.toggle(white);
        sobre.classList.toggle(white);
        projeto.classList.toggle(white);
        contato.classList.toggle(white);

        // hero 
        hero.style.background = "#2d2e30";
        btn.classList.toggle("btnwhite")
        btn.style.border = "2px solid #fff";
        text_skils2.classList.toggle(white)
        text_skils.classList.toggle(white);
        main_text.classList.toggle(white);
        main_textp.classList.toggle(white);
        span.classList.toggle(white);
        span2.classList.toggle(white);
        border_main__img.style.border = "3px solid #fff";

        // project
        project.style.background = "#2d2e30"
        project__txt.style.color = "#fff"
        card_1.classList.toggle("card_black")
        card_2.classList.toggle("card_black")
        card_3.classList.toggle("card_black")
        card_4.classList.toggle("card_black")
        card_5.classList.toggle("card_black")
        card_6.classList.toggle("card_black")
        card_7.classList.toggle("card_black")
        card_8.classList.toggle("card_black")
        
        // about
        about.classList.toggle(bg)
        about_text.style.color = "#fff"
        about_text2.style.color = "#fff"
        about_text3.style.color = "#f9f9f9"

        // contact
        contact.style.background = "#212121"
        contact_h1.classList.toggle(white)
        contact__info.classList.toggle(white)
        contact__info2.classList.toggle(white)
        email_text.classList.toggle(white)
        contact_span.style.background = "#2d2e30"
        contact_span2.style.background = "#2d2e30"

        //footer
        footer.style.background = "#fff"
        footer_text.style.color = "#212121"
        footer_github.classList.toggle(black)
        footer_linkedin.classList.toggle(black)
        
          
    }else{
        // header
        header.style.background = "#ffff";
        inicio.classList.toggle(white);
        sobre.classList.toggle(white);
        projeto.classList.toggle(white);
        contato.classList.toggle(white);
        logoa.classList.toggle(white);
        
        // hero
        hero.style.background = "#f9f9f9";
        btn.style.border = "2px solid #2d2e32";
        btn.classList.toggle("btnwhite");
        text_skils.classList.toggle(white);
        main_textp.classList.toggle(white);
        main_text.classList.toggle(white);
        span.classList.toggle(white);
        span2.classList.toggle(white);
        text_skils2.classList.toggle(white)
        border_main__img.style.border = "3px solid #2d2e32";          

        // project
        project.style.background ="#f9f9f9"
        project__txt.style.color = "#2d2e32"
        card_1.style.background = "#fff"
        card_1.classList.toggle("card_black")

        // about
        about_text.style.color = "#2d2e32"
        about_text2.style.color = "#2d2e32"
        about_text3.style.color = "#555"
        about.classList.toggle(bg)

        // contact
        contact.style.background = "#fff"
        contact_h1.classList.toggle(white)
        contact__info.classList.toggle(white)
        contact__info2.classList.toggle(white)
        email_text.classList.toggle(white)
        contact_span.style.background = "#f9F9F9"
        contact_span2.style.background = "#F9F9F9"
        

        //footer
        footer.style.background = "#222"
        footer_text.style.color = "#fff"
        footer_github.classList.toggle(black)
        footer_linkedin.classList.toggle(black)
                



       
    }
    
}