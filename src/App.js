import React from 'react';
import './App.scss';

import UserProfile from './components/user-profile/UserProfile';
import UserList from './components/user-list/UserList';

function App() {
  return (
    <div className='App'>
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile
        name='Rohan Gautam'
        email='rohan@rrg.com.np'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}

export default App;
