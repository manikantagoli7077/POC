import React from 'react'
import '../widget/widget.scss'
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { Link } from "react-router-dom";
const Timexwidget = ({type}) => {
    let data;
    switch(type){
        case "new":
      data = {
        title: "New Reconcilation",
        link:'dataform',
        icon: (
          <MoreTimeIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      case "old":
      data = {
        title: "Previous Reconcilations",
        link:'previousreconcilations',
        icon: (
          <DriveFileMoveOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      case "rejected":
      data = {
        title: "Rejected Reconcilations",
        link:'rejectedreconcilations',
        icon: (
          <ReplayOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    }
  return (
    <div>
      <div className="widget">
      <div className="left">
        <Link to={data.link}>
             <span className="title">{data.title}</span>
        </Link>
        
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
    </div>
  )
}

export default Timexwidget
