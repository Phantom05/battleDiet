import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home, About, Posts, Login,Signup} from 'pages';
import Menu from 'components/Menu';

class App extends Component{
  render(){
    return(
      <div>
        <Menu/>
        <Route exact path="/" component={Home}/>
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/about/:name" component={About}/>
      </Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      {/* <Route path="/posts" component={Posts} /> */}
      </div>
    )
  }
}

export default App;