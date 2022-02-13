import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sprint from '../components/UI/pages/games/sprint/Sprint';
import Games from '../components/UI/pages/games/Games';
import ChooseLvl from '../components/UI/pages/games/choos-lvl/ChooseLvl';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>Main</div>} />
        <Route path="authorize" element={<div>Authorize</div>} />
        <Route path="ebook" element={<div>ebook</div>} />
        <Route path="games">
          <Route index element={<Games />} />
          <Route path="sprint" element={<ChooseLvl><Sprint /></ChooseLvl>} />
          <Route path="audioChallenge" element={<div>Audio challenge</div>} />
        </Route>
        <Route path="statistic" element={<div>Statistic</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
