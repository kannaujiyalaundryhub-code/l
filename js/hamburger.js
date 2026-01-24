

const navMenu = document.getElementById("nav-menu");
const hamburger = document.querySelector(".hamburger");
const body = document.body;

function toggleMenu() {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  // Scroll lock
  if(navMenu.classList.contains("active")) {
    body.classList.add("body-lock");
  } else {
    body.classList.remove("body-lock");
  }
}

// Close menu on outside click
document.addEventListener("click", function(event) {
  const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    body.classList.remove("body-lock");
  }
});

// Optional: Close menu on link click (mobile)
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if(navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      body.classList.remove("body-lock");
    }
  });
});

