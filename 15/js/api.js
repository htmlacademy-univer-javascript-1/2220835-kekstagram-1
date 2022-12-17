const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      // throw new Error();
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось опубликовать. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось опубликовать. Попробуйте ещё раз');
    });
};


export {
  getData,
  sendData
};
