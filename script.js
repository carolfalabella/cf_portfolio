
window.onload = function() {
  const mainNav      = document.getElementById("events"),
      // h2           = document.querySelector(".content h2"),
      header       = document.getElementByClass("timeline"),
      navScrolled  = "nav-scrolled",
      scrollShadow = "scroll-shadow";
      // morePadding  = "more-padding";

window.addEventListener("scroll", () => {
  if (this.pageYOffset > header.offsetHeight) {
    mainNav.classList.add(navScrolled, scrollShadow);
    // h2.classList.add(morePadding);
  } else {
    mainNav.classList.remove(navScrolled, scrollShadow);
    // h2.classList.remove(morePadding);
  }
});
}
window.onload = function() {
  onReady();
};
