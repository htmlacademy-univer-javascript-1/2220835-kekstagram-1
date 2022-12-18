import {setData} from './api.js';
import {uploadForm} from './form.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные');
  },
  'GET');

uploadForm();
