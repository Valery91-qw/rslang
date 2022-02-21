import React, { useState } from 'react';
import './DropUp.css';
import classes from './DropUp.module.css';

interface IProps {
  getGroup: (num:number) => void;
}
const DropUp:React.FC<IProps> = ({getGroup}) => {
  const [active, setActive] = useState<string>();
  const [group, setGroup] = useState(Number(localStorage.getItem('group')));
  console.log(group + ' = groupInit')

  const activeLevel = () => {
    setActive('active-button');
  }
  const chooseGroup = (num:number) => {
    setActive('');
    setGroup(num);
    return getGroup(num);
  }

  return (
    <div className="btn-group dropup">
      <button
        onClick={activeLevel}
        className={'btn btn-secondary btn-lg btn-danger ' + classes.Button}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Сложность
      </button>
      <ul className={'dropdown-menu dropdown-menu-my ' + active}>
        <li className={classes.LiItem}><button
          id='#level6'
          className={'btn dropdown-item ' + classes.DropItem + ' ' + classes.DropItem6}
          onClick={() => chooseGroup(5)}
        >6</button></li>
        <li className={classes.LiItem}><button
          id='#level5'
          onClick={() => chooseGroup(4)}
          className={'btn dropdown-item ' + classes.DropItem + ' ' + classes.DropItem5}>5</button></li>
        <li className={classes.LiItem}><button
          id='#level4'
          onClick={() => chooseGroup(3)}
          className={'btn dropdown-item ' + classes.DropItem + ' ' + classes.DropItem4}>4</button></li>
        <li className={classes.LiItem}><button
          id='#level3'
          onClick={() => chooseGroup(2)}
          className={'btn dropdown-item ' + classes.DropItem + ' ' + classes.DropItem3}>3</button></li>
        <li className={classes.LiItem}><button
          id='#level2'
          onClick={() => chooseGroup(1)}
          className={'btn dropdown-item ' + classes.DropItem + ' ' + classes.DropItem2}>2</button></li>
        <li className={classes.LiItem}><button
          id='#level1'
          onClick={() => chooseGroup(0)}
          className={'btn dropdown-item ' + classes.DropItem + ' ' + classes.DropItem1}>1</button></li>
      </ul>
    </div>
  );
};

export default DropUp;