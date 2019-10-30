import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shop/shop.component.js';


function App() {
  return (
    <switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </switch>
  );
}



export default App;
