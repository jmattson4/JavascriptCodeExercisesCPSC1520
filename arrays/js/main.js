// your js here...

let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImage = 0;

let carouselImg = document.querySelector('.carousel > img');
carouselImg.src = 'images/' + images[0];
document.querySelector('.carousel').addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('prev') && currentImage > 0) {
        currentImage -= 1

    } else if (target.classList.contains('next') && currentImage < images.length - 1) {
        currentImage += 1
    }
    carouselImg.src = 'images/' + images[currentImage];
})