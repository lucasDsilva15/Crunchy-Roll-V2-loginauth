import { Link } from "react-router-dom";

export default function NavBar ({setUser}) {
    const logout = () => {
        setUser({})
        localStorage.removeItem('token')
    }
    return(
        <div>
            <Link to='/'> Home </Link>
            <Link to='/allproducts'> All Products </Link>
            <Link to='/register'> Register</Link>
            <Link to='/login'> Login </Link>
            <Link to='/profile'>Profile </Link>
            <Link onClick={logout}>LogOut</Link>
        </div>
    )
    
}