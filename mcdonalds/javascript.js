let foods = document.getElementById('food');
let currentIndex = 1;
const totalImages = 10;

function changeImage() {
    currentIndex = (currentIndex % totalImages) + 1; // Cycle through 1 to 10
    foods.style.backgroundImage = `url('./image/food${currentIndex}.jpeg')`;
}

window.addEventListener('load', () => {
    setInterval(changeImage, 1000);
});