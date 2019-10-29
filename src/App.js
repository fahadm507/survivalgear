import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.js';




function App() {
  return (
    <switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </switch>
  );
}

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

export default App;
