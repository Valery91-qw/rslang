import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from '../components/UI/pages/MainPage';
import Ebook from '../components/UI/pages/Ebook';
function LinkToGames() {
  return (
    <ul>
      <Link to="sprint">to 1 game</Link>
      <Link to="audioChallenge">to 2 game</Link>
    </ul>
  );
}

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="authorize" element={<div>Athorisation</div>} />
        <Route path="ebook" element={<Ebook />} />
        <Route path="games">
          <Route index element={<LinkToGames />} />
          <Route path="sprint" element={<div>sprint</div>} />
          <Route path="audioChallenge" element={<div>Audio challenge</div>} />
        </Route>
        <Route path="statistic" element={<div>Statistic</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
