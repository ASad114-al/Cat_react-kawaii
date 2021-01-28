import { useState } from 'react'

const DayToNight  = () => {
 const [isDay, setIsDay]= useState(false)
/*  const[color,setColor]=useState("red") */
 const handDayToNight =()=>{
     setIsDay(!isDay )
 }

    return ( 
        <div style={{background: isDay ? 'black' : 'white'} }  >

                <h1 style={{color:  !isDay ?   'black':'white'}}>{isDay ? "Night" : "Day"}</h1>
        <button onClick={handDayToNight}>Change to {!isDay ? "Night" : "Day"} </button>
        </div>
     );
}
 
export default DayToNight;