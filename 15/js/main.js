import './util.js';
import {createMiniatures} from './miniatures';
import {setUserFormSubmit, closeUploadFileForm} from './form.js';
import {getData} from './api.js';
import './big-pictures.js';
import {showError, showSuccess} from './listener';

getData(createMiniatures);

setUserFormSubmit(() => {
  closeUploadFileForm();
  showSuccess();
}, () => {
  closeUploadFileForm(null, false);
  showError();
});
