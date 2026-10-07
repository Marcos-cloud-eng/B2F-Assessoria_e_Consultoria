// ======================================================
// B2F ASSESSORIA E CONSULTORIA
// Landing Page - JavaScript
// ======================================================


// ======================================================
// CONTATOS OFICIAIS
// ======================================================

const contatos = {

    whatsapp: "5511945084158",

    instagram: "https://www.instagram.com/b2fcontabil/",

    linkedin: "https://www.linkedin.com/company/in/b2f-contabil-93406043a/?isSelfProfile=true/"

};


// ======================================================
// MENSAGEM AUTOMÁTICA DO WHATSAPP
// ======================================================

const mensagemWhatsApp =
    "Olá! Vim pelo site da B2F Assessoria e Consultoria e gostaria de saber mais sobre os serviços.";


// Codifica a mensagem para funcionar corretamente na URL
const mensagemCodificada =
    encodeURIComponent(mensagemWhatsApp);


// Monta o link completo do WhatsApp
const whatsappURL =
    `https://wa.me/${contatos.whatsapp}?text=${mensagemCodificada}`;


// ======================================================
// BOTÃO PRINCIPAL "FALE COM A B2F"
// ======================================================

const heroWhatsApp =
    document.querySelector(".hero-buttons .btn-primary");

if (heroWhatsApp) {

    heroWhatsApp.href = whatsappURL;

    heroWhatsApp.target = "_blank";

    heroWhatsApp.rel = "noopener noreferrer";

}


// ======================================================
// WHATSAPP - SEÇÃO CONTATO
// ======================================================

const whatsappLink =
    document.getElementById("whatsapp-link");

if (whatsappLink) {

    whatsappLink.href = whatsappURL;

}


// ======================================================
// WHATSAPP - FOOTER
// ======================================================

const footerWhatsApp =
    document.getElementById("footer-whatsapp");

if (footerWhatsApp) {

    footerWhatsApp.href = whatsappURL;

    footerWhatsApp.target = "_blank";

    footerWhatsApp.rel = "noopener noreferrer";

}


// ======================================================
// INSTAGRAM - SEÇÃO CONTATO
// ======================================================

const instagramLink =
    document.getElementById("instagram-link");

if (instagramLink) {

    instagramLink.href = contatos.instagram;

}


// ======================================================
// INSTAGRAM - FOOTER
// ======================================================

const footerInstagram =
    document.getElementById("footer-instagram");

if (footerInstagram) {

    footerInstagram.href = contatos.instagram;

    footerInstagram.target = "_blank";

    footerInstagram.rel = "noopener noreferrer";

}


// ======================================================
// LINKEDIN
// ======================================================

// Enquanto não tivermos a página oficial,
// os links do LinkedIn ficam ocultos.

const linkedinLink =
    document.getElementById("linkedin-link");

const footerLinkedin =
    document.getElementById("footer-linkedin");


if (contatos.linkedin) {

    if (linkedinLink) {

        linkedinLink.href = contatos.linkedin;

    }


    if (footerLinkedin) {

        footerLinkedin.href = contatos.linkedin;

        footerLinkedin.target = "_blank";

        footerLinkedin.rel = "noopener noreferrer";

    }

} else {

    if (linkedinLink) {

        linkedinLink.style.display = "none";

    }


    if (footerLinkedin) {

        footerLinkedin.style.display = "none";

    }

}


// ======================================================
// MENU MOBILE
// ======================================================

const menuToggle =
    document.getElementById("menu-toggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");


        const menuAberto =
            navbar.classList.contains("active");


        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );


        menuToggle.textContent =
            menuAberto ? "✕" : "☰";

    });


    // Fecha o menu depois de clicar em um link

    const navLinks =
        navbar.querySelectorAll("a");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


// ======================================================
// ANO AUTOMÁTICO NO FOOTER
// ======================================================

const currentYear =
    document.getElementById("current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}