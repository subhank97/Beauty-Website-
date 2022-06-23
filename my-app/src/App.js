import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Cart from './Components/Cart';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Product">
          <Product />
        </Route>
      </Switch>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
