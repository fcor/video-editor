import React from 'react';

const getInputDetails = type => {
  if (type === 'start') {
    return {
      id: 'start',
      type: 'number',
      label: 'Start: ',
      placeholder: 'Clip start',
    };
  }
  if (type === 'end') {
    return {
      id: 'end',
      type: 'number',
      label: 'End: ',
      placeholder: 'Clip end',
    };
  }
  return {
    id: 'name',
    type: 'text',
    label: 'Name: ',
    placeholder: 'Clip name',
  };
};

const Input = ({ variant, handleTyping, value }) => {
  const input = getInputDetails(variant);
  return (
    <div>
      <label htmlFor={input.id} className="input-labels">
        {input.label}
      </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.id}
        value={value}
        onChange={e => handleTyping(e, variant)}
      />
    </div>
  );
};

export default Input;
