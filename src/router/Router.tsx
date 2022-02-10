import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sprint from '../components/UI/pages/games/sprint/Sprint';
import Games from '../components/UI/pages/games/Games';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>Main</div>} />
        <Route path="authorize" element={<div>Authorize</div>} />
        <Route path="ebook" element={<div>ebook</div>} />
        <Route path="games">
          <Route index element={<Games />} />
          <Route path="sprint" element={<Sprint isLogin={false} />} />
          <Route path="audioChallenge" element={<div>Audio challenge</div>} />
        </Route>
        <Route path="statistic" element={<div>Statistic</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
