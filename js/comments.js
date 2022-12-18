import { declineByNumber } from './util.js';

const MAX_NEW_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentChild = socialComments.children[0];

let countCommentGrous = 1;

const getCommentItem = (comment) => {
  const newComment = commentChild.cloneNode(true);
  const newCommentImg = newComment.querySelector('.social__picture');

  newCommentImg.src = comment.avatar;
  newCommentImg.alt = comment.name;

  newComment.querySelector('.social__text').textContent = comment.message;

  newComment.classList.add('hidden');

  return newComment;
};

const addNewComments = () => {
  const newCommentsCount = MAX_NEW_COMMENTS_COUNT * countCommentGrous;
  const commentsOverallCount = socialComments.children.length;
  const addedCommentsCount = newCommentsCount >= commentsOverallCount ? commentsOverallCount : newCommentsCount;

  for(let i = 0; i < addedCommentsCount; i++) {
    if (i < newCommentsCount && i >= newCommentsCount - MAX_NEW_COMMENTS_COUNT) {
      socialComments.children[i].classList.remove('hidden');
    }
  }

  if(commentsOverallCount > newCommentsCount) {
    commentsLoader.classList.remove('hidden');
  }
  else{
    commentsLoader.classList.add('hidden');
  }

  socialCommentCount.innerHTML = `${addedCommentsCount} из <span class="comments-count">${commentsOverallCount}</span>
  ${declineByNumber(commentsOverallCount, 'комментарий', 'комментария', 'комментариев')}`;
};

const setComments = (comments) => {
  socialComments.innerHTML = '';
  comments.forEach((comment) => {
    socialComments.appendChild(getCommentItem(comment));
  });
  countCommentGrous = 1;
  addNewComments();
};

commentsLoader.addEventListener('click', () => {
  addNewComments(countCommentGrous++);
});

export { setComments, bigPicture };
