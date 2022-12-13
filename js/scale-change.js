const IMAGE_SCALE_STEP = 25;
const MIN_IMAGE_SCALE_VALUE = 25;
const MAX_IMAGE_SCALE_VALUE = 100;

const imageScale = (simpleImageScale, imgPreview) => {
  let scaleValue;

  const applyChanges = () => {
    simpleImageScale.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  };

  const init = () => {
    scaleValue = MAX_IMAGE_SCALE_VALUE;
    applyChanges();
  };

  init();

  const increaseValue = () => {
    if (scaleValue !== MAX_IMAGE_SCALE_VALUE) {
      scaleValue += IMAGE_SCALE_STEP;
      applyChanges();
    }
  };

  const decreaseValue = () => {
    if (scaleValue !== MIN_IMAGE_SCALE_VALUE) {
      scaleValue -= IMAGE_SCALE_STEP;
      applyChanges();
    }
  };

  return {
    init,
    increaseValue,
    decreaseValue,
  };
};

export {imageScale};
