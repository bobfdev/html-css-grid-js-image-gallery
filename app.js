const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    // image.src = `/images/compressed/city-${i}.jpg`;
    // image.src = `https://ik.imagekit.io/bbnxglxuzxq/city-${i}.jpg`;
    // transform image size to free up space and improve performance (tr:w-600:h-600)
    image.src = `https://ik.imagekit.io/bbnxglxuzxq/tr:w-600:h-600/city-${i}.jpg`;
    image.alt = `Southern City ${i}`;
    gallery.appendChild(image);
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        // selectedImage.src = `/images/city-${i}.jpg`;
        // transform image size to free up space and improve performance (tr:w-600:h-600)
        selectedImage.src = `https://ik.imagekit.io/bbnxglxuzxq/tr:w-800:h-800/city-${i}.jpg`;
        selectedImage.srcset = `https://ik.imagekit.io/bbnxglxuzxq/tr:w-400/city-${i}.jpg 400w,
                                https://ik.imagekit.io/bbnxglxuzxq/tr:w-800/city-${i}.jpg 800w,
                                https://ik.imagekit.io/bbnxglxuzxq/tr:w-1200/city-${i}.jpg 1200w`;
        selectedImage.alt = `Southern City ${i}`;
    });
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    selectedImage.src = '';
    selectedImage.srcset = '';
    selectedImage.alt = '';
})