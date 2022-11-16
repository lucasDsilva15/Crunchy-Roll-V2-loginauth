import { Button, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import memberServices from "../Services/memberServices"
import StarOutlineIcon from '@mui/icons-material/StarOutline';


export default function ShowProduct ({product}) {
    const buttonSx = {
        backgroundColor:'#ff9100',
        '&:hover':{
            backgroundColor:'#f57c00'
        }
    }
    const navigate = useNavigate()
    const addProductToWishlist = async () => {
        try {
        const {_id, ...rest} = product
        const response = await memberServices.addToWishlist({...rest, quantity:1, productid: _id })
        console.log(response) 
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    return(
        <div className="perproduct">
            <img id='product-image' src={product.image} height='400' onClick={() => navigate(`/product/${product._id}`)} alt={product.name}/><br/>
            {product.name}<br/>
            ${product.price} <br/>
            Stock: {product.quantity} <br/>
            <IconButton aria-label="Example" onClick={addProductToWishlist} >
                <StarOutlineIcon sx={{color: 'orange'}}/>
            </IconButton>
            <Button sx={buttonSx} variant='contained' onClick={() => navigate(`/product/${product._id}`)}> Buy </Button>
        </div>
    )
}
