import React, { useEffect, useState } from 'react';
import './normalize.css';
import './App.css';
import Footer from './components/UI/pages/footer';
import Header from './components/UI/pages/header';
import Router from './router/Router';
// import { API_URL, TOKEN } from './constants';
// import UsersForm from './components/UI/form/UsersForm';
// import EventsExample from './components/requests/EventsExample';

// export function controlClick() {
//   console.log('controlClick');
// }

const App: React.FC = () => {
  const [formCorrect, setFormCorrect] = useState<string>();

  // const userIDg = {id: '6201778e84b3ea001594d79c', name: '', email: ''};

  // async function fetchUserApp0() {
  //   console.log('useFetchUser');
  //   // useFetchUser();
  // }
  //

  // async function fetchUserApp() {
  //   try {
  //     const response = await axios.get<IUserID>((API_URL + '/users/' + userIDg.id),
  //       {
  //         headers: {
  //           'Authorization': `Bearer ` +  TOKEN,
  //           'Accept': 'application/json',
  //         }
  //       });
  //     setUserID(response.data);
  //     // console.log(userID);
  //   } catch ( error ) {
  //     alert(error);
  //   }
  // }
  // console.log(userID);

  return (
    <div className="App">
      <div className="wrapper">
        {/*<Header onClick={() => { setFormCorrect('UserForm active'); console.log(formCorrect, 'Form GO!')}} />*/}
        <Header />
        <div className="main">
          <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
