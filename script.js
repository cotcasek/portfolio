// Smooth scroll to content when grid box clicked
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Smooth scroll for "Back to top" links
document.querySelectorAll('.back-to-top').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

//slide show
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Auto cycle every 6 seconds
setInterval(() => {
  plusSlides(1);
}, 6000);

// Open image in new tab
function openImage(img) {
  window.open(img.src, "_blank");
}




// project sections and slide shows
// let slideIndices = {}; // Track current slide for each slideshow

// function showSlides(n, slideshowNum) {
//   const container = document.querySelector(`.slideshow-container[data-slideshow="${slideshowNum}"]`);
//   const slides = container.getElementsByClassName("slide");
//   const dots = document.querySelectorAll(`.dots[data-dots="${slideshowNum}"] .dot`);

//   if (!slideIndices[slideshowNum]) slideIndices[slideshowNum] = 1;

//   if (n > slides.length) slideIndices[slideshowNum] = 1;
//   if (n < 1) slideIndices[slideshowNum] = slides.length;

//   for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
//   for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

//   slides[slideIndices[slideshowNum] - 1].style.display = "block";
//   if (dots.length > 0) dots[slideIndices[slideshowNum] - 1].classList.add("active");
// }

// function plusSlides(n, slideshowNum) {
//   slideIndices[slideshowNum] = (slideIndices[slideshowNum] || 1) + n;
//   showSlides(slideIndices[slideshowNum], slideshowNum);
// }

// function currentSlide(n, slideshowNum) {
//   slideIndices[slideshowNum] = n;
//   showSlides(n, slideshowNum);
// }

// // Open image in a new tab
// function openImage(img) {
//   window.open(img.src, "_blank");
// }

// // Initialize all slideshows on page load
// document.addEventListener("DOMContentLoaded", () => {
//   const slideshows = document.querySelectorAll(".slideshow-container");
//   slideshows.forEach((ss) => {
//     const num = ss.dataset.slideshow;
//     slideIndices[num] = 1;
//     showSlides(1, num);
//   });
// });

