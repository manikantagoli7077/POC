import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../navbar/Navbar'
import 'semantic-ui-css/semantic.min.css'
import Period from '../period/Period'
import api from '../../../api/api'
import uuid from 'react-uuid'
import axios from 'axios'
import MSidebar from '../../sidebar/MSidebar'

class DataForm extends React.Component {

    constructor(props){
        super(props);

    this.state={

        id:"",
        periodId:"",

        monday:"",
        tuesday:"",
        wednesday:"",
        thursday:"",
        friday:"",
        sowd:"",
        sowe:"",
        cowd:"",
        cowe:"",
        soph:"",
        coph:"",

        mondayT:"",
        tuesdayT:"",
        wednesdayT:"",
        thursdayT:"",
        fridayT:"",
        overTimeT:"",

        comments:"",
        // list:""
    };
}
    
    addFormHandler=async(state)=>{
        const {monday,tuesday,wednesday,thursday,friday,cowd,cowe,sowd,sowe,coph,soph,mondayT,tuesdayT,wednesdayT,thursdayT,fridayT,overTimeT,comments,periodId}=this.state
        const totalotl=parseInt(monday)+parseInt(tuesday)+parseInt(wednesday)+parseInt(thursday)+parseInt(friday)+parseInt(cowd)+parseInt(cowe)+parseInt(sowd)+parseInt(sowe)+parseInt(coph)+parseInt(soph)
        const totaltimex=parseInt(mondayT)+parseInt(tuesdayT)+parseInt(wednesdayT)+parseInt(thursdayT)+parseInt(fridayT)+parseInt(overTimeT)
        const list={
            monday,tuesday,wednesday,thursday,friday,cowd,cowe,sowd,sowe,coph,soph,mondayT,tuesdayT,wednesdayT,thursdayT,fridayT,overTimeT,comments,periodId,totalotl,totaltimex
          }
          console.log(list)
          const request={
            id:uuid(),
            ...list
        }
        let token = localStorage.getItem( "token" );
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let empId=localStorage.getItem('empId');
        const response=await axios.post(`http://localhost:8080/api/otltimex/${empId}`,request)
        this.setState([...list,response.data]);
        console.log(list)
    }

    handlePeriodChange=(value)=>{
        this.setState({periodId:value})
    }

    submit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        this.addFormHandler();
    }

    render(){
        const {periodId}=this.state
        return (
            <div className="home">
              <MSidebar />
              <div className="homeContainer" >
                <Navbar />
                <form onSubmit={this.submit}>
                <div className="period">
                       <Period periodId={periodId} onChange={this.handlePeriodChange}/> 
                    </div>
                <div className='otltable' style={{marginTop:"2%", marginLeft:"2%"}}>
                    <h3>OTL</h3>
                    <table className='ui table' style={{width:"80%"}}>
                    <thead>
                                <tr>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>SOWD</th>
                                    <th>SOWE</th>
                                    <th>COWD</th>
                                    <th>COWE</th>
                                    <th>SOPH</th>
                                    <th>COPH</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="number" name='omonday' min="0" max="8" value={this.state.monday} onChange={(e)=>this.setState({monday:e.target.value})} required/></td>
                                    <td><input type="number" name='otuesday' min="0" max="8" value={this.state.tuesday} onChange={(e)=>this.setState({tuesday:e.target.value})} required/></td>
                                    <td><input type="number" name='owednesday' min="0" max="8" value={this.state.wednesday} onChange={(e)=>this.setState({wednesday:e.target.value})} required/></td>
                                    <td><input type="number" name='othursday' min="0" max="8" value={this.state.thursday} onChange={(e)=>this.setState({thursday:e.target.value})} required/></td>
                                    <td><input type="number" name='ofriday' min="0" max="8" value={this.state.friday} onChange={(e)=>this.setState({friday:e.target.value})} required/></td>
                                    <td><input type="number" name='sowd' min="0" max="8" value={this.state.sowd} onChange={(e)=>this.setState({sowd:e.target.value})} /></td>
                                    <td><input type="number" name='sowe' min="0" max="8" value={this.state.sowe} onChange={(e)=>this.setState({sowe:e.target.value})} /></td>
                                    <td><input type="number" name='cowd' min="0" max="8" value={this.state.cowd} onChange={(e)=>this.setState({cowd:e.target.value})} /></td>
                                    <td><input type="number" name='cowe' min="0" max="8" value={this.state.cowe} onChange={(e)=>this.setState({cowe:e.target.value})} /></td>
                                    <td><input type="number" name='soph' min="0" max="8" value={this.state.soph} onChange={(e)=>this.setState({soph:e.target.value})} /></td>
                                    <td><input type="number" name='coph' min="0" max="8" value={this.state.coph} onChange={(e)=>this.setState({coph:e.target.value})} /></td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                <div className="timextable" style={{marginTop:"2%", marginLeft:"2%"}}>
                        <h3>TIMEX</h3>
                        <table className='ui table' style={{width:"50%"}}>
                            <thead>
                                <tr>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Overtime</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><input type="number" name='tmonday' min="0" max="8"  value={this.state.mondayT} onChange={(e)=>this.setState({mondayT:e.target.value})} required/></td>
                                    <td><input type="number" name='ttuesday' min="0" max="8" value={this.state.tuesdayT} onChange={(e)=>this.setState({tuesdayT:e.target.value})} required/></td>
                                    <td><input type="number" name='twednesday' min="0" max="8" value={this.state.wednesdayT} onChange={(e)=>this.setState({wednesdayT:e.target.value})} required/></td>
                                    <td><input type="number" name='tthursday' min="0" max="8" value={this.state.thursdayT} onChange={(e)=>this.setState({thursdayT:e.target.value})} required/></td>
                                    <td><input type="number" name='tfriday' min="0" max="8" value={this.state.fridayT} onChange={(e)=>this.setState({fridayT:e.target.value})} required/></td>
                                    <td><input type="number" name='overtime' min="0" max="8" value={this.state.overTimeT} onChange={(e)=>this.setState({overTimeT:e.target.value})} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='form'>
                        <div className='ui form' style={{width:"40%",marginTop:"2%", marginLeft:"2%",float:"left"}}>
                            <label htmlFor="description">Comments</label>
                            <textarea className='form-control' name="comments" id="description" rows="4" value={this.state.comments} onChange={(e)=>this.setState({comments:e.target.value})} ></textarea>
                        </div>
                        <div className='imageupload' style={{width:"40%",marginTop:"2%", marginLeft:"2%",float:"right",marginTop:"3.5%"}}>
                            <div className='otlimage'>
                                <label htmlFor="otlimg">Attach OTL</label><br />
                                <input type="file" name="" id="otlimg" accept="image/png, image/gif, image/jpeg"  />
                            </div>
                            <div className='timeximage'>
                                <label htmlFor="timeximg">Attach TIMEX</label><br />
                                <input type="file" name="" id="timeximg" accept="image/png, image/gif, image/jpeg" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="ui button red" style={{marginTop:"15%"}} >Submit</button>
                </form>
                </div>
            </div>
          )
    }
}

export default DataForm
