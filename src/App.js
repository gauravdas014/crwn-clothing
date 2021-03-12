import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Homepage/homepage.component';
import ShopPage from './pages/Shop/shop.component';
import Header from "./components/header/header.component"

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
