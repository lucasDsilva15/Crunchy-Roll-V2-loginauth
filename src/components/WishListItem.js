import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import memberServices from '../Services/memberServices'

export default function WishListItem ({item, retrieveWishlist}) {
    const navigate = useNavigate()
    const [qty, setQty] = useState()
    const handleChange = (e) => {
        setQty(e.target.value)
    }
    const handleDelete = async () => {
        try {
            const response = await memberServices.deleteWishListItem(item._id)
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
        <div>
           {item.name}<br/>
           ${item.price}<br/>
           {item.quantity}<br/>
           <form onSubmit={handleSubmit}>
            <label htmlFor='editqty'>Change Qty: </label>
            <input type='number' id='editqty' onChange={handleChange}/><br/> 
            <input type='submit'></input>
           </form>
           
           <button onClick={handleDelete}> Remove From Wishlist</button> 
           <button onClick={() => navigate(`/product/${item.productid}`)}>Buy Now</button> 
        </div>
        
    )
}