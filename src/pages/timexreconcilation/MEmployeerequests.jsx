import React, { useEffect,useState } from 'react'
import MSidebar from '../../components/sidebar/MSidebar'
import Navbar from '../../components/navbar/Navbar'
import api from '../../api/api'
import axios from 'axios'


const MEmployeerequests = () => {

    const [requests,setRequests]=useState([]);
    const [archivedRequests, setArchivedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);
  
    const handleApproval=(index)=>{
      const approvedRequest = requests[index];
      setArchivedRequests([...archivedRequests, approvedRequest]);
      setRequests(requests.filter((_, i) => i !== index));
      let token = localStorage.getItem( "token" );
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let empId=localStorage.getItem('empId');
  
      //  const response=await api.get(`/api/getotltimexrequests/${empId}`);
      //     return response.data
      axios
      .put(`http://localhost:8080/api/request/${empId}`)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    const handleRejection=(index)=>{
      const rejectedRequest = requests[index];
      setRejectedRequests([...rejectedRequests, rejectedRequest]);
      setRequests(requests.filter((_, i) => i !== index));
    }
  
    const retriveList=async()=>{
        let token = localStorage.getItem( "token" );
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let empId=localStorage.getItem('empId');
  
      //  const response=await api.get(`/api/getotltimexrequests/${empId}`);
      //     return response.data
      axios
      .get(`http://localhost:8080/api/getrequeststoparent/${empId}`)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
        
        <div className='main' style={{marginTop:"1%",marginLeft:"2%"}}>
          <h3>Requests</h3>
          <table className='ui table small' style={{width:"80%",textAlign:"center"}}>
                <thead>
                  <tr>
                    <th>Emp id</th>
                    <th>Emp Name</th>
                    <th>Period</th>
                    <th>OTL</th>
                    <th>TIMEX</th>
                    <th>Comments</th>
                    <th>Attachment</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
            
          {requests.map((request,empId)=>(
                  <tr key={empId}>
                    <td>{request.employeeId}</td>
                    <td>{request.empName}</td>
                    <td>{request.periodId}</td>
                    <td>{request.totalOtlHours}</td>
                    <td>{request.totalTimexHours}</td>
                    <td>{request.comments}</td>
                    <td>{request.comments}</td>
                    <td>
                      <button className='ui button blue small' onClick={()=>handleApproval(empId)}>Approve</button>
                      <button className='ui button red small' onClick={()=>handleRejection(empId)}>Reject</button>
                    </td>
                  </tr>
              
              ))}
              {/* <tr>
                <td>{requests[0].periodId}</td>
                <td>{requests[0].periodId}</td>
              </tr> */}
                </tbody>
          </table>
          <h3>Approved Requests</h3>
          <table className='ui table small' style={{width:"80%",textAlign:"center"}} >
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
          <h3>Rejected Requests</h3>
          <table className='ui table small' style={{width:"80%",textAlign:"center"}} >
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
          {/* <h2 style={{marginTop:"5%"}}>Footer</h2> */}
      </div>
    </div>
  
    
    </div>
  )
}

export default MEmployeerequests
