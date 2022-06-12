import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import {Route,Routes} from "react-router-dom"
import Auth from './page/Auth';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/todo' element={<Auth/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
