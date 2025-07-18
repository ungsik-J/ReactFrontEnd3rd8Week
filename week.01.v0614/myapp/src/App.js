import React from 'react';
import './App.css';

import Parent from './component/Parent';
import TextArea from './component/TextArea';
import Select from './component/Select';
import Booking from './component/Booking';

const App = () => {



  return (
    <div className="App">
      <header className="App-header">
        <h5>React, Hello World</h5>
        <Booking />
      </header>
    </div>
  );
}

export default App;
