import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Create from './Components/Create/Create';
import Home from './Pages/Home';
import Navbar from './Components/HomeComponents/Navbar';
import Wrapper from './Components/HomeComponents/Wrapper';
import Footer from './Components/HomeComponents/Footer';
import Poll from './Pages/Poll';
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/create/">
              <Create />
            </Route>
            <Route path="/poll/:id" exact >
              <Poll />
            </Route>
            <Route path="*">
              <div>Not found</div>
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </Router>
    </>
    // <div className="App">
    //   <div className="App__Container">
    //     {/* <Create/> */}
    //   </div>
    // </div>

  );
}

export default App;
