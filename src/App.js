import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ShowProduct from './pages/AllProducts';
import Addproduct from './pages/Addproduct';
import { useState } from 'react';
import Profile from './pages/Profile';

function App() {

  const [user, setUser] = useState({})
  
  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/allproducts' element={<ShowProduct/>}/>
        <Route path='/register' element={<Register setUser={setUser}/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/profile' element={<Profile user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
