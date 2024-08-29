    const navLinks = document.getElementById("nav-links");
    const menuBtn = document.getElementById("menu-btn");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open")
        menuBtn.setAttribute("class", 
            isOpen ? "ri-close-line" : "ri-menu-line"
        );
    });

    navLinks.addEventListener("click", (e) => {

        navLinks.classList.remove("open");
        menuBtn.setAttribute("class", "ri-menu-line");

    });


    const scroll = {
        distance: "50px", 
        origin: "bottom",
        duration: 1000,

    }

    ScrollReveal().reveal(".header__content h1", {
        ...scroll,

    });

    ScrollReveal().reveal(".header__content .section__description", {
        ...scroll,
        delay:500,

    });


    ScrollReveal().reveal(".about__content .section__header", {
        ...scroll,

    });

    ScrollReveal().reveal(".about__content .section__description", {
        ...scroll,
        delay:500,

    });

    ScrollReveal().reveal(".skills__card", {
        ...scroll,
    interval: 500,
    });


    ScrollReveal().reveal(".work__card", {
        ...scroll,
        interval: 500,
    });

