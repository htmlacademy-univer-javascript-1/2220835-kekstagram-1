import { uploadingOverlay } from './scale-change.js';

const MAX_MARVIN_VALUE = 100;
const MAX_PHOBOS_VALUE = 3;
const MAX_HEAT_VALUE = 3;
const RELIX = 10;
const MIN_SLIDE_VALUE = 0;
const MAX_SLIDE_VALUE = 100;
const STEP_SLIDE = 1;
const CONNECT_SLIDE = 'lower';

const uploadingPicture = uploadingOverlay.querySelector('.img-upload__preview').querySelector('img');
const effectLevelValue = uploadingOverlay.querySelector('.effect-level__value');
const effectLevelSlider = uploadingOverlay.querySelector('.effect-level__slider');
const imgUploadEffectLevel = uploadingOverlay.querySelector('.img-upload__effect-level');
const effectsList = uploadingOverlay.querySelector('.effects__list');

let currentEffect = '';

noUiSlider.create(effectLevelSlider, {
  range: {
    min: MIN_SLIDE_VALUE,
    max: MAX_SLIDE_VALUE
  },
  start: MAX_SLIDE_VALUE,
  step: STEP_SLIDE,
  connect: CONNECT_SLIDE
});

const getEffectStep = (effectMaxValue) => effectMaxValue / MAX_SLIDE_VALUE;

const effects = {
  none: () => {
    imgUploadEffectLevel.classList.add('hidden');
    return 'none';
  },

  chrome: () => {
    imgUploadEffectLevel.classList.remove('hidden');
    return `grayscale(${parseInt(effectLevelValue.value, RELIX) * getEffectStep(1)})`;
  },

  sepia: () => {
    imgUploadEffectLevel.classList.remove('hidden');
    return `sepia(${parseInt(effectLevelValue.value, RELIX) * getEffectStep(1)})`;
  },

  marvin: () => {
    imgUploadEffectLevel.classList.remove('hidden');
    return `invert(${parseInt(effectLevelValue.value, RELIX) * getEffectStep(MAX_MARVIN_VALUE)}%)`;
  },

  phobos: () => {
    imgUploadEffectLevel.classList.remove('hidden');
    return `blur(${parseInt(effectLevelValue.value, RELIX) * getEffectStep(MAX_PHOBOS_VALUE)}px)`;
  },

  heat: () => {
    imgUploadEffectLevel.classList.remove('hidden');
    const effectMin = MAX_SLIDE_VALUE / (MAX_HEAT_VALUE - 1);
    return `brightness(${(effectMin + parseInt(effectLevelValue.value, RELIX)) * getEffectStep(MAX_HEAT_VALUE - 1)})`;
  }
};

const onSliderChange = () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();

  uploadingPicture.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
};

const onEffectsClick = (evt) => {
  let element = evt.target;

  if(element.classList.contains('effects__label')){
    element = element.querySelector('span');
  }

  if(element.classList.contains('effects__preview')) {
    if(currentEffect !== '') {
      uploadingPicture.classList.remove(currentEffect);
    }

    effectLevelSlider.noUiSlider.set(MAX_SLIDE_VALUE);
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();

    currentEffect = element.classList[1];
    uploadingPicture.classList.add(currentEffect);
    uploadingPicture.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
  }
};

const setEffects = () => {
  currentEffect = 'effects__preview--none';

  uploadingPicture.style.filter = effects.none();

  effectsList.children[0].querySelector('input').checked = true;
};

effectLevelSlider.noUiSlider.on('change', onSliderChange);
effectsList.addEventListener('click', onEffectsClick);

export{setEffects};
