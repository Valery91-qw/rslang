import React from 'react';
import { useParams } from 'react-router-dom';

const ChooseLvl: React.FC = ({ children }) => {
  const { isAuthorize } = useParams();

  return isAuthorize
    ? <>{ children }</>
    : <div> choose </div>;
};

export default ChooseLvl;
