import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Dash from './components'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/">
        <Dash />
      </Route>
    </Router>
  );
}

export default App;
