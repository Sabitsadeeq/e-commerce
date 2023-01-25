const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenu = document.querySelectorAll(".icon-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  iconMenu.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
// cart- toggle
const cart = document.querySelector(".cart");
var cartToggle = document.querySelector(".cart-toggle");
cart.addEventListener("click", () => {
  cartToggle.classList.toggle("open");
});
// empty cart open
const emptyCart = document.querySelector(".empty-cart");
var cartDelete = document.querySelector(".cart-delete");
cartDelete.addEventListener("click", () => {
  emptyCart.classList.toggle("open-empty-cart")
});
// close cart toggle on scroll
window.addEventListener("scroll", () => {
  cartToggle.classList.remove("open")
  emptyCart.classList.remove("open-empty-cart")
});




