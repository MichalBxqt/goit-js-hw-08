// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css" ;


import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

for (const imgList of galleryItems) {
  const imgEl =
`<a class="gallery__link" href="${imgList.original}">
  <img class="gallery__image" src="${imgList.preview}" alt="${imgList.description}" />
</a>
`;
  galleryContainer.insertAdjacentHTML("beforeend", imgEl);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});