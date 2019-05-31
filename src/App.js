import React, {Component} from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';

class App extends Component{
  render(){
    return (
      <div>
        <Route exact path="/" component={Home}/>  
      </div>
    )
  }
}

export default withRouter(App);
