import React, { Component } from 'react';
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';

class App extends Component {
  state = {
    showSidebar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar
    }));
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar}/>  
        <SideBar toggleSideBar={this.state.toggleSideBar}/>
        <main className={css.Content}><BurgerPage/></main>
      </div>
    );
  }  
}

export default App;
