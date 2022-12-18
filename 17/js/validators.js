const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAGS_LENGTH = 20;
const form = document.querySelector('.img-upload__form');
const inputHashtag = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('#upload-submit');

const pristine = new Pristine(form, {
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
      rule: hashtagTexts.some((text) => !/^#[0-9а-яёa-z]{1,19}$/i.test(text)),
      error: 'Хеш-тег содержит недопустимые символы'
    },
    {
      rule: hashtagTexts.some((text) => text.indexOf('#', 1) > 0),
      error: 'Между хэш-тэгами должны быть пробелы'
    },
    {
      rule: hashtagTexts.some((text) => text[0] !== '#'),
      error: 'Каждый хэш-тег должен начинаться с символа # (решётка)'
    },
    {
      rule: hashtagTexts.some((text) => text.length === 1 || text[0] !== '#'),
      error: 'Хэш-тэг не может быть пустым'
    },
    {
      rule: hashtagTexts.some((text) => text.length > MAX_HASHTAGS_LENGTH),
      error: `Длина хеш-тега не может быть больше ${MAX_HASHTAGS_LENGTH} символов`
    },
    {
      rule: hashtagTexts.some((text, index, array) => array.indexOf(text, index + 1) > index),
      error: 'Хэш-тэги не должны повторяться'
    },
    {
      rule: hashtagTexts.length > MAX_HASHTAGS_COUNT,
      error: `Нельзя указывать больше ${MAX_HASHTAGS_COUNT} хэш-тегов`
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

pristine.addValidator(inputHashtag, hashtagErrorHandler, getErrorMessage, 2, false);

const onHashtagInput = () => {
  submitButton.disabled = !pristine.validate();
};

const uploadHashtagInput = () => {
  inputHashtag.addEventListener('input', onHashtagInput);
};

const checkFormValidation = () => pristine.validate();

const clearHashtagsField = () => {
  inputHashtag.value = '';

  pristine.validate();
};

export {form, uploadHashtagInput, clearHashtagsField, checkFormValidation};
