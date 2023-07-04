import React, { useEffect, useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from '../../components/datatable/Datatable';
import api from '../../api/api'
const PreviousReconcilations = () => {

    const [requests,setRequests]=useState([]);

    const retriveList=async()=>{
        const response=await api.get('/api/test/getdata');
        return response.data
      }
    
      
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
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <Datatable/> */}
        <div className='main' style={{width:"70%",marginLeft:"2%",marginTop:"2%"}}>
            <table className='ui table'>
                <thead>
                    <th style={{width:"40%"}}>Period</th>
                    <th style={{width:"10%"}}> OTL</th>
                    <th style={{width:"10%"}}>TIMEX</th>
                    <th style={{width:"25%"}}>Comments</th>
                    <th style={{width:"5%"}}>Status</th>
                   
                </thead>
                <tbody>
                    {requests.map((request,index)=>(
                        <tr key={index}>
                            <td>{request.periodId}</td>
                            <td>{request.totalotl}</td>
                            <td>{request.totaltimex}</td>
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
