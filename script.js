const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery img');
const searchInput = document.getElementById('searchInput');
const imageBoxes = document.querySelectorAll('.image-box');

let currentIndex = 0;
let imageList = Array.from(galleryImages);

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  lightboxImg.src = imageList[currentIndex].src;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  lightboxImg.src = imageList[currentIndex].src;
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  imageBoxes.forEach(box => {
    const title = box.dataset.title.toLowerCase();
    if (title.includes(query)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
});
