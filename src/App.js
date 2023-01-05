import { useState } from 'react';
import axios from "axios";

import './App.css';





function App() {
  const initialState = {id:'',battery:'',temperature:''}
  const [inputData , setInputData] = useState(initialState)

  const getData = (e) => {
    const {name, value} = e.target
    setInputData({...inputData,[name]:value})

  }

  const api = () => {
    axios.post("http://localhost:5000/table",
    {id:inputData.id,battery:inputData.battery,temperature :inputData.temperature },
    
    )
    .then(res => {
        console.log("res:",res.data)
    })
    .catch(err => {

        console.log("err:",err);
    })
    
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    api()
    e.reset()
  }
  return (
    <div className="App" id='outline'>
     <form >
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Id</label>
    <input type="email" name='id' value={inputData.id} onChange={getData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Battery</label>
    <input type="email" name='battery' value={inputData.battery} onChange={getData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Temperature</label>
    <input type="text" name='temperature' value={inputData.temperature} onChange={getData} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" onClick={handleOnSubmit}  className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
