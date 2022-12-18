const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAGS_LENGTH = 20;

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtag = imgUploadForm.querySelector('.text__hashtags');
const uploadSubmit = imgUploadForm.querySelector('#upload-submit');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

let errorMessage = '';
const getErrorMessage = () => errorMessage;
const hashtagErrorHandler = (value) => {
  errorMessage = '';
  const hashtagInputText = value.toLowerCase().trim();
  if(hashtagInputText.length === 0){
    return true;
  }

  const hashtagTexts = hashtagInputText.split(/\s+/);
  if(hashtagTexts.length === 0) {
    return true;
  }

  const inputRules = [
    {
      rule: hashtagTexts.some((text) => text.indexOf('#', 1) > 0),
      error: 'Между хэштегами должны быть пробелы'
    },
    {
      rule: hashtagTexts.some((text) => text[0] !== '#'),
      error: 'Каждый хэштег должен начинаться с решетки'
    },
    {
      rule: hashtagTexts.some((text) => text.length === 1 || text[0] !== '#'),
      error: 'Пустые хэштеги недопустимы'
    },
    {
      rule: hashtagTexts.some((text) => text.length > MAX_HASHTAGS_LENGTH),
      error: `Длина хэштега не должна превышать ${MAX_HASHTAGS_LENGTH} символов`
    },
    {
      rule: hashtagTexts.some((text, index, array) => array.indexOf(text, index + 1) > index),
      error: 'Хэштеги не должны повторяться'
    },
    {
      rule: hashtagTexts.some((text) => !/^#[0-9а-яёa-z]{1,19}$/i.test(text)),
      error: 'Хештег содержит недопустимые символы'
    },
    {
      rule: hashtagTexts.length > MAX_HASHTAGS_COUNT,
      error: `Нельзя указывать больше ${MAX_HASHTAGS_COUNT} хэштегов`
    }
  ];

  return inputRules.every((inputRule) => {
    const isValid = !inputRule.rule;
    if(!isValid){
      errorMessage = inputRule.error;
    }
    return isValid;
  });
};

pristine.addValidator(textHashtag, hashtagErrorHandler, getErrorMessage, 2, false);

const onHashtagInput = () => {
  uploadSubmit.disabled = !pristine.validate();
};

const uploadHashtagInput = () => {
  textHashtag.addEventListener('input', onHashtagInput);
};

const checkFormValidation = () => pristine.validate();

const clearHashtagsField = () => {
  textHashtag.value = '';

  pristine.validate();
};

export {imgUploadForm, uploadHashtagInput, clearHashtagsField, checkFormValidation};
