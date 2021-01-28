
import { useState } from 'react'

const Faq = () => {
    const[count, setCount]= useState(0)
  
    return ( 
        <section>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reast</button>
        </section>
     );
}
 
export default Faq;