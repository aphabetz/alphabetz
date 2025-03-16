// ====== pre-loader ======
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.createElement("div");
  preloader.className = "preloader";
  var canvas = document.createElement("canvas");
  canvas.id = "preloaderCanvas";
  document.body.appendChild(preloader);
  preloader.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const imageSrc = "assets/images/index/plane.webp";

  class RotatingImage {
    constructor(x, y, size, angle, speed) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.angle = angle;
      this.speed = speed;
      this.image = new Image();
      this.image.src = imageSrc;
      this.image.onload = () => {
        this.loaded = true;
        this.aspectRatio = this.image.naturalWidth / this.image.naturalHeight;
      };
    }
    draw() {
      if (this.loaded) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        const width = this.size;
        const height = this.size / this.aspectRatio;
        ctx.drawImage(this.image, -width / 2, -height / 2, width, height);
        ctx.restore();
      }
    }
    update() {
      this.angle += this.speed;
      this.draw();
    }
  }

  const planeSize = 200;
  const planeX = canvas.width / 2;
  const planeY = canvas.height / 2;
  const planeSpeed = 0.05;
  const rotatingPlane = new RotatingImage(
    planeX,
    planeY,
    planeSize,
    0,
    planeSpeed
  );

  function animateImage() {
    requestAnimationFrame(animateImage);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rotatingPlane.update();
  }

  animateImage();

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    rotatingPlane.x = canvas.width / 2;
    rotatingPlane.y = canvas.height / 2;
  });

  function removePreloader() {
    setTimeout(function () {
      preloader.style.opacity = "0";
      setTimeout(function () {
        preloader.style.display = "none";
        preloader.remove();
        document.body.classList.remove("preloader-active");
        var siteWrapper = document.querySelector(".site-wrapper");
        siteWrapper.style.visibility = "visible";
        siteWrapper.style.overflow = "auto";
        siteWrapper.style.opacity = "1";
        siteWrapper.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          siteWrapper.style.opacity = "1";
        }, 10);
        AOS.init({
          once: true,
          duration: 1500,
        });

        // ====== Back to top ======
        if (document.querySelector(".scrollToTop")) {
          var box = document.querySelector(".scrollToTop");
          var water = document.querySelector(".scrollToTop .water");

          function updateDimensions() {
            windowHeight = window.innerHeight;
            documentHeight =
              document.documentElement.scrollHeight - windowHeight;
          }

          updateDimensions();

          window.addEventListener("resize", updateDimensions);

          window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
            var percent = Math.min(
              Math.floor((scrollPosition / documentHeight) * 100),
              100
            );
            water.style.transform = "translate(0," + (100 - percent) + "%)";

            if (scrollPosition >= 200) {
              box.style.display = "block";
            } else {
              box.style.display = "none";
            }
          });

          if (box !== null) {
            box.addEventListener("click", function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            });
          }
        }
      }, 100);
    }, 100);
  }
  document.body.classList.add("preloader-active");
  window.addEventListener("load", function () {
    removePreloader();
  });
});
// // ====== 1.1 header (aside navigation bar) ======
// if (document.getElementById("mySidenav")) {
//   function open_aside() {
//     "use strict";
//     const sidepanel = document.getElementById("mySidenav");
//     if (sidepanel) {
//       sidepanel.style.left = "0";
//     } else {
//       console.error("Error: Side panel element not found!");
//     }
//   }
//   function close_aside() {
//     "use strict";
//     const sidepanel = document.getElementById("mySidenav");
//     if (sidepanel) {
//       sidepanel.style.left = "-355px";
//     } else {
//       console.error("Error: Side panel element not found!");
//     }
//   }
//   // aside page button
//   let slid = document.getElementsByClassName(".slid-btn");
//   if (slid !== null) {
//     slid.onclick = () => {
//       let dropdwon = document.getElementsByClassName(".slid-drop");
//       dropdwon.classList.toggle("aside-dropdwon");
//     };
//   }
// }

// ====== 1.1 header (dropdown bar) ======
// const dropdowns = document.querySelectorAll(".navbar .dropdown");
// dropdowns.forEach((dropdown) => {
//   const dropdownMenu = dropdown.querySelector(".dropdown-menu");
//   dropdownMenu.style.maxHeight = "0";
//   dropdown.addEventListener("mouseenter", () => {
//     dropdownMenu.style.visibility = "visible";
//     dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
//   });
//   dropdown.addEventListener("mouseleave", () => {
//     dropdownMenu.style.visibility = "hidden";
//     dropdownMenu.style.maxHeight = "0";
//   });
// });

// // ========== 1.5. Courses Slider  =======
// $(document).ready(function () {
//   if ($(".Courses_Slider").length) {
//     $(".Courses_Slider").slick({
//       arrows: false,
//       dots: true,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 1500,
//       cssEase: "linear",
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 481,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     });
//   }
// });

// ========== 1.9. Testimonial Slider  =======
$(document).ready(function () {
  if ($(".Testimonial_Slider").length) {
    $(".Testimonial_Slider").slick({
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
});

//  1.14. Footer section === Submit message
const contactForm = document.querySelector(".Newsletter form");
if (contactForm !== null)
  contactForm.addEventListener("submit", function (event) {
    const path = document
      .querySelector(".Newsletter .modal img")
      .getAttribute("src");
    document.querySelector(".Newsletter .modal img").setAttribute("src", "");
    event.preventDefault();
    var modal = new bootstrap.Modal(
      document.querySelector(".Newsletter .modal")
    );
    modal.show();
    document.querySelector(".Newsletter form").reset();
    document.querySelector(".Newsletter .modal img").setAttribute("src", path);
    setTimeout(() => {
      modal.hide();
    }, 5000);
  });

// ======= 1.15. Footer Date ========
if (document.getElementById("year")) {
  document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();

    let yearElement = document.getElementById("year");
    yearElement.innerText = currentYear;
  });
}

//  3.1. Contact section === Submit message
const contactForm1 = document.querySelector(".Contact form");
if (contactForm1 !== null)
  contactForm1.addEventListener("submit", function (event) {
    const path = document
      .querySelector(".Contact .modal img")
      .getAttribute("src");
    document.querySelector(".Contact .modal img").setAttribute("src", "");
    event.preventDefault();
    var modal = new bootstrap.Modal(document.querySelector(".Contact .modal"));
    modal.show();
    document.querySelector(".Contact form").reset();
    document.querySelector(".Contact .modal img").setAttribute("src", path);
    setTimeout(() => {
      modal.hide();
    }, 50000);
  });

// ========== Numbers Animations for spans =======
function animateNumbers(num, finalValue, duration, isDecimal) {
  let start = null;
  const finalValueStr = num.getAttribute("data-final-value");
  const charCount = finalValueStr.length;
  num.style.display = "inline-block";
  num.style.width = `${charCount}ch`;
  const numberFormatter = new Intl.NumberFormat(
    "en-US",
    isDecimal ? { minimumFractionDigits: 1, maximumFractionDigits: 1 } : {}
  );
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const currentValue = progress * finalValue;
    num.textContent = numberFormatter.format(
      isDecimal ? currentValue.toFixed(1) : Math.floor(currentValue)
    );
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      num.style.display = "inline";
    }
  }
  window.requestAnimationFrame(step);
}
function startNumberAnimation() {
  const numbers = document.querySelectorAll(".number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalValueStr = entry.target.getAttribute("data-final-value");
          const isDecimal = finalValueStr.includes(".");
          const finalValue = isDecimal
            ? parseFloat(finalValueStr)
            : parseInt(finalValueStr, 10);
          animateNumbers(entry.target, finalValue, 2000, isDecimal);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  numbers.forEach((num) => observer.observe(num));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);

// scroll to top button
if (document.querySelector(".scrollToTopButton")) {
  document.addEventListener("DOMContentLoaded", function () {
    toggleButtonVisibility();
  });

  var backToTopButton = document.querySelector(".scrollToTopButton");
  var circle = document.querySelector(".progress-ring__circle");
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function toggleButtonVisibility() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show-btn");
    } else {
      backToTopButton.classList.remove("show-btn");
    }

    var scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    var offset = circumference - scrollPercentage * circumference;
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("scroll", function () {
    toggleButtonVisibility();
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => (circle.style.strokeDashoffset = circumference), 500);
  });
}

