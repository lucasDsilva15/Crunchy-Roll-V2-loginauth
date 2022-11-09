import { Link } from "react-router-dom";

export default function NavBar ({setUser, user, developer}) {
    const logout = () => {
        setUser({})
        localStorage.removeItem('token')
    }
    if(developer === true){
       return(
            <div>
                Welcome developer {user}
                <Link to='/'> Home </Link>
                <Link to='/allproducts'> All Products </Link>
                <Link to='/profile'>Profile </Link>
                <Link to='/addproduct'> Add Product</Link>
                <Link onClick={logout}>LogOut</Link>
            </div>
    ) 
    } else if (developer === false){
        return(
            <div>
                Welcome {user}
                <Link to='/'> Home </Link>
                <Link to='/allproducts'> All Products </Link>
                <Link to='/profile'>Profile </Link>
                <Link onClick={logout}>LogOut</Link>
            </div>  
        )  
    } else {
        return(
            <div>
                <Link to='/'> Home </Link>
                <Link to='/allproducts'> All Products </Link>
                <Link to='/profile'>Profile </Link>
                <Link to='/register'> Register</Link>
                <Link to='/login'> Login </Link> 
            </div>
            
        )
            
    }
    
    
}