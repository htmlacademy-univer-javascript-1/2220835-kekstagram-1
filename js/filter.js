import { debounce, shuffleArray } from './util.js';
import { createMiniatures, clearPhotos } from './miniatures.js';
import { pictures } from './data.js';

const MAX_FILTER_LENGTH = 10;

const imgFilterForm = document.querySelector('.img-filters__form');

const showFilters = () => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const sortByCommentsCount = (firstItem, secondItem) => secondItem.comments.length - firstItem.comments.length;

const filters = {
  'filter-default': () => pictures.slice(),
  'filter-random': () => shuffleArray(pictures.slice()).slice(0, MAX_FILTER_LENGTH),
  'filter-discussed': () => pictures.slice().sort(sortByCommentsCount),
};

const onFilterClick = debounce((evt) => {
  if(evt.target.tagName === 'BUTTON') {
    const clickedButton = imgFilterForm.querySelector('.img-filters__button--active');

    if(clickedButton) {
      clickedButton.classList.remove('img-filters__button--active');
    }
    evt.target.classList.add('img-filters__button--active');

    clearPhotos();
    createMiniatures(filters[evt.target.id]());
  }
});

imgFilterForm.addEventListener('click', onFilterClick);

export{showFilters};
