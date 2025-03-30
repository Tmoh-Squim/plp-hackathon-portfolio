const progressBar = document.querySelector(".progressbar");
const cards = document.querySelectorAll(".tech-card");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".menu");

//name animation
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".name").forEach((el, index) => {
      el.style.opacity = "0"; // Ensure text starts hidden
      el.style.transform = "translateY(100px)"; // Initial position
      el.style.transition = "transform 1s ease-out, opacity 1s ease-out"; // Ensure smooth transition
      
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 300);
    });
});
  
//display menu animation
menuButton.addEventListener("click", () => {
  menu.classList.add("show");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("show");
});

//progressbar scroll animation
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollableHeight = documentHeight - windowHeight;
  const scrollPercentage = (scrollTop / scrollableHeight) * 100;

  progressBar.style.height = scrollPercentage + "%";
});
let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
(entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          entry.target.classList.remove("out-of-view");
      } else {
          entry.target.classList.remove("in-view");
          entry.target.classList.add("out-of-view");
      }
  });
},
{
  threshold: 0.1, // Adjust threshold for when the animation triggers
}
);

cards.forEach((card) => {
observer.observe(card);
});


window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
});

// Show the button when scrolling down 200px
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the page when clicked
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//about me text animation

document.addEventListener("DOMContentLoaded", function () {
    const aboutMe = document.querySelector(".about-me");
    const paragraphs = aboutMe.querySelectorAll("p");
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    aboutMe.appendChild(readMoreBtn);

    for (let i = 2; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    }

    let expanded = false;
    readMoreBtn.addEventListener("click", function () {
        if (!expanded) {
            paragraphs.forEach((p, index) => {
                if (index >= 2) {
                    p.style.display = "block";
                    p.style.opacity = "0";
                    setTimeout(() => {
                        p.style.opacity = "1";
                        p.style.transition = "opacity 0.5s ease-in-out";
                    }, 10);
                }
            });
            readMoreBtn.textContent = "Read Less";
        } else {
            paragraphs.forEach((p, index) => {
                if (index >= 2) {
                    p.style.opacity = "0";
                    p.style.transition = "opacity 0.5s ease-in-out";
                    setTimeout(() => {
                        p.style.display = "none";
                    }, 500);
                }
            });
            readMoreBtn.textContent = "Read More";
        }
        expanded = !expanded;
    });
});
