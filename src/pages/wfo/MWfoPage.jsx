import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import MSidebar from '../../components/sidebar/MSidebar'
import CalenderComponent from '../../components/wfo/CalenderComponent'
const MWfoPage = () => {
  return (
    <div className="home">
      <MSidebar />
      <div className="homeContainer">
        <Navbar />

        <CalenderComponent/>

      </div>
    </div>
  )
}

export default MWfoPage
