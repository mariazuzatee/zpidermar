document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll(".main-nav a");
  const sections = [...document.querySelectorAll("main section[id]")];

  const activateLink = () => {
    let currentId = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isActive);
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  activateLink();
  window.addEventListener("scroll", activateLink, { passive: true });
});
