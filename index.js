
const images = [
    "https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164651362.jpg",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", 
    "https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164651362.jpg",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba"
];

let index = 0; 

function changeImage() {
    const imgElement = document.querySelector(".w3-card-4 img"); 
    index = (index + 1) % images.length; 
    imgElement.src = images[index]; 
}

setInterval(changeImage, 3000);
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


setInterval(nextSlide, 3000);


document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();

    const cards = document.querySelectorAll('.w3-card-4');

    cards.forEach(card => {
        const title = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
        const imgAlt = card.querySelector('img') ? card.querySelector('img').alt.toLowerCase() : '';
        if (title.includes(query) || imgAlt.includes(query)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';  
        }
    });
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
