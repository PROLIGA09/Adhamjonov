// Oddiy versiya - Firebase'siz
const imageUrlInput = document.getElementById('imageUrl');
const imageNameInput = document.getElementById('imageName');
const imagePriceInput = document.getElementById('imagePrice');
const addButton = document.getElementById('addButton');
const imagesContainer = document.getElementById('imagesContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const noImagesMessage = document.getElementById('noImagesMessage');

let images = JSON.parse(localStorage.getItem('rasmGalereyasi')) || [];

// Tugma bosilganda
addButton.addEventListener('click', function() {
    console.log("Tugma bosildi!");
    
    const url = imageUrlInput.value.trim();
    const name = imageNameInput.value.trim();
    const price = imagePriceInput.value.trim();
    
    if (!url || !name || !price) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }
    
    // Yangi rasm
    const newImage = {
        id: Date.now().toString(),
        url: url,
        name: name,
        price: parseInt(price),
        dateAdded: new Date().toISOString()
    };
    
    // Rasmlarga qo'shish
    images.push(newImage);
    
    // LocalStorage'ga saqlash
    localStorage.setItem('rasmGalereyasi', JSON.stringify(images));
    
    // Inputlarni tozalash
    imageUrlInput.value = '';
    imageNameInput.value = '';
    imagePriceInput.value = '';
    imageUrlInput.focus();
    
    // Rasmlarni ko'rsatish
    displayImages();
    
    alert('Rasm muvaffaqiyatli qo\'shildi!');
});

// Rasmlarni ko'rsatish
function displayImages() {
    if (images.length === 0) {
        imagesContainer.innerHTML = '';
        noImagesMessage.style.display = 'block';
        return;
    }
    
    noImagesMessage.style.display = 'none';
    
    let html = '';
    
    images.forEach(image => {
        const date = new Date(image.dateAdded);
        const formattedDate = date.toLocaleDateString('uz-UZ');
        const formattedPrice = image.price.toLocaleString('uz-UZ');
        
        html += `
            <div class="image-card">
                <div class="image-container">
                    <img src="${image.url}" alt="${image.name}">
                </div>
                <div class="image-info">
                    <h3 class="image-name">${image.name}</h3>
                    <div class="image-price">${formattedPrice} so'm</div>
                    <div class="image-date">${formattedDate}</div>
                </div>
            </div>
        `;
    });
    
    imagesContainer.innerHTML = html;
}

// Dastur yuklanganda
window.addEventListener('DOMContentLoaded', function() {
    console.log("Dastur ishga tushdi");
    displayImages();
});