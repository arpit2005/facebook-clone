import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    console.log(window.innerWidth);
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
    <Router>
      <Header device={device} />
      <Route path="/">
        <Dash device={device} />
      </Route>
    </Router>
  );
}

export default App;
