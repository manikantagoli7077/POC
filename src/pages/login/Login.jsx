import { useState, useEffect} from "react"
import Home from "../home/Home";
// import { useHistory } from 'react-router-dom'
const Login = () => {

  // const history = useHistory();
  const [loggedInUser,setLoggedInUser]=useState(null);
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const users = [
    { username: 'employee1', password: 'employee123', role: 'employee' },
    { username: 'employee2', password: 'employee456', role: 'employee' },
    { username: 'manager1', password: 'manager123', role: 'manager' },
    { username: 'manager2', password: 'manager456', role: 'manager' },
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);


  const handleLogin=()=>{
    const user=users.find(
      (user)=>user.username===username&&user.password===password
    );
    if(user){
      setLoggedInUser(user);

    }else{
      alert('Invalid username or password');
    }
  }
  const handleLogout = () => {
    
    setLoggedInUser(null);
  //  history.push('/login')
  };
  


const renderLogin=()=>{
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} /><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

const renderEmployeeDashboard=()=>{
  return(
      <div>
        {/* <h2>Employee Dashboard</h2> */}
        <Home handleLogout={handleLogout} />
        <button onClick={handleLogout}>Logout</button>
      </div>
  )

}

const renderManagerDashboard=()=>{
    return(
      <div>
        <h2>Manager Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}

const renderDashboard=()=>{
  if(loggedInUser){
    if(loggedInUser.role==='employee'){
      return renderEmployeeDashboard();
    }else if(loggedInUser.role==='manager'){
      return renderManagerDashboard();
    }
    
  }
  return renderLogin();
}
  return <div>{renderDashboard()}</div>
}

export default Login