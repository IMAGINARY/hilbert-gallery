import React from 'react';
import PropTypes from 'prop-types';

export default function Loader(props) {
  const { loading, error, children } = props;

  if (error) {
    return <div className="loader-error">{ error }</div>;
  }

  if (loading) {
    return (
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
      </div>
    );
  }

  return children;
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Loader.defaultProps = {
  error: null,
};
