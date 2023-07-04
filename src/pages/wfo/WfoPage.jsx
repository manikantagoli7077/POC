import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import CalendarComponent from '../../components/wfo/CalenderComponent'
const WfoPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <CalendarComponent/>

      </div>
    </div>
  )
}

export default WfoPage
