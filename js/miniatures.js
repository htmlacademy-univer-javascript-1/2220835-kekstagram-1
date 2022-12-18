import {openModal} from './big-pictures';

const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const createMiniature = (picture) => {
  const newMiniature = imageTemplate.cloneNode(true);

  newMiniature.querySelector('.picture__img').src = picture.url;
  newMiniature.querySelector('.picture__comments').textContent = picture.comments.length;
  newMiniature.querySelector('.picture__likes').textContent = picture.likes;

  newMiniature.addEventListener('click', (evt) => {
    evt.preventDefault();

    openModal(picture);
  });

  return newMiniature;
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
