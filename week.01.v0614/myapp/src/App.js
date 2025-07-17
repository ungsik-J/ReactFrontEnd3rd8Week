import React, { useEffect } from 'react';
import './App.css';

import Parent from './component/Parent';

const App = () => {
  useEffect(() => {
    const handleLoad = () => {
      console.log("Window fully loaded!");

      // 여기에 원하는 로직 작성

    };

    window.addEventListener("load", handleLoad);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []); // useEffect

  return (
    <div className="App">
      <header className="App-header">
        <h5>React, Hello World</h5>
        <Parent />
      </header>
    </div>
  );
}

export default App;
