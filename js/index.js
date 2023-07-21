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

// swiper
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
});

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

let currentImg = document.querySelector(".swiper-slide-active img");

function modalfunc() {
  var currentSrc = currentImg.getAttribute("src");
  modal.style.display = "flex";
  modalImg.src = currentSrc;
}

document
  .querySelector(".swiper-slide-active")
  .addEventListener("click", modalfunc);

swiper.on("transitionEnd", function () {
  currentImg = document.querySelector(".swiper-slide-active img");
  currentImg.addEventListener("click", modalfunc);
});

span.onclick = function () {
  modal.style.display = "none";
};

modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal")) {
    modal.style.display = "none";
  }
});

// Thumbnail
const number = Array.from({ length: 15 }, (v, i) => i + 1);
const bullet = document.getElementsByClassName("swiper-pagination-bullet");
const blarray = Array.from(bullet);

blarray.forEach(
  (bl, i) => (bl.style.backgroundImage = `url("../img/pic${number[i]}.jpg")`)
);

//dday
const ddayCount = document.querySelector(".dday-count");
function getTime() {
  const date = new Date();
  const dday = new Date("September 30, 2023 12:30:00");
  const cal = dday - date;
  const secondsInMs = Math.floor(cal / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const hours = hoursInMs % 24;
  const minutes = minutesInMs % 60;
  const seconds = secondsInMs % 60;
  const daysStr = `${days < 10 ? `0${days}` : days} days`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  days < 0
    ? (ddayCount.innerHTML = "0 days 00h 00m 00s")
    : (ddayCount.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`);
}

getTime();
setInterval(getTime, 1000);
