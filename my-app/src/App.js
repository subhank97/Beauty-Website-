import './App.css';
import Home from './Components/Home';
import ProductPage from './Components/ProductPage';
import About from './Components/About';
import Cart from './Components/Cart';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/ProductPage">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
