import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import MSidebar from "../../components/sidebar/MSidebar";

const MHome = ({handleLogout}) => {
  return (
    <div className="home">
      <MSidebar handleLogout={handleLogout}/>
      <div className="homeContainer">
        <Navbar  />
        <div className="widgets" style={{display:'inline-flex', width:'100%'}}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts" style={{display:'inline-flex', width:'100%'}}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer" style={{display:'none', width:'100%'}}>
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default MHome;
