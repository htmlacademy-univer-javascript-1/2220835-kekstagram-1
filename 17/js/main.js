import {setData} from './api.js';
import {uploadForm} from './formUpload.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './dataUpload.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные');
  },
  'GET');

uploadForm();
