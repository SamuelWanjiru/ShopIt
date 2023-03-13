import React from 'react'
import Navbar from '../Navabar/Navbar'
import { SideBar } from '../Navabar/SideBar'
import clothOne from '../Assets/clothOne.jpg'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
    <SideBar />
    
    <div className="homeContainer">
      <Navbar />

      <div style={{paddingTop:'30px'}}>
        <img src={clothOne} alt=""/>
      </div>
    </div>
    </div>
  )
}

export default Home