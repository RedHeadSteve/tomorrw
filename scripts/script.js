// scroll from menu //

function scrollMissie() {
    let missie = document.getElementById("services");
    missie.scrollIntoView({behavior: "smooth"});
}

function scrollClient() {
    let client = document.getElementById("client");
    client.scrollIntoView({behavior: "smooth"});
}

function scrollContact() {
    let client = document.getElementById("contact");
    client.scrollIntoView({behavior: "smooth"});
}

// swiper //

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 45,
        slideShadows: true,
        scale: 0.8,

    },
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: -10,
    centeredSlides: true,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        900: {
            slidesPerView: 2.8,
            spaceBetween: 0,
        }
    }
});

// responsiveness //

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

