const calender = document.querySelector("#calender_btn");
const rsvp = document.querySelector("#rsvp_btn");

function addToCalender() {
  window.open(
    "https://www.google.com/calendar/render?action=TEMPLATE&text=HG%26HY+Wedding+Lunch&location=Empress&dates=20230930T040000Z%2F20230930T070000Z"
  );
}

function onRsvpBtn() {
  window.open("https://forms.gle/LroMmbAS8vU8fphu6");
}

calender.addEventListener("click", addToCalender);
rsvp.addEventListener("click", onRsvpBtn);

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //freeMode: true,
  slideToClickedSlide: true,
  zoom: {
    maxRatio: 3,
  },
});

const number = Array.from({ length: 15 }, (v, i) => i + 1);
const bullet = document.getElementsByClassName("swiper-pagination-bullet");
const blarray = Array.from(bullet);

blarray.forEach(
  (bl, i) => (bl.style.backgroundImage = `url("../img/pic${number[i]}.jpg")`)
);
