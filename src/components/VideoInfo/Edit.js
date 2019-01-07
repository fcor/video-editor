import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const Edit = ({
  handleTyping,
  handleSave,
  handleDiscard,
  handleDelete,
  handleEdit,
  start,
  end,
  name,
}) => (
  <div>
    <Input variant="start" value={start} handleTyping={handleTyping} />
    <Input variant="end" value={end} handleTyping={handleTyping} />
    <Input variant="name" value={name} handleTyping={handleTyping} />
    <button type="submit" onClick={handleSave}>
      Save new
    </button>
    <button type="submit" onClick={handleDiscard}>
      Discard
    </button>
    <button type="submit" onClick={handleDelete}>
      Delete
    </button>
    <button type="submit" onClick={handleEdit}>
      Save changes
    </button>
  </div>
);

Edit.propTypes = {
  handleTyping: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDiscard: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Edit;
