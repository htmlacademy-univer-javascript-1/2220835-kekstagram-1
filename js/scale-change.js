const IMAGE_SCALE_STEP = 25;
const MIN_IMAGE_SCALE_VALUE = 25;
const MAX_IMAGE_SCALE_VALUE = 100;

const uploadingOverlay = document.querySelector('.img-upload__overlay');
const uploadingPicture = uploadingOverlay.querySelector('.img-upload__preview').querySelector('img');
const scale = uploadingOverlay.querySelector('.img-upload__scale');
const scalerField = scale.querySelector('.scale__control--value');

const changeScale = (scaleCoefficient) => {
  let scaleNumber = Number(scalerField.value.replace('%', '')) + scaleCoefficient * IMAGE_SCALE_STEP;

  if(scaleNumber < MIN_IMAGE_SCALE_VALUE) {
    scaleNumber = MIN_IMAGE_SCALE_VALUE;
  }
  else if (scaleNumber > MAX_IMAGE_SCALE_VALUE) {
    scaleNumber = MAX_IMAGE_SCALE_VALUE;
  }

  scalerField.value = `${scaleNumber}%`;
  uploadingPicture.style.transform = `scale(${scaleNumber / 100})`;
};

const onScaleButtonClick = (evt) => {
  if(evt.target.matches('button')) {
    let coefficient = 1;
    if(evt.target.matches('.scale__control--smaller')) {
      coefficient = -1;
    }

    changeScale(coefficient);
  }
};

const scalingPhotos = () => {
  scalerField.value = `${MAX_IMAGE_SCALE_VALUE}%`;
  uploadingPicture.style.transform = `scale(${MAX_IMAGE_SCALE_VALUE / 100})`;
};

scale.addEventListener('click', onScaleButtonClick);

export{scalingPhotos, uploadingOverlay};
