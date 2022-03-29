import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Profile from './components/UserProfile';
import Header from './components/Header';

function App() {
  const isLogon = useSelector(state => state.auth.isLogon);

  return (
    <Fragment>
      <Header />
      {isLogon ? <Profile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
