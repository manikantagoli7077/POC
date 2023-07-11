import React, { useEffect, useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from '../../components/datatable/Datatable';
import api from '../../api/api'
import axios from 'axios';
import MSidebar from '../../components/sidebar/MSidebar';
const PreviousReconcilations = () => {

    const [requests,setRequests]=useState([]);

    const retriveList=async()=>{
      let token = localStorage.getItem( "token" );
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      let empId=localStorage.getItem('empId');

    //  const response=await api.get(`/api/getotltimexrequests/${empId}`);
    //     return response.data
    axios
    .get(`http://localhost:8080/api/getotltimexrequests/${empId}`)
    .then((response) => {
      setRequests(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
    
      
      useEffect(
        ()=>{
          const getRequests=async()=>{
            const allList=await retriveList();
            if(allList) setRequests(allList);
          }
        
          getRequests();
        },[]
      )


  return (
    <div className="home">
      <MSidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <Datatable/> */}
        <div className='main' style={{width:"80%",marginLeft:"2%",marginTop:"2%"}}>
            <table className='ui table small' style={{textAlign:"center"}}>
                <thead>
                    <th style={{width:"30%"}}>Period</th>
                    <th style={{width:"5%"}}> OTL</th>
                    <th style={{width:"5%"}}>TIMEX</th>
                    <th style={{width:"25%"}}>Comments</th>
                    <th style={{width:"30%"}}>Status</th>
                    <th>Attachment</th>
                </thead>
                <tbody>
                    {requests.map((request,index)=>(
                        <tr key={index}>
                            <td>{request.periodId}</td>
                            <td>{request.totalOtlHours}</td>
                            <td>{request.totalTimexHours}</td>
                            <td>{request.comments}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default PreviousReconcilations
