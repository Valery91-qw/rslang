import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Preloader;
