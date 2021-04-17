import { BrowserRouter, Switch, Route } from 'react-router-dom'



import './App.css';
import Home from './pages/Home'
import Maps from './pages/Maps'
import Trending from './pages/Trending'
import Views from './pages/Views'
import Latest from './pages/Latest'
import Downloads from './pages/Downloads'
import Product from './pages/Product'
// import ScrollToTop from './effect/ScrollToTop'
// import { StoreProvider } from "./store";



function App() {
  return (
    // <StoreProvider>
    <BrowserRouter>
    
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route path="/Maps" component={Maps} />
        <Route path="/Trending" component={Trending} />
        <Route path="/Views" component={Views} />
        <Route path="/Latest" component={Latest} />
        <Route path="/Downloads" component={Downloads} />
        <Route path="/Product/:productId" component={Product} />
        
      </Switch>
      
    </BrowserRouter>
    // </StoreProvider>
  );
}

export default App;
