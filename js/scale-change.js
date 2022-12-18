const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;

const uploadingOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = uploadingOverlay.querySelector('.img-upload__preview').querySelector('img');
const imgUploadScale = uploadingOverlay.querySelector('.img-upload__scale');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');

const changeScale = (scaleCoefficient) => {
  let scaleNumber = Number(scaleControlValue.value.replace('%', '')) + scaleCoefficient * SCALE_STEP;

  if(scaleNumber < SCALE_MIN) {
    scaleNumber = SCALE_MIN;
  }
  else if (scaleNumber > SCALE_MAX) {
    scaleNumber = SCALE_MAX;
  }

  scaleControlValue.value = `${scaleNumber}%`;
  imgUploadPreview.style.transform = `scale(${scaleNumber / 100})`;
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

const scalingImage = () => {
  scaleControlValue.value = `${SCALE_MAX}%`;
  imgUploadPreview.style.transform = `scale(${SCALE_MAX / 100})`;
};

imgUploadScale.addEventListener('click', onScaleButtonClick);

export{scalingImage, uploadingOverlay};
