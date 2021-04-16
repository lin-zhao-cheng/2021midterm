import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home'
import Maps from './pages/Maps'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Maps" component={Maps} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
