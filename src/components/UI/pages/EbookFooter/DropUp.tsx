import React from 'react';
import './DropUp.css';
import classes from './DropUp.module.css';

const DropUp:React.FC = () => {
  return (


    <div className="btn-group dropup">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropup"
              aria-expanded="false">
        Dropup
      </button>
      <ul className="dropdown-menu dropup">
        <li><a className="dropdown-item dropup" href="#">Action</a></li>
        <li><a className="dropdown-item dropup" href="#">Another action</a></li>
        <li><a className="dropdown-item dropup" href="#">Something else here</a></li>
        {/*<li>*/}
        {/*  <hr className="dropdown-divider">*/}
        {/*</li>*/}
        <li><a className="dropdown-item dropup" href="#">Separated link</a></li>
      </ul>
    </div>
  );
};

export default DropUp;