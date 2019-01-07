const getInputDetails = type => {
  if (type === 'start') {
    return {
      id: 'start',
      type: 'number',
      label: 'START',
      placeholder: 'Start',
    };
  }
  if (type === 'end') {
    return {
      id: 'end',
      type: 'number',
      label: 'END',
      placeholder: 'End',
    };
  }
  return {
    id: 'name',
    type: 'text',
    label: 'CLIP NAME',
    placeholder: 'Clip name',
  };
};

export default getInputDetails;
