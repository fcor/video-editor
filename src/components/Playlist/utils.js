const getThumbnail = () => {
  const number = Math.floor(Math.random() * 12) + 1;
  return `../dist/images/tn${number}.png`;
};

export default getThumbnail;
