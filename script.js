document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Sidebar toggle
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // === NEPAL SLIDER ===
  const nepalImages = [
    "assets/nepal_ss1.png",
    "assets/nepal_ss2.png",
    "assets/nepal_ss3.png",
    "assets/nepal_ss4.png",
    "assets/nepal_ss5.png",
    "assets/nepal_ss6.png"
  ];
  let currentSlide = 0;
  const carouselImg = document.getElementById("carousel-img");

  function showSlide(index) {
    if (index < 0) index = nepalImages.length - 1;
    if (index >= nepalImages.length) index = 0;
    currentSlide = index;
    carouselImg.src = nepalImages[currentSlide];
  }

  window.prevSlide = () => showSlide(currentSlide - 1);
  window.nextSlide = () => showSlide(currentSlide + 1);
  window.openLightbox = () => {
    lightboxImg.src = carouselImg.src;
    lightbox.style.display = "flex";
  };

  // === DISEASE SLIDER ===
  const diseaseImages = [
    "assets/disease1.png",
    "assets/disease2.png",
    "assets/disease3.png"
  ];
  let currentSlideDisease = 0;
  const diseaseImg = document.getElementById("carousel-img-disease");

  function showSlideDisease(index) {
    if (index < 0) index = diseaseImages.length - 1;
    if (index >= diseaseImages.length) index = 0;
    currentSlideDisease = index;
    diseaseImg.src = diseaseImages[currentSlideDisease];
  }

  window.prevSlideDisease = () => showSlideDisease(currentSlideDisease - 1);
  window.nextSlideDisease = () => showSlideDisease(currentSlideDisease + 1);
  window.openLightboxDisease = () => {
    lightboxImg.src = diseaseImg.src;
    lightbox.style.display = "flex";
  };

  window.closeLightbox = () => {
    lightbox.style.display = "none";
  };

  // Initialize first slides
  showSlide(currentSlide);
  showSlideDisease(currentSlideDisease);
});


function openProfileLightbox() {
  document.getElementById("profile-lightbox").style.display = "flex";
}

function closeProfileLightbox() {
  document.getElementById("profile-lightbox").style.display = "none";
}
