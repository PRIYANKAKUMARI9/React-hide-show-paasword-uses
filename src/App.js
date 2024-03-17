import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import btnModule from "./Button.module.css"

function App() {
  //show or hide passwordrm 

  const[status,setstatus]=useState(false)
  const [pass,setpass]=useState(false)
  const[pass2,setpass2]=useState(false)
  return (
    <div className="App">
      <br/><br/><br/><br/>

      <h1>hide show password !!</h1>
      <input type={pass ? 'text' : 'password'}/>
      <button onClick={()=>setpass(!pass)}>
        {pass ? 'hide here' : 'show here'}
      </button>

      <br/><br/><br/><br/>

     <h1>Another show hide here...!!</h1>      
      <input type={pass2 ? 'text' : 'password'}/>
      <button onClick={()=>setpass2(!pass2)}>
        {pass2 ? 'click hide' : "click show"}
      </button>

      <br/><br/><br/><br/>
      <br/><br/><br/><br/>

      <button className={btnModule.errorr}>Error</button>
      <button className={btnModule.warning}>warning</button>

      <button className={btnModule.para}>onClickit !!</button>
      <button onClick={()=>setstatus(!status)}>
        {(status) ? 'hide' : 'show'}
      </button>
      {
        (status)?
        <h1 className='para'>welcome to WS</h1>
       :
       ""
      }

      

    </div>
  );
}

export default App;
