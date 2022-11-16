import { Link, useNavigate } from "react-router-dom";
import { AppBar, Typography, Box, Toolbar } from "@mui/material";

export default function NavBar({ setUser, user, developer }) {
    const navigate = useNavigate()
    const logout = () => {
    setUser({});
    localStorage.removeItem("token");
  };
  
  if (developer === true) {
    return (
      <Box sx={{ flexGrow: 1 }} id='navbarpad'>
        <AppBar position="fixed" sx={{bgcolor: 'black'}}>

          <Toolbar id="navbar">
            <Typography id='logo'variant="h4" component="div" sx={{ flexGrow: 1, color:'#ff9100' }}>
              Crunchy Spin | Store
            </Typography>
            <div className="navlinks">
              <Link to="/" className="link"> Home </Link>
              <Link to="/allproducts" className="link"> All Products </Link>
              <Link to="/profile" className="link">Profile </Link>
              <Link to="/addproduct" className="link"> Add Product</Link>
              <Link to="/wishlist" className="link"> Wishlist </Link>
              <Link onClick={logout} className="link" >LogOut</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else if (developer === false) {
    return (
      <Box sx={{ flexGrow: 1 }} id='navbarpad'>
        <AppBar position="fixed" sx={{bgcolor: 'black'}}>

          <Toolbar id="navbar">
            <Typography id='logo'variant="h4" component="div" sx={{ flexGrow: 1, color:'#ff9100' }}>
              Crunchy Spin | Store
            </Typography>
            <div className="navlinks">
            <Link to="/" className="link"> Home </Link>
            <Link to="/allproducts" className="link"> All Products </Link>
            <Link to="/profile" className="link">Profile </Link>
            <Link to="/wishlist" className="link"> Wishlist</Link>
            <Link onClick={logout} className="link">LogOut</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }} id='navbarpad'>
      <AppBar position="fixed" sx={{bgcolor: 'black'}}>

        <Toolbar id="navbar">
          <Typography id='logo'variant="h4" component="div" sx={{ flexGrow: 1, color:'#ff9100' }}>
            Crunchy Spin | Store
          </Typography>
          <div className="navlinks">
          <Link to="/" className="link"> Home </Link>
          <Link to="/allproducts" className="link"> All Products </Link>
          <Link to="/profile" className="link">Profile </Link>
          <Link to="/register" className="link"> Register</Link>
          <Link to="/login" className="link"> Login </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    );
  }
}
