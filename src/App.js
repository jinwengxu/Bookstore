import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mb-3">
        <Header />
      </div>
      <div className="mainContent container-fluid ">
        <Switch>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="mt-5">
        <Footer />
      </div>     
    </div>
  );
}

export default App;
