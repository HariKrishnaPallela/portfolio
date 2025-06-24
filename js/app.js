// Select DOM elements
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// Add navbar fixed on scroll
function handleScroll() {
  navbar?.classList.toggle("navbar-fixed", window.pageYOffset > 80);
}

// Show sidebar
function showSidebar() {
  sidebar?.classList.add("show-sidebar");
  navBtn?.setAttribute("aria-expanded", "true");
}

// Hide sidebar
function hideSidebar() {
  sidebar?.classList.remove("show-sidebar");
  navBtn?.setAttribute("aria-expanded", "false");
}

// Set current year
function setCurrentYear() {
  if (date) {
    date.innerHTML = new Date().getFullYear();
  }
}

// Smooth scroll for anchor links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Eye tracking and mouth smile logic
function setupFaceAnimation() {
  const eyes = document.querySelectorAll(".eye");
  const mouth = document.getElementById("mouth");
  const smileLink = document.querySelector(".about-info .btn");

  if (eyes.length && mouth) {
    document.addEventListener("mousemove", (e) => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

        const maxMove = 15; // Max movement in any direction
        const moveX = maxMove * Math.cos(angle);
        const moveY = maxMove * Math.sin(angle);

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });

    // Smile effect on hover
    if (smileLink) {
      smileLink.addEventListener("mouseenter", () =>
        mouth.classList.add("smile")
      );
      smileLink.addEventListener("mouseleave", () =>
        mouth.classList.remove("smile")
      );
    }
  }
}

// Initialize everything
function init() {
  window.addEventListener("scroll", handleScroll);
  navBtn?.addEventListener("click", showSidebar);
  closeBtn?.addEventListener("click", hideSidebar);
  setCurrentYear();
  smoothScroll();
  setupFaceAnimation();
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", init);
