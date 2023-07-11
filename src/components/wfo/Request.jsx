import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Navbar } from 'react-bootstrap';
import MSidebar from '../sidebar/MSidebar';


function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [status,setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [notification,setNotification]=useState('');


 const handlePopupClose = () => {
    setShowPopup(false);
    setNotification('');
    window.location.reload();
    
  };


  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    const parentId = localStorage.getItem('empId');
    let token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8080/api/getrequests/${parentId}`)
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };


  const handleAgree = requestId => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    axios
      .put(`http://localhost:8080/api/update-status/${requestId}`, {
        status: 'AGREED'
      })
      .then(response => {
        setStatus(response.data.status);
        setNotification('You Have Agreed To The request')
        setShowPopup(true)
        // window.location.reload();

      })
      .catch(error => {
        console.log('Error:', error);
      });
  };


  const handleDisAgree = requestId => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    axios
      .put(`http://localhost:8080/api/update-status/${requestId}`, {
        status: 'DISAGREED'
      })
      .then(response => {
        setStatus(response.data.status);
        setShowPopup(true);
        setNotification('You Have Disagreed With The Request')


      })
      .catch(error => {
        console.log('Error:', error);
      });
  };
  
  

 
  return (
    <div className="home">
      <MSidebar />
      <div className="homeContainer">
        <Navbar />
        
      
      <div className='main' style={{marginLeft:"5%",marginTop:"3%"}}>
      <h3>Requests</h3>
      {requests.length === 0 ? (
        <h1 className='no-request' style={{marginLeft:"20%"}}>No requests are found</h1>
      ) : (
      <table className='ui table small' style={{width:"80%",marginLeft:"0%",marginTop:"3%"}  }>
        <thead className='table head'>
          <tr>
            {/* <th>Request ID</th> */}
            <th>RequestId</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Actual Date</th>
            <th>Changed Date</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className>
          {requests.map(request => (
            <tr key={request.requestId}>
              <td>{request.requestId}</td>
              <td>{request.empId}</td>
              <td>{request.empName}</td>
              <td>{request.actualDate}</td>
              <td>{request.changedDate}</td>
              <td>{request.reason}</td>
              <td>
            <button onClick={() => handleAgree(request.requestId)} className='btn btn-success'>
               Agree
            </button>
            <button onClick={()=>handleDisAgree(request.requestId)} className='btn btn-danger' >
                Disagree
            </button>
            
            <Modal show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {notification}
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePopupClose} >
              Close          
            </Button>
        </Modal.Footer>
      </Modal>
            
        </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      </div>
      
    </div>
    </div>
  
      
  );
}

export default RequestsPage;
