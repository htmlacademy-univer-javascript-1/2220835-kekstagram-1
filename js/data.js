import {getRandomPositiveInteger, getRandomArrayElement} from './util.js'

const DESCRIPTIONS = [
    'Это просто я.',
    'Всегда начинайте свой день с хороших людей и кофе.',
    'Мечтайте.',
    'Улыбайтесь.',
    'Это просто моя жизнь.',
    'Жить - это так здорово'
];
  
const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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
  comments: Array.from({length: 3}, getComment)
});

const arrayPostingPhoto = Array.from({length: 25}, getPostingPhoto);

export {arrayPostingPhoto}
