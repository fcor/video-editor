import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

const Edit = ({ handleTyping, handleSave, handleDiscard, handleEdit, start, end, name }) => (
  <div className="video-info-edit column">
    <div className="video-info-inputs row">
      <Input variant="name" value={name} handleTyping={handleTyping} />
      <div className="video-info-inputs-numbers row">
        <Input variant="start" value={start} handleTyping={handleTyping} />
        <Input variant="end" value={end} handleTyping={handleTyping} />
      </div>
    </div>
    <div className="video-info-buttons row">
      <Button onClick={handleSave}>SAVE NEW CLIP</Button>
      <Button onClick={handleEdit} variant="edit">
        SAVE CHANGES
      </Button>
      <Button onClick={handleDiscard} variant="discard">
        DISCARD
      </Button>
    </div>
  </div>
);

Edit.propTypes = {
  handleTyping: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDiscard: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Edit;
