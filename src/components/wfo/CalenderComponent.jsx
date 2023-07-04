import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { CalenderEntry } from '../../services/CalenderService';
import { getStatusClassName } from './GetStatusClassname';
import { ArchievedEntries } from './ArchievedEntries';
// import DatePicker from 'react-datepicker';
//  import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Form, Button, Modal } from 'react-bootstrap';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import  SemanticDatepicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const CalenderComponent = () => {

  const [actualDate, setActualDate] = useState(null);
  const [changedDate, setChangedDate] = useState(null);
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');
  const [calendarEntries, setCalendarEntries] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const[showrequests, setShowRequests] =useState([false]);
  const [requests, setRequests] = useState([]);
  const [empName,setEmpName]=useState('');
  const[managerName,setManagerName]=useState('');
  const [archivedEntries, setArchivedEntries] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  const [remainingEntries,setRemainingEntries] = useState([]);

  const latestEntries = calendarEntries.slice(0, 5); // Get the latest five entries

  useEffect(() => {
    // Fetch the calendar entries on component mount
    fetchCalendarEntries();
    fectchEmpName();
    fetchMangerName();
    if (remainingEntries.length > 0) {
      setArchivedEntries(remainingEntries);
    }else{

    }

  }, [remainingEntries]);

  const handleDateChange = (date) => {
    setActualDate(date);
  };

  const handleDateChangec = (date) => {
    setChangedDate(date);
  };

  const fetchCalendarEntries = () => {
    let token = localStorage.getItem( "token" );
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    let empId=localStorage.getItem('empId');

    axios
      .get(`http://localhost:8080/api/getentries/${empId}`)
      .then((response) => {
        setCalendarEntries(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const fectchEmpName =()=>
   {
    let token=localStorage.getItem("token");
    axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
    let empId=localStorage.getItem('empId');
    axios.get(`http://localhost:8080/api/getname/${empId}`)
    .then((response)=>
    {
      setEmpName(response.data);
    })
    .catch((error) =>{
      console.error('Error:',error);
    });

   };

   const fetchMangerName =()=>{
    let token =localStorage.getItem("token");
    axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
    let empId =localStorage.getItem("empId");
    axios.get(`http://localhost:8080/api/getmanagername/${empId}`)
    .then((response)=>{
      setManagerName(response.data);

    })
    .catch((error)=>{
      console.error('Error:',error);

    });
  }

  const handleSubmit = (e) =>  {
    
    e.preventDefault(); 
    // const formattedDate = formatDate(actualDate);

    // Make the POST request to save the calendar entry
    CalenderEntry(actualDate,changedDate,reason)
      .then((data) => {
        
        setShowPopup(true);
        setActualDate('');
        setChangedDate('');
        setReason('');
        console.log('Response:', data);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };
  const handleArchivedButtonClick = () => {
    const updatedEntries = calendarEntries.slice(5);
    setRemainingEntries(updatedEntries);
    setShowArchived(!showArchived);    
  };

  return (
    <div>
      <div className='main' style={{float:"left",width:"20%"}}>
        <Link to="/requests">
            <button className='ui button red' style={{marginLeft:"10%",marginTop:"10%"}}>Show Requests</button>
        </Link>
      </div>
      <div className='ui text'>
        {empName && (
            <p>
                Hi <span>{empName}</span>, Please inform <span>{managerName}</span> about the change in your work from home date
            </p>
            
        )}
        <div className='ui container' style={{borderWidth:"0px",border:"",width:"40%",float:"left",marginTop:"2%"}}>
                <div className='ui form' style={{padding:'10px',background:"white",paddingLeft:"10%"}}>
                    <div className='ui message'>
                     <h3 className='ui heading' style={{marginBottom:"5%"}} >Update Work-from-home dates</h3>
                        <form>
                        
                             
                            <div className='form-group' style={{width:"50%",marginTop:"2%"}}>
                                <label htmlFor="actualDateInput" style={{fontSize:"17px"}}>Actual-Date:</label>
                                    <SemanticDatepicker 
                                    id="actualDateInput"
                                    className="ui button"
                                    selected={actualDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy" // Set the desired display format
                                    placeholderText='DD/MM/YYYY'
                                    
                                    />
                            </div>

                            <div className='form-group' style={{width:"50%",marginTop:"5%"}}>
                                <label htmlFor="changedDateInput" style={{fontSize:"17px"}}>Changed-Date:</label>
                                    <SemanticDatepicker
                                    id="changedDateInput"
                                    className="ui button"
                                    selected={changedDate}
                                    onChange={handleDateChangec}
                                    dateFormat="dd/MM/yyyy" // Set the desired display format
                                    placeholderText='DD/MM/YYYY'
                                    
                                    />
                            </div>
                            
                            <div className='ui form' style={{width:"60%",marginTop:"5%"}}> 
                            <label htmlFor="reason" style={{fontSize:"17px",marginTop:"10%"}}>Reason:</label>
                                <textarea placeholder='Please tell us' id='reason' rows="4"></textarea>
                            </div>
                            <button className='ui button red' style={{marginTop:"8%"}}>Submit</button>
                            <Modal show={showPopup} onHide={handlePopupClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Notification</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                Your request has been submitted successfully.
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handlePopupClose}>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            

                        </form>
                        </div>
                        
        
                </div>
                
        </div>
                        <button className='ui button blue' style={{float:"right",marginRight:"10%",marginTop:"2%"}}>Show Archived</button>
      </div>
      <div className='table-container' style={{width:"80%",marginLeft:"5%"}} >
                <table className='ui table ' >
                    <thead className='tablehead'>
                    <tr>
                    {/* <th>Employee ID</th> */}
                    <th > Actual Date</th>
                        <th>Changed Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {latestEntries.map((entry, index) => (
                        <tr key={index}>
                        {/* <td>{entry.empId}</td> */}
                        <td>{entry.actualDate}</td>
                        <td>{entry.changedDate}</td>
                        <td >{entry.reason}</td>
                        <td className={getStatusClassName(entry.status)}>{entry.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
         </div>
    </div>
  )
}

export default CalenderComponent
