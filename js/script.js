const items  = document.querySelector('.items');
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let imageActive = 0;

for (i = 0; i < images.length; i++) {
    const curImage = images[i];
    console.log(curImage.image);
    if (i == 0) {
        items.innerHTML += `<div class="item active">
        <div class="index">
            <h2>${images[i].title}</h2>
            <p>${images[i].text}</p>
        </div>
        <img src= "${images[i].image}"></div>`;
    } else {
        items.innerHTML += `<div class="item"> <div class="index">
        <h2>${images[i].title}</h2>
        <p>${images[i].text}</p>
        </div><img src= "${images[i].image}"></div>`;
    }
}

const totalImages = document.querySelectorAll('.item').length;

document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.active').classList.remove('active');
    imageActive = (imageActive + 1) % totalImages; 
    document.querySelectorAll('.item')[imageActive].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.active').classList.remove('active');
    imageActive = (imageActive - 1 + totalImages) % totalImages; 
    document.querySelectorAll('.item')[imageActive].classList.add('active');
});

