burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-links");
// burger2 = document.querySelector(".burger2");

burger.addEventListener("click", () => {
  //   burger.classList.toggle("burger");
  //   burger2.classList.toggle("burgeer2");
  navbar.classList.toggle("h-nav-resp");
  navbar.classList.toggle("v-class-resp");
});
