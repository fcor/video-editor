const canSaveClip = (start, end) => {
  const intEnd = parseInt(end, 10);
  const intStart = parseInt(start, 10);
  if (intEnd > intStart && intStart >= 0 && intEnd <= 52) return true;
  return false;
};

const isClipNameUnique = (name, clips) => {
  const result = clips.filter(item => item.name === name);
  if (result.length > 0) return false;
  return true;
};

const getThumbnail = () => {
  const number = Math.floor(Math.random() * 12) + 1;
  return `../dist/images/tn${number}.png`;
};

export { canSaveClip, isClipNameUnique, getThumbnail };
