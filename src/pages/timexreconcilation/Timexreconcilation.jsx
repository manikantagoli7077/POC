import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "../home/home.scss";
import Widget from "../../components/timexwidgets/Timexwidget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


const Timexreconcilation = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="new" />
          <Widget type="old" />
          <Widget type="rejected" />
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

export default Timexreconcilation
