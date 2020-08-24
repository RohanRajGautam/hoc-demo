import React from 'react';
import './App.scss';

import UserProfile from './components/user-profile/UserProfile';
import UserList from './components/user-list/UserList';

function App() {
  return (
    <div className='App'>
      <UserList />
      <UserProfile name='Rohan' email='rohan@rrg.com.np' />
    </div>
  );
}

export default App;
