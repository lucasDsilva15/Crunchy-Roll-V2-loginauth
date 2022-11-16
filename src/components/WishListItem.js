import DeleteForever from '@mui/icons-material/DeleteForeverOutlined'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import memberServices from '../Services/memberServices'

export default function WishListItem ({item, retrieveWishlist}) {
    const navigate = useNavigate()
    const [qty, setQty] = useState()
    const handleChange = (e) => {
        setQty(e.target.value)
    }
    const buttonSx = {
        backgroundColor:'#ff9100',
        '&:hover':{
            backgroundColor:'#f57c00'
        }
    }
    const handleDelete = async () => {
        try {
            await memberServices.deleteWishListItem(item._id)
            retrieveWishlist()
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await memberServices.editWishListItem(item._id, {...item, quantity: qty})
            console.log(response)
            retrieveWishlist()
        } catch (error) {
            console.log(error)
        }
    }
    return(
        
        <div id='wishlistdescription'>
           <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} height='270' width='200'/>
           <h2>${item.price}</h2>
           Qty: {item.quantity}<br/>
           <form onBlur={handleSubmit}>
            <label htmlFor='editqty'>Change Qty: </label>
            <input type='number' id='editqty' onChange={handleChange}/><br/> 
           </form>
           <div id='wishlistbtns'>
            <Button variant='contained' onClick={handleDelete} id='wishlistbutton' color='error' size='large' startIcon={<DeleteForever/>}/>
            <Button variant='contained' sx={buttonSx}onClick={() => navigate(`/product/${item.productid}`)} id='wishlistbutton'>Buy Now</Button> 
           </div>
        </div>
       
        
    )
}