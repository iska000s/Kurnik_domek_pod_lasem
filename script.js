

const images = [
  { id: 1, src: 'images/dom/1.jpg' },
  { id: 2, src: 'images/dom/2.jpg' },
  { id: 3, src: 'images/dom/3.jpg' },
  { id: 4, src: 'images/dom/4.jpg' },
  { id: 5, src: 'images/dom/5.jpg' },
  { id: 6, src: 'images/dom/6.jpg' },
  { id: 7, src: 'images/dom/7.jpg' },
  { id: 8, src: 'images/dom/8.jpg' },
  { id: 9, src: 'images/dom/9.jpg' },
  { id: 10, src: 'images/dom/10.jpg' },
  { id: 11, src: 'images/dom/11.jpg' },
  { id: 12, src: 'images/dom/12.jpg' },
  { id: 13, src: 'images/dom/13.jpg' },
  { id: 14, src: 'images/dom/14.jpg' },
  { id: 15, src: 'images/dom/15.jpg' },
  { id: 16, src: 'images/dom/16.jpg' },
  { id: 17, src: 'images/dom/17.jpg' },
  { id: 18, src: 'images/dom/18.jpg' },
  { id: 19, src: 'images/dom/19.jpg' },
  { id: 20, src: 'images/dom/20.jpg' },
  { id: 21, src: 'images/dom/21.jpg' },
  { id: 22, src: 'images/dom/22.jpg' },
  { id: 23, src: 'images/dom/23.jpg' },
  { id: 24, src: 'images/dom/24.jpg' },
  { id: 25, src: 'images/dom/25.jpg' },
  { id: 26, src: 'images/dom/26.jpg' },
  { id: 27, src: 'images/dom/27.jpg' },
  { id: 28, src: 'images/dom/28.jpg' },
  { id: 29, src: 'images/dom/29.jpg' },
  { id: 30, src: 'images/dom/30.jpg' },
  // index 31
];


let currentIndex = 0; // Indeks pierwszego duzego zdj zdjęcia

function loadImages() {

  const imagesLength = images.length;
  // Check if the currentIndex and the next 2 indexes are within the array bounds
  if (currentIndex < imagesLength && currentIndex + 1 < imagesLength &&  currentIndex > 0) {
    document.getElementById('large1').src = images[currentIndex-1].src;
    document.getElementById('large2').src = images[currentIndex].src;
    document.getElementById('large3').src = images[currentIndex + 1].src;
  } else if(currentIndex === 0){
    document.getElementById('large1').src = images[images.length-1].src;
    document.getElementById('large2').src = images[currentIndex].src;
    document.getElementById('large3').src = images[currentIndex + 1].src;
  
    } else if(currentIndex ===  imagesLength-1){
      document.getElementById('large1').src = images[currentIndex-1].src;
      document.getElementById('large2').src = images[currentIndex].src;
      document.getElementById('large3').src = images[0].src;
    }
    else {
    console.error("Index out of bounds for the images array");
  }

  // Ładowanie miniatur (8 miniatur)
  const thumbnailsContainer = document.querySelector('.thumbnails');
  thumbnailsContainer.innerHTML = ''; // Czyszczenie poprzednich miniatur

  // Tworzenie 8 miniatur, przy czym druga miniatura to środkowe zdjęcie
  for (let i = currentIndex; i <= images.length+9; i++) {

    if(i<images.length){
      const imgElement = document.createElement('img');
      imgElement.src = images[i].src;
      imgElement.alt = `Thumbnail ${images[i].id}`;
      imgElement.dataset.index = i;
      // console.log(images.length);
      // console.log(currentIndex);
      // console.log(  imgElement.dataset.index);
      // console.log(images[i]);
      thumbnailsContainer.appendChild(imgElement);

    } else if(i>=images.length){
      for(let j=0; j<=8; j++){
      const imgElement = document.createElement('img');
      imgElement.src = images[j].src;
      imgElement.alt = `Thumbnail ${images[j].id}`;
      imgElement.dataset.index = j;
      thumbnailsContainer.appendChild(imgElement);
    }
  }
  }
  // Ustawienie aktywnej miniatury (środkowa miniatura)
  updateActiveThumbnail();
}

function updateActiveThumbnail() {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  thumbnails.forEach((thumb) => {
    thumb.classList.remove('active');
    if (parseInt(thumb.dataset.index) === currentIndex) {
      thumb.classList.add('active'); // Aktywna miniatura to środkowe zdjęcie
    }
  });
}


document.querySelector('.thumbnail-container').addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    currentIndex = parseInt(event.target.dataset.index) ; // Zaktualizuj środkowy indeks
    loadImages();
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    // Zapętlanie: po dojściu do pierwszego zdjęcia przechodzimy do ostatniego
    currentIndex = images.length-1;
  }
  loadImages();
});

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < images.length -1) {
    currentIndex++;
  }
  else {
    // Zapętlanie: po dojściu do ostatniego zdjęcia przechodzimy do pierwszego
    currentIndex = 0;
  }
  loadImages();
});


loadImages();





// BANER COOKIE



var cookieBannerSliderPos = 0;

function showCookieBanner() {
    var cookiebanner = document.getElementById("cookiebanner");
    var dialogHeight = parseInt(cookiebanner.offsetHeight);
    
    // Sprawdzamy, czy użytkownik zaakceptował cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
        cookiebanner.style.display = "block"; // Jeśli nie zaakceptowano, pokazujemy baner
    } else {
        cookiebanner.style.display = "none"; // Jeśli zaakceptowano, nie pokazujemy banera
    }
    
    cookiebanner.style.bottom = (cookieBannerSliderPos - dialogHeight) + "px";
    cookieBannerSliderPos += 4;
    if (cookieBannerSliderPos < dialogHeight) {
        setTimeout(function () {
            showCookieBanner();
        }, 1);
    } else {
        cookieBannerSliderPos = 0;
        cookiebanner.style.bottom = "0px";
    }
}

const cookiebutton = document.querySelector('.c-button');
const cookiebanner = document.getElementById("cookiebanner");

// Funkcja do ukrywania banera po akceptacji
function hideCookieBanner() {
    cookiebanner.style.display = "none";
    localStorage.setItem('cookiesAccepted', 'true'); // Zapisujemy, że użytkownik zaakceptował cookies
}

// Obsługa kliknięcia na przycisk "Zgadzam się"
cookiebutton.addEventListener('click', (e) => {
    hideCookieBanner();
});

// Wywołanie funkcji, aby pokazać baner
window.onload = showCookieBanner;




// POKAZANIE MENU PO NAJECHANIU NA OPIS
const descriptionMenu = document.querySelector('.menu-description-a');
const descriptionMenuList = document.querySelector('.menu-description-list');
// descriptionMenu.addEventListener('mouseover', (e)=> {
//   showMenu();
// })
// descriptionMenu.addEventListener('mouseout', (e)=> {
//   hideMenu();
// })


// function showMenu () {
//   descriptionMenuList.style.display = "flex";
// }

// function hideMenu () {
//   descriptionMenuList.style.display = "none";
// }


  descriptionMenu.addEventListener('click', (e) => {
    console.log("tets");
    if (descriptionMenuList.style.display == "none"){
      descriptionMenuList.style.display = "flex";
      console.log("TEST")
    } else{
      descriptionMenuList.style.display = "none";
      console.log("test")
    }
  })

