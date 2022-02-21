import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input
      // ref={inputRefName}
      // value={value}
      // ref={inputRef}
      // onChange={(event => setValue(Number(event.target.value)))}
      className={'page-link sr-only ' + classes.InputField}
      {...props}
      // type='text'
    />
  );
});

export default MyInput;