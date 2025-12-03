let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const closeBtn = document.querySelector(".close-btn");
const filterBtns = document.querySelectorAll(".filter-btn");

// Adding event listeners
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    lightboxImg.src = image.src;
    lightbox.style.display = "flex";
  });
});

prevBtn.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  lightboxImg.src = images[currentImageIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  lightboxImg.src = images[currentImageIndex].src;
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    images.forEach((image) => {
      if (filter === "all" || image.dataset.category === filter) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    images.forEach((image) => {
      if (filter === "all" || image.dataset.category === filter) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});
