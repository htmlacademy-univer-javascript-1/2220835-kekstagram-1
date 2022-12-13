const generateSetting = (min, max, start, step) => ({
  range: { min, max },
  start,
  step,
  connect: 'lower'
});

const sliderSettings = {
  'none': generateSetting(0, 100, 100, 1),
  'chrome': generateSetting(0, 1, 1, 0.1),
  'sepia': generateSetting(0, 1, 1, 0.1),
  'marvin': generateSetting(0, 100, 100, 1),
  'phobos': generateSetting(0, 3, 3, 0.1),
  'heat': generateSetting(0, 3, 3, 0.1)
};

const sliderStyles = {
  'none': () => 'none',
  'chrome': (value) => `grayscale(${value})`,
  'sepia': (value) => `sepia(${value})`,
  'marvin': (value) => `invert(${value}%)`,
  'phobos': (value) => `blur(${value}px)`,
  'heat': (value) => `brightness(${value})`
};

const sliderScaleChange = (filter, levelSlider, levelValue) => {
  let simpleFilter = filter;

  const hiddenIfFilterIsNone = () => {
    if (simpleFilter === 'none') {
      levelSlider.classList.add('hidden');
    } else {
      levelSlider.classList.remove('hidden');
    }
  };

  hiddenIfFilterIsNone();

  const setSimpleFilter = (value) => {
    simpleFilter = value;

    hiddenIfFilterIsNone();
  };

  const getOptions = () => sliderSettings[simpleFilter];
  const getStyles = () => sliderStyles[simpleFilter](levelValue.value);
  const getSimpleFilter = () => simpleFilter;

  return {
    getOptions,
    getStyles,
    setSimpleFilter,
    getSimpleFilter,
  };
};

export {sliderScaleChange};

