import React from 'react';
import queryString from 'query-string';
import Menu from '../components/Menu'

const About = ({location,match}) =>{
  const query = queryString.parse(location.search);
  console.log(query);
  const detail = query.detail === 'true'
  return (
    <div>
      <Menu />
      <h2>About {match.params.name}</h2>
      {detail && 'detail: blaghblah'}
    </div>
  )
}

export default About;