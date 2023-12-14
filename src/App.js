import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import {useState} from "react"
function App() {
  const [user,setLoginUser]=useState({})
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/login" element={ <Login/>}/>
                <Route path="/register" element={ <Signup/>}/>

            </Routes>
      </BrowserRouter>
   
    
    
    </div>
  );
}

export default App;