import { useState } from "react";
import User from "./User";

function App(){
  const [display,setDisplay] = useState(true)
  return(
    <>
     <h1>Toggle or Hide and Show in React JSX</h1>
     <button onClick={()=>setDisplay(!display)}>Toggle</button>
     {/* {
      display?<h1>Sonu Kumar</h1>:null
     } */}

     {
      display?<User/>:null
     }
    </>
  )
}

export default App;