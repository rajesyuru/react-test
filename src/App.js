import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import Page from './containers/Page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Page />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
