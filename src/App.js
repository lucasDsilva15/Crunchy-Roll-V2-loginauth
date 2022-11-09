import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ShowProduct from './pages/AllProducts';
import Addproduct from './pages/Addproduct';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/allproducts' element={<ShowProduct/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
