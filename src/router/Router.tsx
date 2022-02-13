import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from '../components/UI/pages/NotFound';
import MainPage from '../components/UI/pages/MainPage';
import Ebook from '../components/UI/pages/Ebook';
// just to check nested routes must delete;
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
        {/*<Route index element={<div>MainPage</div>} />*/}
        <Route index element={<MainPage />} />
        <Route path="authorize" element={<div>Athorisation</div>} />
        {/*<Route path="ebook" element={<div>ebook</div>} />*/}
        <Route path="ebook" element={<Ebook />} />
        <Route path="games">
          <Route index element={<LinkToGames />} />
          <Route path="sprint" element={<div>sprint</div>} />
          <Route path="audioChallenge" element={<div>Audio challenge</div>} />
        </Route>
        <Route path="statistic" element={<div>Statistic</div>} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Route>
    </Routes>
  );
};

export default Router;
