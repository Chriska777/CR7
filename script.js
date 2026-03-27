const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav a");

const syncActiveLink = () => {
  let current = "";

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 140;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", syncActiveLink);
window.addEventListener("load", syncActiveLink);
