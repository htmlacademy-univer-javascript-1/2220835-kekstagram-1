import {miniaturesClickHandler} from './big-pictures.js';


const imageTemplate = document.querySelector('#picture').content;
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const createMiniatures = (data) => {
  data.forEach((image, index) => {
    const picture = imageTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = image.url;
    picture.querySelector('.picture__likes').textContent = image.likes;
    picture.querySelector('.picture__comments').textContent = image.comments.length;
    picture.querySelector('.picture').dataset.index = index;
    documentFragment.append(picture);
  });
  pictures.append(documentFragment);
  miniaturesClickHandler(data);
};

export {createMiniatures};
