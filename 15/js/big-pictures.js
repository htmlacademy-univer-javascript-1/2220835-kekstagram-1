import {isEscapeKey} from './util.js';

const MAX_COMMENT_COUNT = 5;

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');

const closeModal = (e) => {
  if (isEscapeKey(e) || e.type === 'click') {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeModal);
    bigPictureCancel.removeEventListener('click', closeModal);
  }
};

const createComment = (comment) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;
  li.append(img);
  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;
  li.append(p);
  socialComments.append(li);
};

const createComments = (comments, count) => {
  socialComments.innerHTML = '';
  comments.forEach((comment, index) => {
    if (count > index) {
      createComment(comment);
    }
  });
};

const getCommentsCount = (image, commentsNumber) => {
  createComments(image.comments, commentsNumber);
  socialCommentCount.innerHTML = `${commentsNumber > commentsCount.textContent ? commentsCount.textContent : commentsNumber} из `;
  socialCommentCount.append(commentsCount);
  socialCommentCount.innerHTML += ' комментариев';
  if (commentsNumber > commentsCount.textContent) {
    commentsLoader.classList.add('hidden');
  }
};

const openModal = (image) => {
  let commentsNumber = MAX_COMMENT_COUNT;
  bigPictureImg.src = image.url;
  bigPictureImg.alt = image.description;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  socialCaption.textContent = image.description;

  commentsLoader.classList.remove('hidden');
  getCommentsCount(image, commentsNumber);

  commentsLoader.addEventListener('click', () => {
    commentsNumber += MAX_COMMENT_COUNT;
    getCommentsCount(image, commentsNumber);
  });

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeModal);
  bigPictureCancel.addEventListener('click', closeModal);
};

const miniaturesClickHandler = (data) => {
  pictures.addEventListener('click', (e) => {
    const picture = e.target.closest('.picture');

    if (picture) {
      openModal(data[picture.dataset.index]);
    }
  });
};

export {miniaturesClickHandler, closeModal};