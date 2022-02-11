import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UsersForm from '../components/UI/form/UsersForm';
import NotFound from '../components/UI/pages/NotFound';
// just to check nested routes must delete
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
        <Route index element={<div>Main</div>} />
        <Route path="authorize" element={<div>Athorisation</div>} />
        <Route path="ebook" element={<div>ebook</div>} />
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
