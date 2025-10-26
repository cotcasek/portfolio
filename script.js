// Smooth scroll to content when grid box clicked
// document.querySelectorAll('.grid-item').forEach(item => {
//     item.addEventListener('click', () => {
//         const targetId = item.getAttribute('data-target');
//         const targetSection = document.getElementById(targetId);
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     });
// });

// Smooth scroll to section header when grid box clicked
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target') + 'Header'; // add 'Header' suffix
    const targetHeader = document.getElementById(targetId);
    if (targetHeader) {
      targetHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

const backBtn = document.getElementById('floatingBackToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {  // change 300 to your preferred scroll distance
    backBtn.classList.add('show');
  } else {
    backBtn.classList.remove('show');
  }
});

// Smooth scroll on click
backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



//background for section headers
document.querySelectorAll('.sectionHeader').forEach(header => {
  const color = header.dataset.color;
  if (color) {
    header.style.backgroundColor = color;
  }
});
// borders to match grid elements
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.thumb').forEach(thumb => {
//     const color = thumb.dataset.borderColor;
//     if (color) {
//       thumb.style.border = `4px solid ${color}`;
//     }
//   });
// });


//slide show
let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// // Show slide
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// // Auto cycle every 6 seconds
// setInterval(() => {
//   plusSlides(1);
// }, 6000);

// // Open image in new tab
// function openImage(img) {
//   window.open(img.src, "_blank");
// }






let currentProjectImages = [];
let currentIndex = 0;

function openImage(img) {
  const project = img.closest('.project-thumbnails');
  currentProjectImages = Array.from(project.querySelectorAll('img'));
  currentIndex = currentProjectImages.indexOf(img);
  
  showLightboxImage(currentIndex);
  document.getElementById('lightboxModal').style.display = 'block';
}

function showLightboxImage(index) {
  const modalImg = document.getElementById('lightboxImage');
  const captionText = document.getElementById('lightboxCaption');

  if (index >= currentProjectImages.length) currentIndex = 0;
  if (index < 0) currentIndex = currentProjectImages.length - 1;

  const img = currentProjectImages[currentIndex];
  modalImg.src = img.src;
  captionText.textContent = img.alt || '';
}

function changeSlide(n) {
  currentIndex += n;
  showLightboxImage(currentIndex);
}

function closeLightbox() {
  document.getElementById('lightboxModal').style.display = 'none';
}

// Optional: close with ESC
document.addEventListener('keydown', e => {
  const modal = document.getElementById('lightboxModal');
  if (modal.style.display === 'block') {
    if (e.key === 'ArrowRight') changeSlide(1);
    else if (e.key === 'ArrowLeft') changeSlide(-1);
    else if (e.key === 'Escape') closeLightbox();
  }
});
