// modal test for vanilla javascript
const btn = document.querySelector(".second-btn");
const modal = document.querySelector("#modal");
const close = document.querySelector(".close");
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const imageTop1 = document.querySelector(".imgtop-1");
/* const imageTop2 = document.querySelector(".imgtop-2");
const imageTop3 = document.querySelector(".imgtop-3");
const imageTop4 = document.querySelector(".imgtop-4"); */
const bottomImages = document.querySelectorAll(".imgbottom");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenu = document.querySelectorAll(".icon-menu");
const cart = document.querySelector(".cart");
const emptyCart = document.querySelector(".empty-cart");
const img = document.querySelector(".imgtop-1");
const btns = document.querySelectorAll(".btn");

// mobile menu toggler
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  iconMenu.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
// cart- toggle
var cartToggle = document.querySelector(".cart-toggle");
cart.addEventListener("click", () => {
  cartToggle.classList.toggle("open");
});
// empty cart open
var cartDelete = document.querySelector(".cart-delete");
cartDelete.addEventListener("click", () => {
  emptyCart.classList.toggle("open-empty-cart");
});
// close cart toggle on scroll
window.addEventListener("scroll", () => {
  cartToggle.classList.remove("open");
  emptyCart.classList.remove("open-empty-cart");
});

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});

const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget;
    // Right button
    if (styles.classList.contains("next")) {
      count++;
    }

    //Left button
    if (styles.classList.contains("previous")) {
      count--;
    }
    console.log(count);
    if (count > images.length - 1) {
      count = 0;
    }
    if (count < 0) {
      count = images.length - 1;
    }
    img.src = images[count];
    console.log(img);
  });
});
function limitter(num) {
  // check if count is less than 0 then return last index of image array
  if (num < 0) {
    return images.length - 1;
  }

  // check if count is less than 0 then return last index of image array
  if (num > images.length - 1) {
    return 0;
  }
  return num;
}
console.log(bottomImages);
bottomImages.forEach((image, i) => {
  image.addEventListener("click", () => {
    count = i;
    img.src = images[count];
  });
});

// const images = [
//   "images/image-product-1.jpg",
//   "images/image-product-2.jpg",
//   "images/image-product-3.jpg",
//   "images/image-product-4.jpg",
// ];
// const nextBtn = document.querySelector(".next");
// const previousBtn = document.querySelector(".previous");
// const imgShow = document.querySelector("imgTop-1");
// let count = 0;
// function showPerson(person) {
//   const item = images[person];
//   imgShow.src = item;
// }
// nextBtn = addEventListener("click", function () {
//   count++;
//   showPerson(count);
// });
