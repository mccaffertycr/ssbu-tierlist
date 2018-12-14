import React from 'react';
import Routes from '../components/Routes';
import Header from '../components/Header';
import '../styles/app.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
