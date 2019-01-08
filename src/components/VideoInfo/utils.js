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

export { canSaveClip, isClipNameUnique };
