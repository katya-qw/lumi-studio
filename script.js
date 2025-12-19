document.addEventListener("DOMContentLoaded", () => {
  // Мобільне меню
  const navToggle = document.querySelector(".nav-toggle");
  const sideNav = document.querySelector(".side-nav");

  if (navToggle && sideNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = sideNav.style.display === "block";
      sideNav.style.display = isOpen ? "none" : "block";
    });

    sideNav.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        sideNav.style.display = "none";
      }
    });
  }

  // Підсвітка активного пункту меню при скролі
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const activateLinkOnScroll = () => {
    let currentId = "";
    const scrollY = window.scrollY + 120;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", activateLinkOnScroll);
  activateLinkOnScroll();

  // Обробка форми (демо)
  const bookingForm = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  if (bookingForm && formMessage) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = bookingForm.name.value.trim();
      formMessage.textContent = name
        ? `Дякуємо, ${name}! Форма працює в демонстраційному режимі, дані не надсилаються.`
        : "Дякуємо! Форма працює в демонстраційному режимі, дані не надсилаються.";
      bookingForm.reset();
    });
  }
});
