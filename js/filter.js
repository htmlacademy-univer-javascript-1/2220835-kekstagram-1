import {debounce, shuffleArray} from './util.js';
import {createMiniatures, removePhotos } from './miniatures.js';
import { pictures } from './data.js';

const MAX_RANDOM_FILTER_LENGTH = 10;

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = document.querySelector('.img-filters__form');

const filters = {
  'filter-default': () => pictures.slice(),
  'filter-random': () => shuffleArray(pictures.slice()).slice(0, MAX_RANDOM_FILTER_LENGTH),
  'filter-discussed': () => pictures.slice().sort((a, b) => b.comments.length - a.comments.length)
};

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const setFilter =  debounce((evt) => {
  if(evt.target.tagName === 'BUTTON') {
    const clickedButton = imgFiltersForm.querySelector('.img-filters__button--active');

    if(clickedButton) {
      clickedButton.classList.remove('img-filters__button--active');
    }
    evt.target.classList.add('img-filters__button--active');

    removePhotos();
    createMiniatures(filters[evt.target.id]());
  }
});

export {showFilters, setFilter};
