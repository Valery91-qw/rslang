import React, { useLayoutEffect, useState } from 'react';
import styles from './choosLvl.module.css';

type ChooseLvlType = {
  children : React.ReactComponentElement<any>
};

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const ChooseLvl: React.FC<ChooseLvlType> = ({ children }) => {
  const [start, setStart] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [lvl, setLvl] = useState<number>();
  const [isAuthorize] = useState<string>('false');

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement;
    setDisable(false);
    setLvl(+target.value);
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
        <span className={styles.title}>Choose your lvl</span>
        <div className={styles.selectsWrapper} onChange={handleChange}>
          {levels.map((el, i) => {
            return (
              <label className={styles.label} htmlFor={`lvl${el}`} key={`${el}`}>
                {el}
                <input className={styles.select} id={`lvl${el}`} type="radio" value={i} name="lvl" />
              </label>
            );
          }) }
        </div>
        <button type="button" onClick={handleClick} disabled={disable}>Start</button>
      </div>
    );
};

export default ChooseLvl;
