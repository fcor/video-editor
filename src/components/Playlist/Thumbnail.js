import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';
import getThumbnail from './utils';

const shouldDisplayButton = (mode, cantDelete) => {
  if (cantDelete || mode === 'PLAYING') return false;
  return true;
};

const Thumbnail = ({ clip, mode, handleDelete, cantDelete, index }) => {
  const displayButton = shouldDisplayButton(mode, cantDelete);
  // let thumbnail;
  // if (cantDelete) {
  //   thumbnail = '../dist/images/tn11.png';
  // } else {
  //   thumbnail = getThumbnail();
  // }

  return (
    <div className="thumbnail column">
      <img src={clip.thumbnail} alt="Thumbnail" />
      <div className="info row">
        <div className="details column">
          <h1>{clip.name}</h1>
          <p>{`00:${clip.end - clip.start}`}</p>
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
  clip: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  cantDelete: PropTypes.bool,
  index: PropTypes.number,
};

export default Thumbnail;
