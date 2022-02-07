import React from 'react';
import './MyButton.css';

export interface IButtonProps {
  width?: string;
  color?: string;
  children?: React.ReactChild | React.ReactNode;
}

const MyButton: React.FC<IButtonProps> = ({
  width,
  children,
  color,
}) => {
  return (
    <div>
      <button type="submit" className="floatingButton myBtn" style={{ color, width }}>
        {children}
      </button>
    </div>
  );
};
export default MyButton;
