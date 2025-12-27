const gallery = [
    { src: "1.jpg", caption: "Clair Obscur: Expedition 33" },
    { src: "2.jpg", caption: "Hollow Knight Silksong" },
    { src: "3.jpg", caption: "Death Stranding 2: On the Beach" },
    { src: "4.jpg", caption: "Doom the Dark ages" },
    { src: "5.jpg",caption:"Split Fiction"},
    { src: "6.jpg",caption:"Donkey Kong Bananza"},
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}