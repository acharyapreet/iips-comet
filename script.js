// Conference Website JavaScript - script.js
// Custom Smooth Scrolling with Easing
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const duration = 700; // You can adjust this speed
      let startTime = null;

      // Easing function (starts fast, ends slow) - CHANGED TO EASE-OUT
      function easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
      }

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        // The function call below is now easeOutQuad
        const run = easeOutQuad(
          timeElapsed,
          startPosition,
          targetPosition,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    }
  });
});

// Back to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide back to top button
window.addEventListener("scroll", function () {
  const backToTop = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    // Agar page 300 pixels se zyada scroll hua hai, to button dikhao
    backToTop.style.display = "block";
  } else {
    // Warna button ko छिपा do
    backToTop.style.display = "none";
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0.1s";
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll("section > div").forEach((section) => {
  observer.observe(section);
});

// Form validation function (for future use)
function validateForm() {
  // Add form validation logic here when forms are implemented
  return true;
}

// Initialize animations on page load
window.addEventListener("load", function () {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("fade-in");
  }
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.pageYOffset > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.backgroundColor = "#ffffff";
    header.style.backdropFilter = "none";
  }
});

// Corrected Mobile Menu Logic
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuButton && navMenu) {
    // Show/hide menu when hamburger icon is clicked
    mobileMenuButton.addEventListener("click", function () {
      navMenu.classList.toggle("nav-menu--open");
    });
  }

  // Close mobile menu when a link inside it is clicked
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("nav-menu--open")) {
        navMenu.classList.remove("nav-menu--open");
      }
    });
  });
});
 /* ====================================================== */
/* START: Accordion Functionality                       */
/* ====================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            // Close other open accordions
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle the clicked accordion
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});
/* ====================================================== */
/* END: Accordion Functionality                         */
/* ====================================================== */
