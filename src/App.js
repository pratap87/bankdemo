import logo from './logo.svg';
import './App.css';
import Login from './login';

import { useState } from 'react';
import Home from './Home';

function App() {
  const [islogin,setislogin]=useState(true);
  return (
    <div>
      {
        islogin? <Login setlogin={setislogin}/>:<Home/>
      }

    {!islogin?<button className='logout' onClick={()=>setislogin(true)}>logout</button>:null}
    </div>
  );
}

export default App;
