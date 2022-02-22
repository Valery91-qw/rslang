import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sprint from '../components/UI/pages/games/sprint/Sprint';
import Games from '../components/UI/pages/games/Games';
import ChooseLvl from '../components/UI/pages/games/choos-lvl/ChooseLvl';
import MainPage from '../components/UI/pages/MainPage';
import Ebook from '../components/UI/pages/Ebook';
import Statistic from '../components/UI/pages/Statistic';
import AudioChallenge from '../components/UI/pages/games/audio-challenge/AudioChallenge';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/rslang">
        <Route index element={<MainPage />} />
        <Route path="/rslang/authorize" element={<div>Athorisation</div>} />
        <Route path="/rslang/ebook" element={<Ebook />} />
        <Route path="/rslang/games">
          <Route index element={<Games />} />
          <Route path="/rslang/games/sprint" element={<ChooseLvl><Sprint /></ChooseLvl>} />
          <Route path="/rslang/games/audioChallenge" element={<ChooseLvl><AudioChallenge /></ChooseLvl>} />
        </Route>
        <Route path="/rslang/statistic" element={<Statistic />} />
      </Route>
      <Route path="*" element={<Navigate to="/rslang" />} />
    </Routes>
  );
};

export default Router;
