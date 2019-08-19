import React from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

const Home = ()=>{
  return (
    <div>
      <h2>Battle Diet</h2>
        <form>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
          <Link to="/signup">Signup</Link>
          </div>
        </form>
     
    </div>
  )
}
export default Home;