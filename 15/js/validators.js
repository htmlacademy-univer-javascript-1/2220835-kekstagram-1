const TAG_REGEX = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/i;
const MAX_TAGS_COUNT = 5;

const separatedHashtags = (value) => value.toLowerCase().split(' ');

const checkIfHashtagsRepeated = (value) => {
  if (value !== '') {
    const hashTagsArray = separatedHashtags(value);
    const hashTagsSet = new Set(hashTagsArray);

    if (hashTagsSet.size !== hashTagsArray.length) {
      return false;
    }
  }
  return true;
};

const checkMaxHashtagsCount = (value) => {
  if (value !== '') {
    const hashTagsArray = separatedHashtags(value);

    if (hashTagsArray.length > MAX_TAGS_COUNT) {
      return false;
    }
  }
  return true;
};

const checkIfHashtagCorrect = (value) => {
  if (value === '') {
    return true;
  }

  const hashTagsArray = separatedHashtags(value);
  return hashTagsArray.every((hashtag) => TAG_REGEX.test(hashtag));
};

export {checkIfHashtagsRepeated, checkMaxHashtagsCount, checkIfHashtagCorrect, MAX_TAGS_COUNT};
