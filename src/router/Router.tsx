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
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="authorize" element={<div>Athorisation</div>} />
        <Route path="ebook" element={<Ebook />} />
        <Route path="games">
          <Route index element={<Games />} />
          <Route path="sprint" element={<ChooseLvl><Sprint /></ChooseLvl>} />
          <Route path="audioChallenge" element={<AudioChallenge />} />
        </Route>
        <Route path="statistic" element={<Statistic />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
