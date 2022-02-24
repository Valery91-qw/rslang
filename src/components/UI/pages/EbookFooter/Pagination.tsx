import React, { useState, useEffect, useRef } from 'react';
import './Pagination.css';
import classes from './Pagination.module.css';

interface IProps {
  getPage: (num:number) => void;
}

const Pagination:React.FC<IProps> = ({getPage}) => {
  const prev = '<<';
  const next = '>>';
  const [page, setPage] = useState<number>(Number(localStorage.getItem('page')));
  const [value, setValue] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>();
  const [prevPage, setPrevPage] = useState<number>();
  const [valueInput, setValueInput] = useState<string>();
  // const inputRef = useRef();
  console.log(page + ' = pageInit');

  useEffect(() => {
    choosePage(value);
  }, [value])

  const choosePage = (numPage:number) => {
    let num = page + numPage;
    num = (page === 29 && num > 29)? 0 : num;
    num = page === 0 && num < 0? 29 : num;
    setNextPage(num === 29? 0: num + 2);
    setPrevPage(num === 0? 29: num);
    console.log(nextPage + ' =nextPage')
    // num -= 1;
    setPage(num);
    getPage(num);
    console.log(num);
  };
  const getPageFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueChecked = typeof Number(e.target.value) === 'number'? Number(e.target.value) - 1 : 1 ;
    valueChecked = valueChecked >= 0? valueChecked : 0;
    valueChecked = valueChecked < 29? valueChecked : 29;
    // setValue(Number(valueChecked));
    console.log(e.target.value);
    console.log(valueChecked);
    setPage(valueChecked);
    getPage(valueChecked);
  }

  return (
    <div>
      <nav aria-label={classes.NavArea}>
        <ul className={'pagination ' + classes.Pagination}>
          <li className="page-item">
            <button
              onClick={() => choosePage(-1)}
              className="btn btn-danger"
            >
              {prev}
            </button>
          </li>
          <button
            onClick={() => choosePage(-1)}
            className={'btn btn-danger '}>{prevPage}</button>
          <li className="active">
            <input
              value={valueInput}
              onChange={getPageFromInput}
              type="text"
              placeholder={'на номер -> ' + (1 + page) + ' - текущая'}
            />
            {/*<a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>*/}
          </li>
          {/*<button*/}
          {/*  // onClick={getPageFromInput}*/}
          {/*  className={classes.BtnEnter}*/}
          {/*/>*/}
          <button
            onClick={() => choosePage(+1)}
            className={'btn btn-danger '}>{nextPage}</button>
          <li className="page-item">
            <button
              onClick={() => choosePage(+1)}
              className="btn btn-danger"
            >
              {next}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;