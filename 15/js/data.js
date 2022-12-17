import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Это просто я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Мечтайте.',
  'Улыбайтесь.',
  'Это просто моя жизнь.',
  'Жить - это так здорово'
];

const NAMES = [
  'Анастасия',
  'Никита',
  'Максим',
  'Кристина',
  'Леонид',
  'Валерия',
  'Валерий'
];

const PHOTO_COUNT = 25;

let idComment = 0;
const getComment = () => ({
  id: idComment ++,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

let idPostingPhoto = 0;
const getPostingPhoto = () => ({
  id: idPostingPhoto ++,
  url: `photos/${this.id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  lekes: getRandomPositiveInteger(15, 200),
  comments: Array.from({length: getRandomPositiveInteger(1, 12)}, getComment)
});

const createPostingPhoto = () => Array.from({length: PHOTO_COUNT}, getPostingPhoto);

export {createPostingPhoto};
