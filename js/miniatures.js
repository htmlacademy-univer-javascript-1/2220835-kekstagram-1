import {openModal} from './big-pictures.js';

const imageTemplate = document.querySelector('#picture').content;
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const createMiniature = (picture) => {
  const newImage = imageTemplate.cloneNode(true);
  newImage.querySelector('.picture__img').src = picture.url;
  newImage.querySelector('.picture__likes').textContent = picture.likes;
  newImage.querySelector('.picture__comments').textContent = picture.comments.length;

  newImage.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(picture);
  });

  return newImage;
};

const createMiniatures = (images) => {
  images.forEach((picture) => {
    documentFragment.appendChild(createMiniature(picture));
  });
  pictures.appendChild(documentFragment);
};

const removePhotos = () => {
  const oldPictures = pictures.querySelectorAll('.picture');
  oldPictures.forEach((picture) => {
    picture.remove();
  });
};

export {createMiniatures, removePhotos};
