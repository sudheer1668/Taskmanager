import './App.css';
import {useState,useEffect} from 'react';
import img from "./close.png"
import axios from "axios"

function App() {
  const[items,setItems]=useState([])
  const[task,setTask]=useState('')

  
  function addItems(){
   setItems((prevState)=>[task,...prevState])
   setTask("")
  }
  function delItem(itemoo) {
   setItems(items.filter(function(item) {
      return item !== itemoo
  }))
    
  }
  function store(e){
    setTask(e.target.value)
  
    
}
  return (
    <div className="App">
      <header className="App-header">
        Welcome
        <p>Enter  your task below...</p>
      </header>
      <main>
        <div className="han">
          <div style={{display:'flex', paddingTop:'3px'}}>
            <input value={task} type="text" class="form-control" placeholder="Add a Task" onChange={(e)=>store(e)} style={{marginRight:'5px'}}/>
            <button type="button" class="btn btn-outline-primary" onClick={addItems}>Add</button>
          </div>
           <div style={{minHeight:'0px',width:'390px', backgroundColor:'#F5EEDC',margin:'10px', paddingTop:'0.5px' ,paddingBottom:'0.5px' ,borderRadius:'5px'}}>
              {items.map((item,index)=>
              <div style={{backgroundColor: 'white',minHeight:'50px',borderRadius:'5px',margin:'30px',textAlign:'center',display:'flex',justifyContent:"space-between"}}>

                <h6>{item}</h6> 
                <img onClick={()=>delItem(item)} style={{height:"10px",width:"10px",marginTop:"8px", marginRight:"5px"}} src={img} />       
                </div>
              )}

           
    
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;
