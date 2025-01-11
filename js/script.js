

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Dziękujemy za kontakt!");
  });



const thumbnails = document.querySelectorAll('.thumbnail');
const largeImg1 = document.getElementById('large-img-1');
const largeImg2 = document.getElementById('large-img-2');
const largeImg3 = document.getElementById('large-img-3');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const thumbnailsContainer = document.querySelector('.thumbnails');
const gallery = document.querySelector(".thumbnails");
const lastGalleryElement = gallery.lastChild;


let currentIndex = 0;

function updateLargeImages(index){
    // pobierz kolejne zdjęcia miniatur
    const firstImg = thumbnails[index-1];
    const secondImg = thumbnails[index];
    const thirdImg = thumbnails[index+1];
    // ustaw odpowiednie obrazy
    largeImg1.src = firstImg ? firstImg.dataset.large : '';
    largeImg2.src = secondImg ? secondImg.dataset.large : '';
    largeImg3.src = thirdImg ? thirdImg.dataset.large : '';
}

// obsługa kliknięcia na miniaturę

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {;
        currentIndex = index;
        updateLargeImages(currentIndex);
    });
});

// obsługa przycisków przewijania

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateLargeImages(currentIndex);
        thumbnailsContainer.scrollLeft -= thumbnails[currentIndex].offsetWidth + 10;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 2) {
        currentIndex += 1;
        updateLargeImages(currentIndex);
        thumbnailsContainer.scrollLeft += thumbnails[currentIndex].offsetWidth + 10;
    }
});

// Inicjalizacja – pokaż pierwsze dwa zdjęcia
updateLargeImages(currentIndex);
