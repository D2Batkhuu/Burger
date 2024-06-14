
import React from 'react';
import css from'./style.module.css';
import '../../components/Toolbar'
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';

function App() {
  return (
    <div className="App">
      
    <Toolbar/>  
    <main className={css.Content}><BurgerPage/></main>
    </div>
  );
}

export default App;
