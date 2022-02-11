import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPass = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRefName.current?.value);
    console.log(inputRefEmail.current?.value);
    console.log(inputRefPass.current?.value);
  }

    // const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //     console.log('DRAG')
    // }
    //
    // const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     setIsDrag(true)
    // }
    //
    // const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     setIsDrag(false)
    // }

    // const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     setIsDrag(false)
    //     console.log('DROP')
    // }

  return (
    <div>
      {/*<input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>*/}
      <input ref={inputRefName} type="text" placeholder="Name"/>
      <input ref={inputRefEmail} type="text" placeholder="e-mail"/>
      <input ref={inputRefPass} type="text" placeholder="Password"/>
      <button onClick={clickHandler}>asfasf</button>
    </div>
  );
};

export default EventsExample;
