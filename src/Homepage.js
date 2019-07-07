import React from 'react';
import NavBar from './NavBar'
import MainPicture from './MainPicture'

function Homepage() {
  return (
    <div>
      <NavBar />
      <section className="Main Picture"><MainPicture/></section>
      <div className="Family Picture"></div>
    </div>
  )
}

export default Homepage;
