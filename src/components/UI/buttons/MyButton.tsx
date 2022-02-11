import React, { useState } from 'react';
import './MyButton.css';

export enum CardVariant {
  rounded = 'rounded',
  squared = 'squared',
}

export interface IButtonProps {
  width?: string;
  height?: string;
  color?: string;
  variant?: CardVariant;
  children: string;
  // type?: string;
  myClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: React.FC<IButtonProps> = ({
  width,
  height,
  children,
  color,
  variant,
  // type,
  myClick = onclick,
}) => {
  const [state, setState] = useState('Igor');
  return (
    <div>
      <button
        type="submit"
        className="floatingButton myBtn"
        style={{ color, width, height, borderRadius: variant === CardVariant.rounded? '2vh': '0.5vh'
        }}
        onClick={() => myClick}
        // onClick = Click;
      >
        {children}
      </button>
    </div>
  );
};
export default MyButton;
