var swiper = new Swiper(".mySwiper", {
    loop: false,
    freeMode: false,
    spaceBetween: 12,
    slidesPerView: 4,
    breakpoints: {
    0: {
      slidesPerView: 'auto',
    },
    940: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.mySwiper2', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", onPhoneInput, false);
  phoneInput.addEventListener("focus", onPhoneInput, false);
  phoneInput.addEventListener("blur", onPhoneBlur, false);

  function onPhoneInput(e) {
    let x = e.target.value.replace(/\D/g, "").slice(0, 11);
    let formatted = "+7";

    if (x.length > 1) formatted += " (" + x.slice(1, 4);
    if (x.length >= 4) formatted += ") " + x.slice(4, 7);
    if (x.length >= 7) formatted += "-" + x.slice(7, 9);
    if (x.length >= 9) formatted += "-" + x.slice(9, 11);

    e.target.value = formatted;
  }

  function onPhoneBlur(e) {
    const value = e.target.value;
    if (value.replace(/\D/g, "").length < 11) {
      e.target.value = "";
    }
  }
});

const btn = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');
const closePopup = document.querySelector('.close img');

document.addEventListener('click', function (e) {
  if(e.target === btn) {
    popup.classList.add('visible');
    overlay.classList.add('visible');
    body.classList.add('lock');
    popup.scrollTop = 0;
  } else if( e.target === overlay || e.target === closePopup) {
    popup.classList.remove('visible');
    overlay.classList.remove('visible');
    body.classList.remove('lock');
  } else if (e.target === submit) {
    if (form.checkValidity()) {
      popup.classList.remove('visible');
      overlay.classList.remove('visible');
      body.classList.remove('lock');
      form.submit();
    } else {
      form.reportValidity();
    }
  }
});


let startY = 0;
let endY = 0;

popup.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

popup.addEventListener('touchmove', (e) => {
  endY = e.touches[0].clientY;
});

popup.addEventListener('touchend', () => {
  const swipeDistance = endY - startY;
  const swipeThreshold = 300; // минимальная длина свайпа

  if (swipeDistance > swipeThreshold) {
    popup.classList.remove('visible');
    overlay.classList.remove('visible');
    body.classList.remove('lock');
  }
});