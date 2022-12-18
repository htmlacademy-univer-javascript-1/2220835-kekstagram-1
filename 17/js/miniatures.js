import { showBigPictures } from './big-pictures.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const documentFragment = document.createDocumentFragment();

const clearPhotos = () => {
  const oldPictures = pictures.querySelectorAll('.picture');
  oldPictures.forEach((picture) => {
    picture.remove();
  });
};

const createMiniature = (picture) => {
  const newImage = pictureTemplate.cloneNode(true);

  newImage.querySelector('.picture__img').src = picture.url;
  newImage.querySelector('.picture__comments').textContent = picture.comments.length;
  newImage.querySelector('.picture__likes').textContent = picture.likes;

  newImage.addEventListener('click', (evt) => {
    evt.preventDefault();

    showBigPictures(picture);
  });

  return newImage;
};

const createMiniatures = (data) => {
  data.forEach((picture) => {
    documentFragment.appendChild(createMiniature(picture));
  });

  pictures.appendChild(documentFragment);
};

export {createMiniatures, clearPhotos};
