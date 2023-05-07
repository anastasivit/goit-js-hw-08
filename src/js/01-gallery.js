import { galleryItems } from './gallery-items.js';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

function renderGallery(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img src="${preview}" class="gallery__image" alt="${description}" title="${description}"></a></li>`
    )
    .join('');
}

const listRef = document.querySelector('.gallery');
const galleryLayout = renderGallery(galleryItems);

listRef.insertAdjacentHTML('beforeend', galleryLayout);

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
