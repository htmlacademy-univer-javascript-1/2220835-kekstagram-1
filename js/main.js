import {uploadForm} from './form.js';
import {setData} from './api.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные. Попробуйте ещё раз');
  },
  'GET');

uploadForm();
