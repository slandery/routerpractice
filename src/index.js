import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './mycomponents/about';
import Home from './mycomponents/home';
import NameAge from './mycomponents/nameage'

class Navbar extends React.Component {
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link> | 
        <Link to="about">About Us</Link> |
        <Link to="nameage">Add pet Info</Link>
      </div>
    );
  }
}

class Routes extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="About" path="/about" component={About} />
          <Route name="Pet Info" path="/nameage" component={NameAge}/>
        </div>
      </Router>
    );
  }
}

export default Navbar

ReactDOM.render(<Routes />, document.getElementById('root'));