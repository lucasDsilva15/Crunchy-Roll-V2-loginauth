import { Link, useNavigate } from "react-router-dom";
import { AppBar, Typography, Box, Toolbar, Menu, MenuList, IconButton } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavBar({ setUser, user, developer }) {
    const navigate = useNavigate()

    const logout = () => {
    setUser({});
    localStorage.removeItem("token");
  };

  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleOpenMenu2 = (e) => {
    setAnchorEl2(e.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleMenuClose2 = () => {
    setAnchorEl2(null)
  }
  if (developer === true) {
    return (
      <Box sx={{ flexGrow: 1 }} id='navbarpad'>
        <AppBar position="fixed" sx={{bgcolor: 'black'}}>

          <Toolbar id="navbar">
            <Typography id='logo'variant="h4" component="div" onClick={() => navigate('/')} sx={{ flexGrow: 1, color:'#ff9100' }}>
              Crunchy Spin | Store
            </Typography>
            <div className="navlinks">
              <Link to="/" className="link"> Home </Link>
              <span className="link" onClick={handleOpenMenu} aria-controls='menubar'> Products </span>
              <Menu id='menubar' onClose={handleMenuClose}anchorEl={anchorEl} open={Boolean(anchorEl)}>
                <MenuList onClick={handleMenuClose}>
                    <MenuList className='menulink' onClick={()=> {handleMenuClose(); navigate('/allproducts')}}> All Products </MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/apparel')}}>Apparel</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/dvd')}}>DVD's</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/figurines')}}>Figurines</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/manga')}}>Manga</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/misc')}}>Misc.</MenuList>
                </MenuList>
              </Menu>
              <Link to="/addproduct" className="link"> Add Product</Link>
              <Link to="/wishlist" className="link"> Wishlist </Link>
              <IconButton sx={{color: 'white'}} onClick={handleOpenMenu2} aria-controls='menu' >
                <AccountCircleIcon fontSize="large" />
                </IconButton>
                <Menu id='menu' onClose={handleMenuClose2} anchorEl={anchorEl2} open={Boolean(anchorEl2)}>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose2(); navigate('/profile')}}>Profile</MenuList>
                    <MenuList className='menulink' onClick={() => {handleMenuClose2(); navigate('/'); logout()}}> Log Out</MenuList>
                </Menu>
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
            <Typography id='logo'variant="h4" component="div"  onClick={() => navigate('/')} sx={{ flexGrow: 1, color:'#ff9100' }}>
              Crunchy Spin | Store
            </Typography>
            <div className="navlinks">
            <Link to="/" className="link"> Home </Link>
            <span className="link" onClick={handleOpenMenu} aria-controls='menu'> Products </span>
              <Menu id='menubar' onClose={handleMenuClose}anchorEl={anchorEl} open={Boolean(anchorEl)}>
                <MenuList onClick={handleMenuClose}>
                    <MenuList className='menulink' onClick={()=> {handleMenuClose(); navigate('/allproducts')}}> All Products </MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/apparel')}}>Apparel</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/dvd')}}>DVD's</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/figurines')}}>Figurines</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/manga')}}>Manga</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/misc')}}>Misc.</MenuList>
                </MenuList>
              </Menu>
            <Link to="/wishlist" className="link"> Wishlist</Link>
            <IconButton sx={{color: 'white'}} onClick={handleOpenMenu2} aria-controls='menu' >
                <AccountCircleIcon fontSize="large" />
                </IconButton>
                <Menu id='menu' onClose={handleMenuClose2} anchorEl={anchorEl2} open={Boolean(anchorEl2)}>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose2(); navigate('/profile')}}>Profile</MenuList>
                    <MenuList className='menulink' onClick={() => {handleMenuClose2(); navigate('/'); logout()}}> Log Out</MenuList>
                </Menu>
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
          <Typography id='logo'variant="h4" component="div" onClick={() => navigate('/')} sx={{ flexGrow: 1, color:'#ff9100' }}>
            Crunchy Spin | Store
          </Typography>
          <div className="navlinks">
          <Link to="/" className="link"> Home </Link>
          <span className="link" onClick={handleOpenMenu} aria-controls='menu'> Products </span>
              <Menu id='menubar' onClose={handleMenuClose}anchorEl={anchorEl} open={Boolean(anchorEl)}>
                <MenuList onClick={handleMenuClose}>
                    <MenuList className='menulink' onClick={()=> {handleMenuClose(); navigate('/allproducts')}}> All Products </MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/apparel')}}>Apparel</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/dvd')}}>DVD's</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/figurines')}}>Figurines</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/manga')}}>Manga</MenuList>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose(); navigate('/misc')}}>Misc.</MenuList>
                </MenuList>
              </Menu>
          <IconButton sx={{color: 'white'}} onClick={handleOpenMenu2} aria-controls='menu' >
                <AccountCircleIcon fontSize="large" />
                </IconButton>
                <Menu id='menu' onClose={handleMenuClose2} anchorEl={anchorEl2} open={Boolean(anchorEl2)}>
                    <MenuList className="menulink" onClick={()=> {handleMenuClose2(); navigate('/register')}}> Register </MenuList>
                    <MenuList className='menulink' onClick={() => {handleMenuClose2(); navigate('/login')}}> Login </MenuList>
                </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    );
  }
}
