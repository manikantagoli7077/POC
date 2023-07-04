import React from "react";
import { useEffect,useState } from "react";
import './Period.css';

const Period=({period,onChange})=>{
    console.log(period)
    const handleChange=(e)=>{
      onChange(e.target.value);
    }

    const [weekRanges, setWeekRanges]=useState([]);

    useEffect(()=> {
 
    const updateWeekRanges=()=>{
        const currentDate=new Date();
        const weekStart=new Date(currentDate.setDate(currentDate.getDate()+1-currentDate.getDay())); //get date = date, get day = day in a week [13(tue)-2(tue)+1=12 (mon)]
        const weekRanges=[];

        for(let i=0;i<10;i++){
        const start = new Date(weekStart);
        const end = new Date(weekStart.setDate(weekStart.getDate()+6));
        weekRanges.push({start,end});
        weekStart.setDate(weekStart.getDate()+1);
        }
        setWeekRanges(weekRanges);
    };
      
    updateWeekRanges();

    const intervalId = setInterval(updateWeekRanges,1000*60*60*24);

    return()=>{
        clearInterval(intervalId);
    };
 },[]);

  return (
    <div className='dropdown' >
      <span><h4>Period</h4></span>  
      <select className='ui fluid dropdown' name='period' defaultValue={period}  onChange={(e)=>handleChange(e)} >
        {weekRanges.map((week,index)=>(
            <option key={index} value={`${week.start.toDateString()} - ${week.end.toDateString()}`}  >
                {`${week.start.toDateString()} - ${week.end.toDateString()}`}
            </option>
        ))}
      </select>
    </div>
  )
}
export default Period;
