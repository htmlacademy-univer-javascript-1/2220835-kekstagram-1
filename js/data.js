import { renderPhotos } from './miniatures.js';
import {showFilters} from './filter.js';

const POSITION = 100;
const SIZE_ERROR = 20;
const VERTICAL_PADDING = 10;
const HORIZONTAL_PADDING = 50;

let pictures = [];

const onRecieveSuccess = (data) => {
  pictures = data.slice();
  renderPhotos(data);
  showFilters();
};

const showUnloadingErrorMessage = (errorText) => {
  const errorMessage = document.createElement('div');

  errorMessage.style.zIndex = POSITION;
  errorMessage.style.color = 'white';
  errorMessage.style.backgroundColor = '#9C281B';
  errorMessage.style.fontSize = `${SIZE_ERROR}px`;
  errorMessage.style.textAlign = 'center';
  errorMessage.style.padding = `${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px`;
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.right = 0;
  errorMessage.style.top = 0;

  errorMessage.textContent = errorText;

  document.body.append(errorMessage);
};

export{onRecieveSuccess, showUnloadingErrorMessage, pictures};
