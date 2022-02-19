import React from 'react';
import './DropUp.css';
import classes from './DropUp.module.css';

const DropUp:React.FC = () => {
  return (

    <div className="btn-group dropup">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
        Dropup
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item dropup" href="#">1</a></li>
        <li><a className="dropdown-item dropup" href="#">2</a></li>
        <li><a className="dropdown-item dropup" href="#">3</a></li>
      </ul>
    </div>
  );
};

export default DropUp;