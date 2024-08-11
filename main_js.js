const sections = document.querySelectorAll("section"); // or any selector that matches your sections

const navLi = document.querySelectorAll(".navLi-class"); // Replace with your actual class selector
const mobilenavLi = document.querySelectorAll(".mobilenavLi-class"); // Replace with your actual class selector

loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab");
    });
});
