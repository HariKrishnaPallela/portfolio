// Select DOM elements
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// Function to handle scroll event
function handleScroll() {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
}

// Function to show sidebar
function showSidebar() {
  sidebar.classList.add("show-sidebar");
  navBtn.setAttribute("aria-expanded", "true");
}

// Function to hide sidebar
function hideSidebar() {
  sidebar.classList.remove("show-sidebar");
  navBtn.setAttribute("aria-expanded", "false");
}

// Function to set the current year
function setCurrentYear() {
  date.innerHTML = new Date().getFullYear();
}

// Smooth scrolling for anchor links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Event listeners
window.addEventListener("scroll", handleScroll);
navBtn.addEventListener("click", showSidebar);
closeBtn.addEventListener("click", hideSidebar);
setCurrentYear();
smoothScroll();
