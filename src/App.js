import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js'


function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}



export default App;
