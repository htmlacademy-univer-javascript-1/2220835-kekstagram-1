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

function checkMaxLength(str, maxLength)
{
  return str.length <= maxLength;
}

function getRandomNumber(start, end)
{
  if(start === end){return start;}
  if(start > end){return -1;}
  start = Math.ceil(start);
  end = Math.floor(end);
  return Math.floor(Math.random() * (end - start)) + start;
}

let idComment = 0
const getComment = () => ({
  id: idComment ++,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNumber(0, NAMES.length - 1)]
});

let idPostingPhoto = 0;
const getPostingPhoto = () => ({
  id: idPostingPhoto ++,
  url: `photos/${this.id}.jpg`,
  description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
  lekes: getRandomNumber(15, 200),
  comments: Array.from({length: 3}, getComment)
});

const arrayPostingPhoto = Array.from({length: 25}, getPostingPhoto);
checkMaxLength(' ', 5);