import {isEscapeKey } from './util.js';
import { setComments, bigPicture } from './comments.js';

const pictureCancel = bigPicture.querySelector('#picture-cancel');

const onEscapeKeyDown = (evt) => {
  if(isEscapeKey(evt)){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onEscapeKeyDown);
  }
};

pictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
});

const openModal = (data) => {
  document.addEventListener('keydown', onEscapeKeyDown);

  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__caption').textContent = data.description;

  setComments(data.comments);

  document.querySelector('body').classList.add('modal-open');
};

export {openModal};
