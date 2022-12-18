import { form } from './validators';

const PICTURE_EXTENSION = ['png', 'jpeg', 'jpg', 'gif'];

const uploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const effectsPreview = form.querySelectorAll('.effects__preview');

const uploadUserPhoto = (pictureFile) => {
  const matches = PICTURE_EXTENSION.some((extension) => pictureFile.name.toLowerCase().endsWith(extension));

  if (matches) {
    const pictureUrl = URL.createObjectURL(pictureFile);
    uploadPreview.src = pictureUrl;
    effectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url(${pictureUrl})`;
    });
  }
};

export{uploadUserPhoto};
