const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
};

const platformList = ['Medium', 'Brunch', 'Velog', 'Tistory'];
const categoryList = [
  'Frontend',
  'Backend',
  'JAVA',
  'Javascript',
  'C',
  'Python',
  'News',
];

const createData = (index) => {
  switch (getRandomNumber(0, 2)) {
    case 1: {
      return {
        index,
        _id: getRandomNumber(10000000, 800000000).toString(),
        image: 'https://source.unsplash.com/random',
        writer: `작성자 - ${index}`,
        link: '',
        title: `제목 - ${index}`,
        description: '',
        platform: platformList[getRandomNumber(0, 3)],
        is_saved: false,
        category: categoryList[getRandomNumber(0, 6)],
        tags: ['태그1', '태그2'],
        date: '2020/01/01',
        saved_count: getRandomNumber(0, 100),
        created_at: '2020/01/01',
      };
    }
    case 2: {
      return {
        index,
        _id: getRandomNumber(10000000, 800000000).toString(),
        image: 'https://source.unsplash.com/random',
        writer: `작성자 - ${index}`,
        link: '',
        title: `제목 - ${index}`,
        description: '',
        platform: platformList[getRandomNumber(0, 4)],
        is_saved: false,
        category: categoryList[getRandomNumber(0, 7)],
        tags: ['태그1', '태그2'],
        date: '2020/01/01',
        saved_count: getRandomNumber(0, 100),
        created_at: '2020/01/01',
      };
    }
    default: {
      return {
        index,
        _id: getRandomNumber(10000000, 800000000).toString(),
        image: '',
        writer: `작성자 - ${index}`,
        link: '',
        title: `제목 - ${index}`,
        description: '',
        platform: platformList[getRandomNumber(0, 4)],
        is_saved: false,
        category: categoryList[getRandomNumber(0, 7)],
        tags: ['태그1', '태그2'],
        date: '2020/01/01',
        saved_count: getRandomNumber(0, 100),
        created_at: '2020/01/01',
      };
    }
  }
};

module.exports = function () {
  return {
    users: [],
    cards: Array(50)
      .fill('')
      .map((_, index) => createData(index)),
  };
};
