// Initialize Swiper
new Swiper(".swiper-landing", {
  parallax: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  speed: 1400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".swiper-works", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.25,
    },
    1024: {
      slidesPerView: 2.25,
    },
  },
});

// scroll to top btn
if (document.getElementById("up-btn")) {
  const upBtn = document.getElementById("up-btn");
  window.addEventListener("scroll", () =>
    window.scrollY >= 300
      ? upBtn.classList.add("show")
      : upBtn.classList.remove("show")
  );
  upBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  );
}
