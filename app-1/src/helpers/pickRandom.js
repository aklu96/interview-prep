import cards from './cards';

const pickRandom = () => {
  const index = Math.floor(Math.random() * 52);
  return cards[index];
};

export default pickRandom;
