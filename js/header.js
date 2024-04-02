const carousel = document.querySelector('header');
const carouselInner = carousel.querySelector('.header-container');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
    return 1;
}

function setupCarousel() {
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselInner.children);

    updateCarousel();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

// Automatic carousel navigation
let intervalId;

function startCarouselInterval() {
    intervalId = setInterval(() => {
        goToNextSlide();
    }, 5000); // Change the interval time as needed (here set to 5 seconds)
}

function stopCarouselInterval() {
    clearInterval(intervalId);
}

function goToNextSlide() {
    if (++currentIndex >= slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        carouselInner.style.transition = 'none';
        updateCarousel();
        setTimeout(() => {
            carouselInner.style.transition = '';
        }, 0);
    }
    updateCarousel();
}

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});

startCarouselInterval();

// Optionally, you might want to stop the interval when the user interacts with the carousel
carousel.addEventListener('mouseenter', stopCarouselInterval);
carousel.addEventListener('mouseleave', startCarouselInterval); 