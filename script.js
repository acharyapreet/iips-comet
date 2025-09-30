// Conference Website JavaScript - script.js

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });

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

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", function () {
      // Toggle mobile menu visibility
      if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "100%";
        navMenu.style.left = "0";
        navMenu.style.right = "0";
        navMenu.style.backgroundColor = "#ffffff";
        navMenu.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        navMenu.style.padding = "1rem";
        navMenu.style.zIndex = "1000";
      }
    });
  }
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

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    if (window.innerWidth <= 768) {
      navMenu.style.display = "none";
    }
  });
});

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener("click", function () {
      // Toggle the 'nav-menu--open' class on the navigation menu
      navMenu.classList.toggle("nav-menu--open");
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("nav-menu--open")) {
        navMenu.classList.remove("nav-menu--open");
      }
    });
  });
});

