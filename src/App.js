import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllProducts from './pages/AllProducts';
import Addproduct from './pages/Addproduct';
import { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import memberServices from './Services/memberServices'
import Productpage from './pages/Productpage';
import userServices from './Services/userServices'
import Wishlist from './pages/Wishlist';

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] =useState(true)
  const [products, setProducts] = useState()

  const currentUserInfo = async () => {
    try {
      const user = await memberServices.info()
      const {username, email, developer} = user.data
      setUser ({username, email, developer})
    } catch (error) {
      let message = error.response.data.error

      if (message.includes('expire')) {
        localStorage.removeItem('token')
      }
      console.log(message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      currentUserInfo(token)
    } else {
      setIsLoading(false)
    }
  }, [])
  

    const getallProducts = async () => {
        try {
            const response = await userServices.allProducts()
            setProducts(response.data.products)
        } catch (error) {
            console.error(error.response.data.error)
        }
    }
    
  
  let routes;
  if(!isLoading){
    if(user.developer === true){
      routes = (
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproducts' element={<AllProducts products={products} getallProducts={getallProducts}/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/profile' element={<Profile username={user.username} email={user.email}/>}/>
        <Route path='/product/:id' element={<Productpage developer={user.developer}/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      )
    } else if (user.developer === false){
      routes = (
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproducts' element={<AllProducts products={products} getallProducts={getallProducts} />}/>
        <Route path='/profile' element={<Profile  username={user.username} email={user.email}/>}/>
        <Route path='/product/:id' element={<Productpage developer={user.developer}/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      )
    } else {
      routes = (
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/allproducts' element={<AllProducts products={products} getallProducts={getallProducts}/>}/>
        <Route path='/register' element={<Register setUser={setUser}/>}/>
        <Route path='/product/:id' element={<Productpage developer={user.developer}/>}/>
      </Routes>
      )
    }
  }
  return (
    <div className="App">
      <NavBar user={user.username} developer={user.developer} setUser={setUser}/>
      {routes}
      
    </div>
  );
}

export default App;
