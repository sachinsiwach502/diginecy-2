$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

let scroll_top = document.querySelector(".arrow");
let scrollPt = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPt) {
        scroll_top.style.display = "block";
    } else {
        scroll_top.style.display = "none";
    }
})

scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





gsap.from(".arrow", {
    y: 30,
    repeat: -1,
    yoyo: true
})


// let mode = document.querySelector("body");
// let light = document.querySelector(".moon");
// let modee = "light";
// light.addEventListener("click", () => {

//     if (modee === "light") {
//         mode.style.backgroundColor = "black";
//         modee = "dark";
//     } else {
//         mode.style.backgroundColor = "white";
//         modee = "light";
//     }
// })