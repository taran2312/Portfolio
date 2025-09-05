'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// --------------------
// Sidebar toggle
// --------------------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar);

    // toggle button text between "Show Contacts" and "Hide Contacts"
    const span = sidebarBtn.querySelector("span");
    if (sidebar.classList.contains("active")) {
      span.textContent = "Hide Contacts";
    } else {
      span.textContent = "Show Contacts";
    }
  });
}

// --------------------
// Page navigation
// --------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const pageTarget = this.dataset.pageTarget;

    // remove active from all links and pages
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // add active only to the clicked link and matched page
    this.classList.add("active");
    const targetPage = document.querySelector(`[data-page="${pageTarget}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});

// --------------------
// Project Sliders
// --------------------
const projectSliders = document.querySelectorAll(".project-slider");

projectSliders.forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slider.querySelectorAll(".slides img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let index = 0;

  const updateSlide = () => {
    slides.style.transform = `translateX(-${index * 100}%)`;
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateSlide();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateSlide();
    });
  }
});