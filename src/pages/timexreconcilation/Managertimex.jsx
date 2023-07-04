import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "../home/home.scss";
import Widget from "../../components/timexwidgets/MTimexwidget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import MSidebar from '../../components/sidebar/MSidebar';



const Managertimex = () => {
  return (
    <div className="home">
      <MSidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="new" />
          <Widget type="old" />
          <Widget type="rejected" />
          <Widget type="requests" />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        {/* <div className="listContainer"> */}
          {/* <div className="listTitle">Latest Transactions</div> */}
          {/* <Table /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Managertimex
