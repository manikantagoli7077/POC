import React, { useEffect,useState } from 'react'
import MSidebar from '../../components/sidebar/MSidebar'
import Navbar from '../../components/navbar/Navbar'
import api from '../../api/api'
const MEmployeerequests = () => {

    const [requests,setRequests]=useState([]);
    const [archivedRequests, setArchivedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);
  
    const handleApproval=(index)=>{
      const approvedRequest = requests[index];
      setArchivedRequests([...archivedRequests, approvedRequest]);
      setRequests(requests.filter((_, i) => i !== index));
    }
    const handleRejection=(index)=>{
      const rejectedRequest = requests[index];
      setRejectedRequests([...rejectedRequests, rejectedRequest]);
      setRequests(requests.filter((_, i) => i !== index));
    }
  
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
    console.log(requests)
    // const handleRequestSubmit=(props)={
    //   setRequests([...requests,])
    // }
      const totalotl=requests.map(request=>(
        request.periodId
      ))
      console.log(totalotl)


  return (
    
      <div className="home">
      <MSidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className='main' style={{marginTop:"5%",marginLeft:"2%"}}>
          <h2>Requests</h2>
          <table className='ui table' style={{width:"80%"}}>
                <thead>
                  <tr>
                    <th>Emp id</th>
                    <th>Period</th>
                    <th>OTL</th>
                    <th>TIMEX</th>
                    <th>Comments</th>
                    <th>Status</th>
                    
                  </tr>
                </thead>
                <tbody>
            
          {requests.map((request,index)=>(
                  <tr key={index}>
                    <td>{request.employeeId}</td>
                    <td>{request.periodId}</td>
                    <td>{request.totalotl}</td>
                    <td>{request.totaltimex}</td>
                    <td>{request.comments}</td>
                    <td>
                      <button className='ui button blue' onClick={()=>handleApproval(index)}>Approve</button>
                      <button className='ui button red' onClick={()=>handleRejection(index)}>Reject</button>
                    </td>
                  </tr>
              
              ))}
              {/* <tr>
                <td>{requests[0].periodId}</td>
                <td>{requests[0].periodId}</td>
              </tr> */}
                </tbody>
          </table>
          <h2>Approved Requests</h2>
          <table className='ui table' style={{width:"80%"}} >
                <thead>
                  <tr>
                    <th>Emp id</th>
                    <th>Period</th>
                    <th>OTL</th>
                    <th>TIMEX</th>
                    <th>Comments</th>
                    <th>Status</th>
                    
                  </tr>
                </thead>
                <tbody>
            
          {archivedRequests.map((request,index)=>(
                  <tr key={index}>
                    <td>{request.employeeId}</td>
                    <td>{request.periodId}</td>
                    <td>{request.totalotl}</td>
                    <td>{request.totaltimex}</td>
                    <td>{request.comments}</td>
                    <td>
                      <button className='ui button green' >Approved</button>
                      {/* <button className='ui button red' onClick={()=>handleRejection(index)}>Reject</button> */}
                    </td>
                  </tr>
              
              ))}
              {/* <tr>
                <td>{requests[0].periodId}</td>
                <td>{requests[0].periodId}</td>
              </tr> */}
                </tbody>
          </table>
          <h2>Rejected Requests</h2>
          <table className='ui table' style={{width:"80%"}} >
                <thead>
                  <tr>
                    <th>Emp id</th>
                    <th>Period</th>
                    <th>OTL</th>
                    <th>TIMEX</th>
                    <th>Comments</th>
                    <th>Status</th>
                    
                  </tr>
                </thead>
                <tbody>
            
          {rejectedRequests.map((request,index)=>(
                  <tr key={index}>
                    <td>{request.employeeId}</td>
                    <td>{request.periodId}</td>
                    <td>{request.totalotl}</td>
                    <td>{request.totaltimex}</td>
                    <td>{request.comments}</td>
                    <td>
                      <button className='ui button red' >Rejected</button>
                      {/* <button className='ui button red' onClick={()=>handleRejection(index)}>Reject</button> */}
                    </td>
                  </tr>
              
              ))}
              {/* <tr>
                <td>{requests[0].periodId}</td>
                <td>{requests[0].periodId}</td>
              </tr> */}
                </tbody>
          </table>
          <h2 style={{marginTop:"5%"}}>Footer</h2>
      </div>
    </div>
  
    
    </div>
  )
}

export default MEmployeerequests
