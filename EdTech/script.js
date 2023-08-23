let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    // slidesPerView: 2,
    spaceBetween: 20,
    grapCursor: true,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    mousewheel: true,
    keyboard: true,
  });


  var swiper = new Swiper(".teachers-slider", {
    // slidesPerView: 2,
    spaceBetween: 20,
    grapCursor: true,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    mousewheel: true,
    keyboard: true,
  });

  // var swiper = new Swiper(".review-slider", {
  //   // slidesPerView: 2,
  //   spaceBetween: 20,
  //   grapCursor: true,
  //   loop: true,
  //   cssMode: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //     640: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //     }
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable : true,
  //   },
  //   mousewheel: true,
  //   keyboard: true,
  // });
