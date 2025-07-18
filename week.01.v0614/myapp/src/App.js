import React from 'react';
import './App.css';

import Parent from './component/Parent';
import TextArea from './component/TextArea';
import Select from './component/Select';

const App = () => {



  return (
    <div className="App">
      <header className="App-header">
        <h5>React, Hello World</h5>
        <Select />
      </header>
    </div>
  );
}

export default App;
