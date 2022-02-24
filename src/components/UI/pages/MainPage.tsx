import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './css/MainPage.css';
import wordAPI from '../../../dal/wordAPI/wordAPI';
import usersAPI from '../../../dal/wordAPI/usersAPI';
import FrameAboutApp from './MainPageFrames/FrameAboutApp';
import ArrowRight from './MainPageFrames/ArrowRight';
import FrameValera from './MainPageFrames/FrameValera';
import FrameIgor from './MainPageFrames/FrameIgor';

const MainPage:React.FC = () => {

  // let countFrames = 0;
  const [countFrames, setCountFrames] = useState<number>(0);
  const [pageFrame, setPageFrame] = useState<JSX.Element>(<FrameAboutApp />);

  useEffect(() => {
    wordAPI.getWords();
    usersAPI.singIn();
  }, []);

  const changeFrame = () => {
    setCountFrames(countFrames + 1);
  };
  // let pageFrame:JSX.Element;
  useEffect(() => {
    if (countFrames > 2) setCountFrames(0);
    console.log(`change Frame ${countFrames}`);
    switch(countFrames) {
      case 0:
        setPageFrame(<FrameAboutApp />);
        break;
      case 1:
        setPageFrame(<FrameValera />);
        break;
      case 2:
        setPageFrame(<FrameIgor />);
        break
      default:
        break;
    }
  },[countFrames])

  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <div className="main">
          {pageFrame}
          <button onClick={changeFrame} className='arrow-button'>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
