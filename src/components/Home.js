import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home_container">
      <div className="loader"></div>
      <img src={logo} />
      <h1>Welcom to NARUTO CENTER</h1>
      <p>Naruto Center where the enovation at your fingertips!</p>
      <Link to='/landing'><button to='/landing'>View The List</button></Link>
      <div class="elfsight-app-e020585a-69ae-4291-87df-3b67169af5cf"></div>
    </div>
  )
}

export default Home