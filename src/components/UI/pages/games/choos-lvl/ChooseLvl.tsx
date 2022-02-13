import React, { useLayoutEffect, useState } from 'react';
import styles from './choosLvl.module.css';

type ChooseLvlType = {
  children : React.ReactComponentElement<any>
};

const ChooseLvl: React.FC<ChooseLvlType> = ({ children }) => {
  const [start, setStart] = useState<boolean>(false);
  const [lvl, setLvl] = useState<number>();
  const [isAuthorize] = useState<string>('false');

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement;
    setLvl(+target.value - 1);
  };

  const handleClick = () => {
    setStart(true);
  };

  useLayoutEffect(() => {
    if (isAuthorize === 'true') {
      setStart(true);
    }
  }, [isAuthorize, setStart]);

  return start
    ? <>{ children ? React.cloneElement(children, { lvl }) : children }</>
    : (
      <div className={styles.wrapper}>
        <span>Choose your lvl</span>
        <div onChange={handleChange}>
          <input type="radio" value={1} name="lvl" />
          <input type="radio" value={2} name="lvl" />
          <input type="radio" value={3} name="lvl" />
          <input type="radio" value={4} name="lvl" />
          <input type="radio" value={5} name="lvl" />
          <input type="radio" value={6} name="lvl" />
        </div>
        <button type="button" onClick={handleClick} disabled={!lvl}>Start</button>
      </div>
    );
};

export default ChooseLvl;
