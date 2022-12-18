import {isEscapeKey} from './util.js';
import { setComments, bigPicture } from './comments.js';

const bigPictureCancel = bigPicture.querySelector('#picture-cancel');

const onEscapeKeyDown = (evt) => {
  if(isEscapeKey(evt)){
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscapeKeyDown);
  }
};

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
}
);

const openModal = (image) => {
  document.addEventListener('keydown', onEscapeKeyDown);
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = image.url;
  bigPicture.querySelector('.likes-count').textContent = image.likes;
  bigPicture.querySelector('.social__caption').textContent = image.description;

  setComments(image.comments);

  document.body.classList.add('modal-open');
};

//const miniaturesClickHandler = (data) => {
//  pictures.addEventListener('click', (e) => {
//    const picture = e.target.closest('.picture');
//
//    if (picture) {
//      openModal(data[picture.dataset.index]);
//    }
//  });
//};

export {openModal};
