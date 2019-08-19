import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () =>{
  const activeStyle ={
    color:'blue',
    fontWeight:"bold",
  }
  return(
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
        <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
        <li><NavLink to="/login" activeStyle={activeStyle}>login</NavLink></li>
        <li><NavLink to="/signup" activeStyle={activeStyle}>signup</NavLink></li>
      </ul>
    </div>
  )
};
export default  Menu;