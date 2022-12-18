import { uploadHashtagInput, clearHashtagsField, checkFormValidation, form } from './validators.js';
import { isEscape } from './util.js';
import { scalingPhotos, uploadingOverlay } from './scale-change.js';
import { setEffects } from './effects.js';
import { setData } from './api.js';
import { addPostMessages, showSuccessMessage, closeMessage, showErrorMessage } from './listener.js';
import { uploadUserPicture} from './user-photo-upload.js';

const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');

const textDescription = uploadingOverlay.querySelector('.text__description');
const uploadSubmit = uploadingOverlay.querySelector('#upload-submit');
const clearForm = () => {
  uploadingOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadFile.value = '';

  clearHashtagsField();
  textDescription.value = '';

  closeMessage();

  uploadSubmit.disabled = false;
};

const onEscapeKeyDown = (evt) => {
  if(isEscape(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    clearForm();
    document.removeEventListener('keydown', onEscapeKeyDown);
  }
};

const closeForm = () => {
  clearForm();

  document.removeEventListener('keydown', onEscapeKeyDown);
};

uploadCancel.addEventListener('click', closeForm);

const onUploadClick = () => {
  document.addEventListener('keydown', onEscapeKeyDown);

  uploadUserPicture(uploadFile.files[0]);

  uploadingOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  scalingPhotos();
  setEffects();
  uploadHashtagInput();
};

const uploadForm = () => {
  uploadFile.addEventListener('change', onUploadClick);
  addPostMessages();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if(checkFormValidation()) {
    setData(showSuccessMessage, showErrorMessage, 'POST', new FormData(form));
  }
};

form.addEventListener('submit', onFormSubmit);

export{uploadForm, closeForm, onEscapeKeyDown};
