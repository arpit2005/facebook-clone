import { useEffect, useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Dash from './components';

function App() {
  const [device, setDevice] = useState('');

  useEffect(() => {
     if (window.innerWidth > 1280) {
      setDevice('lg');
    } else if (window.innerWidth > 1024) {
      setDevice('md');
    } else if (window.innerWidth > 768) {
      setDevice('sm');
    } else if (window.innerWidth > 468){
      setDevice('xs');
     } else {
      setDevice('mobile');
    }
  }, []);

  const screenSize = () => {
    if (window.innerWidth > 1280) {
      setDevice('lg');
    } else if (window.innerWidth > 1024) {
      setDevice('md');
    } else if (window.innerWidth > 768) {
      setDevice('sm');
    } else if (window.innerWidth > 468){
      setDevice('xs');
     } else {
      setDevice('mobile');
    }
  }

  window.addEventListener('resize', screenSize);
  
  return (
    <>
      <Header device={device} />
      <Router>
        <Dash exact path="/" page="home" device={device} />
        <Dash path="/friends" page="friends" device={device} />
        <Dash path="/about" page="about" device={device} />
      </Router>
    </>
  );
}

export default App;
