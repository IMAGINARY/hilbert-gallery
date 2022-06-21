import React from 'react';
import PropTypes from 'prop-types';

export default function ExhibitThumbnail(props) {
  const { exhibit } = props;
  return (
    <div
      className="exhibit-thumbnail"
      style={{ backgroundImage: `url(${exhibit.thumbnail})` }}
    />
  );
}

ExhibitThumbnail.propTypes = {
  exhibit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
