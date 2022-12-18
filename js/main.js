import {setData} from './api.js';
import {uploadForm} from './form.js';
import {onRecieveSuccess, giveErrorMessage} from './data.js';

setData(onRecieveSuccess,
  () => {
    giveErrorMessage('Не удалось загрузить данные');
  },
  'GET');

uploadForm();
