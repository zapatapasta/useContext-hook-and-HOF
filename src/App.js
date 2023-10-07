import { useState } from 'react';
import Javascript from './Components/Courses/Javascript';
import Reactjs from './Components/Courses/Reactjs';
import User from './Components/Users/User';
import UsernameProvider from './Components/Contexts/UsernameContext';

function App() {

  return (
    <div>
      <Javascript/>
      <Reactjs/>
      <hr />
      <UsernameProvider>
        <User/>
      </UsernameProvider>
    </div>
  );
}

export default App;
