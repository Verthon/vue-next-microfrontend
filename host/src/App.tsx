import React from 'react';
import './App.css';
import { Vue3AppLoader } from './microfrontends/Vue3AppLoader';
//import { VueAppLoader } from './microfrontends/VueAppLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Host app
      </header>
      <div>Includes Vue app below</div>
      <Vue3AppLoader />
    </div>
  );
}

export default App;
