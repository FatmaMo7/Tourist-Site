/* navbar*/
let menuIconOpen = document.querySelector(".menu-icon .open-icon");
let menuIconExit = document.querySelector(".menu-icon .exit-icon");
let dropbtn = document.querySelector(".dropbtn");
let dropbtnMobile = document.querySelector(".dropbtn-mobile");
let navList = document.querySelector(".list-container");
menuIconOpen.addEventListener("click", (e) => {
  menuIconOpen.style.display = "none";
  menuIconExit.style.display = "block";
  navList.style.right = "0%";
});
menuIconExit.addEventListener("click", () => {
  menuIconOpen.style.display = "block";
  menuIconExit.style.display = "none";
  navList.style.right = "-100%";
});

let mainContent = document.querySelector(".main-content");
mainContent.addEventListener("click", () => {
  navList.style.right = "-100%";
  menuIconOpen.style.display = "block";
  menuIconExit.style.display = "none";
});


/* Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*date*/
 $(function () {
   $("#datepicker").datepicker();
 });

 
/* fancy box*/
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
