// Minimal navigation and page transition helpers.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const navAnchors = document.querySelectorAll(".nav-links a");
navAnchors.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath) {
    link.classList.add("active");
  }
});

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

const internalLinks = document.querySelectorAll("a[data-transition]");
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = link.getAttribute("href");
    if (!url || url.startsWith("#")) return;
    event.preventDefault();
    document.body.classList.add("page-exit");
    setTimeout(() => {
      window.location.href = url;
    }, 180);
  });
});
