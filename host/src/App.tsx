import React from 'react';
import './App.css';
import { VueAppLoader } from './microfrontends/VueAppLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Host app
      </header>
      <div>Includes Vue app below</div>
      <VueAppLoader />
    </div>
  );
}

export default App;
