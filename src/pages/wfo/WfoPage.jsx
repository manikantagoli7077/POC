import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import CalendarComponent from '../../components/wfo/CalenderComponent'
import WfoNavbar from '../../components/navbar/WfoNavbar'
const WfoPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <WfoNavbar/>
        <CalendarComponent/>

      </div>
    </div>
  )
}

export default WfoPage
