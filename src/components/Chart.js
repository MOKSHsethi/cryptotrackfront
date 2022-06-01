import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import './CSS/chart.css';

export default function Chart(props) {
    const[hisdata ,sethisdata] = useState();
    const [days,setdays] = useState(1);
    const name = props.name;
 
   

    const fetchdata = async()=>{
          const {data} =  await axios.get(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${days}`);
         // console.log(data.prices);
          sethisdata(data.prices);
          
          
    }
    
    useEffect(() => {
      fetchdata();
     
    }, [])

    function oneday(){
      setdays(1);
      fetchdata();
    }
    function seven(){
      setdays(7);
      fetchdata();
    }
    function year(){
      setdays(365);
      fetchdata();
    }
    
  return (
    <>
   
    <div className='charts'>
     {
       !hisdata ? (
         <div className ="spinner-border text-danger" role="status">
           <span className='visually-hidden'>Loading....</span>
           </div>
       ):(
         <>
          <Line
       data={{
         labels:hisdata.map(coin=>{
           let date = new Date(coin[0]);
           let time =
           date.getHours()>12 
           ? `${date.getHours()-12}:${date.getMinutes()} PM`
           : `${date.getHours()}:${date.getMinutes()} AM`

           return days === 1 ? time: date.toLocaleDateString();
         }),
         datasets:[
           {data:hisdata.map((coin)=>coin[1]),
            label:`price in ${days} day in USD`,
            
            borderColor: "red"
          }
           
         ]
       }} 
       options = {{elements:{
         point:{
           radius:1,
         }
       }}}
       />
       <div style={{
         display:"flex",
         marginTop:20,
       
         justifyContent:"space-around",
         width:"100%"
       }}>
         <h3 >Double Click to change days</h3>
       <button className='btn btn-danger' onClick={oneday} >24 Hours</button>
       <button className='btn btn-danger' onClick={seven}>7 Days</button>
       
       <button className='btn btn-danger' onClick={year}>1 Year</button>
       </div>
     
         </>
       )

       }

    </div>
    
 
     </>

    
  )
}