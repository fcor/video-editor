import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';

const shouldDisplayButton = (mode, cantDelete) => {
  if (cantDelete || mode === 'PLAYING') return false;
  return true;
};

const durationInSeconds = duration => {
  if (duration < 10) return `0${duration}`;
  return duration;
};

const Thumbnail = ({
  clip,
  mode,
  isSelected,
  handleSelectedClip,
  handleDelete,
  cantDelete,
  index,
}) => {
  const displayButton = shouldDisplayButton(mode, cantDelete);
  const duration = clip.end - clip.start;
  let selected = '';
  if (isSelected) selected = 'selected';
  return (
    <div className={`thumbnail column ${selected}`}>
      <img onClick={() => handleSelectedClip(index)} src={clip.thumbnail} alt="Thumbnail" />
      <div className="info row">
        <div className="details column">
          <h1>{clip.name}</h1>
          <p>{`00:${durationInSeconds(duration)}`}</p>
        </div>
        {displayButton && (
          <Button onClick={() => handleDelete(index)} variant="delete">
            DELETE
          </Button>
        )}
      </div>
    </div>
  );
};

Thumbnail.defaultProps = {
  cantDelete: false,
  index: 1000,
};

Thumbnail.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleSelectedClip: PropTypes.func.isRequired,
  clip: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  cantDelete: PropTypes.bool,
  index: PropTypes.number,
};

export default Thumbnail;
