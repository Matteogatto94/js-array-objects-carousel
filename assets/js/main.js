// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione

// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const images = [
    {
        image:'img/01.webp',
        title: 'Marvel Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image:'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image:'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image:'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image:'img/05.webp',
        title: "Marvel Avengers",
        text: 'Marvel Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];
  
  
  const slidesElement = document.querySelector('.slides'); 
  const nextElement = document.querySelector('.next'); 
  const prevElement = document.querySelector('.prev'); 
  
  
  let activeImage = 0;

  
  for (let i = 0; i < images.length; i++) {
    const slideUrl = images[i].image;
    const titolo = images[i].title;
    const testo = images[i].text;

    const imgMarkup = 
    `<div class="card ${i === activeImage ? 'active' : ''}">
        <img class="img-fluid " src="./assets/${slideUrl}" alt= "">
        <div class="body_card">
            <h1 class="text-center">${titolo}</h1>
            <p class="text-center">${testo}</p>
        </div>
    </div>`;
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
  }
  
 
  nextElement.addEventListener('click', function () {
  
  
    const activeSlideElement = document.querySelector('.slides > .card.active')
    activeSlideElement.classList.remove('active');
  
    activeImage++ 
    if (activeImage === 5) {
        activeImage = 0;
    }

    const allSlides = document.getElementsByClassName('card')
    const nextSlideElement = allSlides[activeImage];
    nextSlideElement.classList.add('active')
  
  });
  
  prevElement.addEventListener('click', function () {
    
    const activeSlideElement = document.querySelector('.slides > .card.active')
    activeSlideElement.classList.remove('active');

    if (activeImage == 0) {
        activeImage = 5;
    }

    activeImage-- 
    const allSlides = document.getElementsByClassName('card')
    const nextSlideElement = allSlides[activeImage];
    nextSlideElement.classList.add('active')
  });